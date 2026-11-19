#!/usr/bin/env node
/**
 * Builds the site.
 *
 *   npm run build        -> dist/        (every HTML page encrypted with StatiCrypt; needs GUIDE_PASSWORD)
 *   npm run build:plain  -> dist-plain/  (NOT encrypted; for local preview only, never deploy this)
 *
 * Pipeline: content/*.md -> marked tokens -> small custom renderer (steps, callouts, checklist, TOC)
 *           -> HTML pages with inlined CSS/JS -> (optional) StatiCrypt over every .html file.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync, readdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { marked } from "marked";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const PLAIN = process.argv.includes("--plain");
const OUT = join(ROOT, PLAIN ? "dist-plain" : "dist");
// The encrypted build renders plain pages into a temporary staging folder first; StatiCrypt then writes
// the encrypted copies into dist/ and the staging folder is deleted. dist/ never holds plaintext pages.
const STAGE = PLAIN ? OUT : join(ROOT, ".build-tmp");
const PLAIN_MARKER = '<meta name="generator" content="asg-unencrypted">';

function fail(msg) {
  console.error("\n❌ BUILD FAILED: " + msg + "\n");
  process.exit(1);
}

/* ------------------------------------------------------------------ config + password */

const config = JSON.parse(readFileSync(join(ROOT, "site.config.json"), "utf8"));

let password = null;
if (!PLAIN) {
  // Local convenience: allow GUIDE_PASSWORD in a git-ignored .env file. Cloudflare sets it as an env var.
  if (!process.env.GUIDE_PASSWORD && existsSync(join(ROOT, ".env")) && typeof process.loadEnvFile === "function") {
    process.loadEnvFile(join(ROOT, ".env"));
  }
  password = process.env.GUIDE_PASSWORD;
  if (!password || !password.trim()) {
    fail(
      "GUIDE_PASSWORD is not set.\n" +
        "  The encrypted build needs the site password in the GUIDE_PASSWORD environment variable.\n" +
        "  On Cloudflare Pages: Settings > Variables and Secrets > add GUIDE_PASSWORD (type: Secret)\n" +
        "  for both Production and Preview, then retry the deployment.\n" +
        "  For an unencrypted local preview use: npm run build:plain"
    );
  }
  const min = Number(config.minPasswordLength) || 12;
  if (password.length < min) {
    fail(`GUIDE_PASSWORD is too short (${password.length} characters). Use a passphrase of at least ${min} characters.`);
  }
  if (!/^[0-9a-f]{32}$/.test(config.staticryptSalt || "")) {
    fail("site.config.json: staticryptSalt must be a 32-character lowercase hex string.");
  }
}

/* ------------------------------------------------------------------ helpers */

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/\*\*|`/g, "")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "section";

const stripMd = (s) => String(s).replace(/\*\*|__|`/g, "").replace(/\*/g, "");

const isPlaceholder = (v) => /^\[.*\]$/.test(String(v).trim());

