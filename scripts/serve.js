#!/usr/bin/env node
/**
 * Tiny local static server for previewing a build (no dependencies).
 *   npm run preview            -> serves dist-plain/ on http://localhost:4173
 *   node scripts/serve.js dist -> serves the encrypted build instead
 * Set PORT to change the port. Listens on localhost only.
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(new URL("..", import.meta.url)));
const dir = resolve(ROOT, process.argv[2] || "dist-plain");
const port = Number(process.env.PORT) || 4173;
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon", ".json": "application/json" };

try { await stat(dir); } catch { console.error(`Folder not found: ${dir}\nRun "npm run build:plain" first.`); process.exit(1); }

createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    let p = resolve(dir, "." + decodeURIComponent(url.pathname));
    if (p !== dir && !p.startsWith(dir + sep)) { res.writeHead(403).end("Forbidden"); return; }
    let s = await stat(p).catch(() => null);
    if (s && s.isDirectory()) {
      if (!url.pathname.endsWith("/")) { res.writeHead(301, { Location: url.pathname + "/" + url.search }).end(); return; }
      p = join(p, "index.html");
      s = await stat(p).catch(() => null);
    }
    if (!s) { res.writeHead(404, { "Content-Type": "text/plain" }).end("Not found"); return; }
    res.writeHead(200, { "Content-Type": TYPES[extname(p)] || "application/octet-stream", "Cache-Control": "no-cache",
      "X-Robots-Tag": "noindex, nofollow" });
    res.end(await readFile(p));
  } catch (e) {
    res.writeHead(500).end(String(e));
  }
}).listen(port, "127.0.0.1", () => console.log(`Serving ${dir}\n  -> http://localhost:${port}/`));