/** Contact value -> HTML (placeholder badge, mailto/tel link or plain text). */
function contactHtml(value) {
  const v = String(value).trim();
  if (isPlaceholder(v)) return `<span class="placeholder">${esc(v)}</span>`;
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return `<a href="mailto:${esc(v)}">${esc(v)}</a>`;
  if (/^\+?[\d\s().-]{6,}$/.test(v)) return `<a href="tel:${esc(v.replace(/[^\d+]/g, ""))}">${esc(v)}</a>`;
  if (/^https?:\/\//.test(v)) return `<a href="${esc(v)}" rel="noopener noreferrer">${esc(v)}</a>`;
  return esc(v);
}

/** The placeholders used in the guides, mapped to values from site.config.json. */
const PLACEHOLDERS = {
  "[IT email address]": config.it.email,
  "[IT phone number]": config.it.phone,
};

function fillPlaceholders(md) {
  for (const [key, value] of Object.entries(PLACEHOLDERS)) {
    const html = contactHtml(value);
    md = md.split("`" + key + "`").join(html).split(key).join(html);
  }
  return md;
}

const markVerify = (html) =>
  html.replace(
    /check: path may differ/g,
    '<span class="verify" title="Apple may label this slightly differently on your device">check: path may differ</span>'
  );

/* ------------------------------------------------------------------ callouts */

const CALLOUTS = [
  [/^why this matters/i, "why"],
  [/^what it is/i, "why"],
  [/^heads-up/i, "heads"],
  [/^before you start/i, "heads"],
  [/^how to check it worked/i, "check"],
  [/^if (you don['’]t|it says|it doesn['’]t)/i, "trouble"],
  [/^downsides/i, "warn"],
  [/^what it looks like/i, "heads"],
  [/^do this instead/i, "check"],
  [/^if it already happened/i, "trouble"],
];

/** Returns {type, boldOnly} for a paragraph that starts with a **Label:** */
function classifyParagraph(text) {
  const t = text.trim();
  const m = t.match(/^\*\*([^*]+?)\*\*/);
  if (!m) return null;
  const label = m[1].trim();
  const boldOnly = m[0].length === t.length;
  const hasColon = label.endsWith(":");
  let type = null;
  if (hasColon) for (const [re, ty] of CALLOUTS) if (re.test(label)) { type = ty; break; }
  return { type, boldOnly, endsWithColon: t.endsWith(":") };
}

/* ------------------------------------------------------------------ guide renderer */

const STEP_RE = /^(\d+)\.\s+(.*)$/;
const PRESTEP_RE = /^before you start:\s*/i;

function stepInfo(token) {
  if (token.type !== "heading" || token.depth < 2) return null;
  const m = token.text.match(STEP_RE);
  if (m) return { num: m[1], title: m[2], showNum: true };
  if (PRESTEP_RE.test(token.text)) return { num: "0", title: token.text, showNum: false };
  return null;
}

function renderGuide(md, guide) {
  const tokens = marked.lexer(fillPlaceholders(md));
  const links = tokens.links;
  const parse = (toks) => {
    const arr = [...toks];
    arr.links = links;
    return marked.parser(arr);
  };

  // pre-pass: page title, step depth, which headings are "groups" that contain steps
  const titleIdx = tokens.findIndex((t) => t.type === "heading" && t.depth === 1);
  const title = titleIdx >= 0 ? tokens[titleIdx].text : guide.button;
  const stepDepths = tokens.filter((t) => stepInfo(t)).map((t) => t.depth);
  if (!stepDepths.length) fail(`${guide.source}: no numbered step headings found ("## 1. ...").`);
  const stepDepth = Math.min(...stepDepths);
  const groupIdx = new Set();
  tokens.forEach((t, i) => {
    if (i === titleIdx || t.type !== "heading" || stepInfo(t) || t.depth >= stepDepth) return;
    for (let j = i + 1; j < tokens.length; j++) {
      const u = tokens[j];
      if (u.type !== "heading") continue;
      if (stepInfo(u)) { groupIdx.add(i); break; }
      if (u.depth <= t.depth) break;
    }
  });

  const usedIds = new Set();
  const uniqueId = (base) => {
    let id = base, n = 2;
    while (usedIds.has(id)) id = `${base}-${n++}`;
    usedIds.add(id);
    return id;
  };

  const toc = [];
  const steps = [];
  let out = "";
  let pending = [];
  let openStep = null;

  const flush = () => { if (pending.length) { out += parse(pending); pending = []; } };
  const doneToggle = (num, suffix, label) =>
    `<label class="done-toggle"><input type="checkbox" class="step-check" data-step="${num}" id="done-${num}${suffix}"> ${label}</label>`;
  const closeStep = () => {
    if (!openStep) return;
    flush();
    out +=
      `<div class="step-foot">${doneToggle(openStep, "-b", `Done with this step`)}` +
      `<a class="top-link" href="#checklist">Back to checklist</a></div></section>\n`;
    openStep = null;
  };

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (i === titleIdx) continue;

    if (t.type === "heading") {
      const info = stepInfo(t);
      if (openStep && t.depth <= stepDepth) closeStep();
      flush();
      if (info) {
        if (steps.some((s) => s.num === info.num)) fail(`${guide.source}: step ${info.num} appears twice.`);
        const id = uniqueId(`step-${info.num}`);
        const inline = marked.parseInline(info.title);
        steps.push({ num: info.num, id, title: stripMd(info.title) });
        toc.push({ kind: "step", id, num: info.num, text: stripMd(info.title), showNum: info.showNum });
        out +=
          `<section class="step" id="${id}" data-step="${info.num}" aria-labelledby="${id}-h">` +
          `<div class="step-head"><h3 id="${id}-h">` +
          (info.showNum ? `<span class="step-num" aria-hidden="true">${info.num}</span><span class="visually-hidden">Step ${info.num}: </span>` : "") +
          `${inline}</h3>${doneToggle(info.num, "", "Done")}</div>\n`;
        openStep = info.num;
      } else {
        const level = t.depth <= stepDepth ? 2 : Math.min(6, t.depth - stepDepth + 3);
        const isChecklist = /^checklist$/i.test(t.text.trim());
        const id = uniqueId(isChecklist ? "checklist" : slugify(t.text));
        const isGroup = groupIdx.has(i);
        if (level === 2) toc.push({ kind: isGroup ? "group" : "section", id, text: stripMd(t.text) });
        out += `<h${level} id="${id}"${isGroup ? ' class="part"' : ""}>${marked.parseInline(t.text)}</h${level}>\n`;
      }
      continue;
    }

    if (t.type === "hr") { flush(); continue; }

    if (t.type === "blockquote") {
      flush();
      out += `<aside class="callout callout-note">${parse(t.tokens)}</aside>\n`;
      continue;
    }

    if (t.type === "list" && t.items.length && t.items.every((it) => it.task)) {
      flush();
      out += `<ul class="checklist">` + t.items.map((it) => {
        const m = it.text.match(STEP_RE);
        const num = m ? m[1] : "0";
        const label = m ? `${m[1]}. ${m[2]}` : it.text;
        return `<li data-step-item="${num}"><input type="checkbox" class="step-check" data-step="${num}" aria-label="Mark step ${num} done">` +
          `<a href="#step-${num}">${marked.parseInline(label)}</a></li>`;
      }).join("") + `</ul>\n`;
      continue;
    }

    if (t.type === "paragraph") {
      const c = classifyParagraph(t.text);
      if (c && c.type) {
        flush();
        const group = [t];
        if (c.endsWithColon) {
          let j = i + 1;
          while (j < tokens.length && tokens[j].type === "space") j++;
          if (j < tokens.length && tokens[j].type === "list") { group.push(tokens[j]); i = j; }
        }
        out += `<div class="callout callout-${c.type}">${parse(group)}</div>\n`;
        continue;
      }
      if (c && c.boldOnly) {
        flush();
        out += `<p class="subhead">${marked.parseInline(t.text.trim().replace(/^\*\*|\*\*$/g, ""))}</p>\n`;
        continue;
      }
    }

    pending.push(t);
  }
  closeStep();
  flush();

  // checklist items must point at real steps
  const stepNums = new Set(steps.map((s) => s.num));
  for (const m of out.matchAll(/href="#step-(\d+)"/g)) {
    if (!stepNums.has(m[1])) fail(`${guide.source}: checklist links to step ${m[1]}, which has no heading.`);
  }

  return { title: stripMd(title), html: markVerify(out), toc, steps };
}

/* ------------------------------------------------------------------ page templates */

const CSS = readFileSync(join(ROOT, "src/site.css"), "utf8");
const GUIDE_JS = readFileSync(join(ROOT, "src/guide.js"), "utf8");
const EXTRA_CSS = `.visually-hidden{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}`;

function page({ title, description, body, guideId = "", script = "" }) {
  return `<!doctype html>
<html lang="en"${guideId ? ` data-guide="${esc(guideId)}"` : ""}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<meta name="referrer" content="no-referrer">
<meta name="color-scheme" content="light dark">
${PLAIN_MARKER}
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<style>${CSS}\n${EXTRA_CSS}</style>
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
${body}
${script ? `<script>${script}</script>` : ""}
</body>
</html>
`;
}

function contactBlock() {
  return `<section class="contact" aria-labelledby="contact-h">
<h2 id="contact-h">How to reach IT</h2>
<dl>
<dt>Email</dt><dd>${contactHtml(config.it.email)}</dd>
<dt>Phone</dt><dd>${contactHtml(config.it.phone)}</dd>
</dl>
<p style="margin:12px 0 0">Stuck on a step? Tell IT the step number. A screenshot helps a lot.</p>
</section>`;
}

function footer(homeHref) {
  return `<footer class="site-footer"><div class="inner">
<p>Questions? Email ${contactHtml(config.it.email)} or call ${contactHtml(config.it.phone)}.</p>
<p>Your ticks are saved only in this browser, on this device.${PLAIN ? "" : ` <a href="${homeHref}?staticrypt_logout">Forget the password on this device</a>.`}</p>
</div></footer>`;
}

function guidePage(guide, r) {
  const tocItems = r.toc.map((e) => {
    if (e.kind === "step") {
      return `<li class="toc-step" data-step-item="${e.num}"><a href="#${e.id}"><span class="tick" aria-hidden="true"></span><span>${e.showNum ? e.num + ". " : ""}${esc(e.text)}</span></a></li>`;
    }
    return `<li class="toc-${e.kind === "group" ? "group" : "section"}"><a href="#${e.id}">${esc(e.text)}</a></li>`;
  }).join("\n");

  const body = `<header class="topbar"><div class="topbar-inner">
<a class="home" href="../">&larr; All guides</a>
<div class="progress">
  <div class="progress-text"><span id="progress-count">0 of ${r.steps.length} done</span><button type="button" class="reset" id="reset-progress">Reset my progress</button></div>
  <div class="bar" id="progress-bar" role="progressbar" aria-label="Steps done" aria-valuemin="0" aria-valuemax="${r.steps.length}" aria-valuenow="0"><span id="progress-fill"></span></div>
</div>
<button type="button" class="jump-btn" id="jump-btn" aria-controls="toc">Jump to step</button>
</div></header>
<div class="layout">
<nav class="toc" aria-label="Steps in this guide">
<details id="toc"><summary>Jump to a step</summary>
<ol>
${tocItems}
</ol>
</details>
</nav>
<main id="main">
<h1>${esc(r.title)}</h1>
${r.html}
${contactBlock()}
</main>
</div>
${footer("../")}`;
  return page({ title: guide.pageTitle || `${guide.button} security guide`, description: r.title, body, guideId: guide.id, script: GUIDE_JS });
}

function landingPage(results) {
  const buttons = results.map(({ guide, r }) =>
    `<a class="choice" href="${guide.id}/" data-guide-link="${esc(guide.id)}" data-total="${r.steps.length}">` +
    `<span class="name">${esc(guide.button)}</span>` +
    `<span class="blurb">${esc(guide.blurb || "")}</span>` +
    `<span class="mini-progress" hidden></span></a>`).join("\n");

  const body = `<main id="main" class="landing">
<h1>${esc(config.siteTitle)}</h1>
<p class="lead">${esc(config.siteTagline)}</p>
<p><strong>Pick a guide to start.</strong></p>
<nav class="choices" aria-label="Choose a guide">
${buttons}
</nav>
${contactBlock()}
</main>
${footer("./")}`;

  const script = `(function(){try{document.querySelectorAll("[data-guide-link]").forEach(function(a){var raw=localStorage.getItem("asg-progress:"+a.getAttribute("data-guide-link"));var n=raw?JSON.parse(raw).length:0;if(n>0){var s=a.querySelector(".mini-progress");s.textContent=Math.min(n,+a.getAttribute("data-total"))+" of "+a.getAttribute("data-total")+" steps done";s.hidden=false;}});}catch(e){}})();`;
  return page({ title: config.siteTitle, description: config.siteTagline, body, script });
}

/* ------------------------------------------------------------------ build */

rmSync(OUT, { recursive: true, force: true });
rmSync(STAGE, { recursive: true, force: true });
mkdirSync(STAGE, { recursive: true });
cpSync(join(ROOT, "public"), STAGE, { recursive: true });

const results = config.guides.map((guide) => {
  const md = readFileSync(join(ROOT, guide.source), "utf8");
  const r = renderGuide(md, guide);
  mkdirSync(join(STAGE, guide.id), { recursive: true });
  writeFileSync(join(STAGE, guide.id, "index.html"), guidePage(guide, r));
  console.log(`  ${guide.id}: ${r.steps.length} steps`);
  return { guide, r };
});
writeFileSync(join(STAGE, "index.html"), landingPage(results));

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? htmlFiles(join(dir, d.name)) : d.name.endsWith(".html") ? [join(dir, d.name)] : []
  );
}

if (PLAIN) {
  console.log(`\nBuilt UNENCRYPTED preview in ${OUT}\nDo not deploy this folder. Run "npm run preview" to view it.`);
  process.exit(0);
}

/* ------------------------------------------------------------------ encrypt with StatiCrypt */

const require = createRequire(import.meta.url);
const staticryptCli = join(dirname(require.resolve("staticrypt/package.json")), "cli", "index.js");
const p = config.passwordPrompt;
const args = [
  staticryptCli,
  // Pass the staging folder's children (not the folder itself) so output paths are relative to it:
  // StatiCrypt resolves output paths relative to the *parent* of each argument.
  ...readdirSync(STAGE).map((name) => join(STAGE, name)),
  "--recursive",
  "--directory", OUT,
  "--config", "false",
  "--salt", config.staticryptSalt,
  "--remember", String(config.rememberDays ?? 30),
  "--short",
  "--template", join(ROOT, "src/password-template.html"),
  "--template-title", p.title,
  "--template-instructions", p.instructions,
  "--template-placeholder", p.placeholder,
  "--template-button", p.button,
  "--template-remember", p.remember,
  "--template-error", p.error,
];
// Password goes via env (STATICRYPT_PASSWORD), never on the command line.
const res = spawnSync(process.execPath, args, {
  cwd: ROOT,
  stdio: ["ignore", "pipe", "pipe"],
  env: { ...process.env, STATICRYPT_PASSWORD: password },
  encoding: "utf8",
});
rmSync(STAGE, { recursive: true, force: true });
if (res.status !== 0) fail("StatiCrypt failed:\n" + (res.stderr || res.stdout || `exit code ${res.status}`));

// Safety net: every HTML file must now be an encrypted StatiCrypt page.
const files = htmlFiles(OUT);
for (const f of files) {
  const s = readFileSync(f, "utf8");
  if (s.includes(PLAIN_MARKER) || !s.includes("staticryptSaltUniqueVariableName")) {
    rmSync(OUT, { recursive: true, force: true });
    fail(`${f} is not encrypted. Output deleted so nothing unencrypted gets deployed.`);
  }
}
console.log(`\nEncrypted ${files.length} HTML pages in ${OUT}`);
