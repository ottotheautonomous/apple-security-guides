# Device Security Guides

A small static website with two plain-language guides for non-technical staff:

- **iPhone**: `content/iphone.md`
- **Mac**: `content/mac.md`

The whole site is protected by **one shared password**. At build time every HTML page is encrypted with
[StatiCrypt](https://github.com/robinmoisson/staticrypt) (AES-256). The password comes from the
`GUIDE_PASSWORD` environment variable and is never stored in this repository.

Hosting: **Cloudflare Pages**, building automatically from a **private** GitHub repository.

What visitors get:

- A landing page with two big buttons, **iPhone** and **Mac**, plus how to reach IT.
- Mobile-first pages with large text and high contrast. They follow the device's light or dark mode.
- A "Done" tick on every numbered step. Ticks are saved in the browser, with a progress bar
  ("12 of 33 done") and a "Reset my progress" link. The pages still work if the browser blocks storage.
- A checklist at the top that links to each step. There's a sticky "jump to step" list on desktop and a
  collapsible one on phones.
- Colour-coded boxes for **Why this matters**, **Heads-up**, **How to check it worked**,
  **If you don't see this**, and **Downsides**.
- A password prompt with "Remember me on this device" (ticked by default, 30 days), so people don't
  retype the password on every page.
- `noindex,nofollow` on every page, a `robots.txt` that blocks all crawlers, and no analytics or other
  external requests.

---

## Editing the guides

1. Edit `content/iphone.md` or `content/mac.md` (plain Markdown).
2. Commit and push to the `main` branch.
3. Cloudflare Pages rebuilds and publishes automatically in about a minute.

Formatting rules the build relies on (they match how the guides are written now):

| In the Markdown | Becomes |
|---|---|
| A heading like `## 7. Turn on Find My` (or `### 7. ...`) | A step card with a "Done" tick |
| A heading starting `Before you start:` | Step 0 |
| `- [ ] 7. Turn on Find My` under `## Checklist` | A checklist row that links to step 7 and shares its tick |
| A paragraph starting `**Why this matters:**`, `**Heads-up:**`, `**How to check it worked:**`, `**If you don't see this:**`, `**Downsides:**`, `**What it is:**`, `**Before you start:**` | A coloured callout box (a list right after a label that ends in `:` goes in the same box) |
| A paragraph that is only bold, e.g. `**Steps**` | A small subheading |
| `> quoted text` | A grey note box |
| `(check: path may differ)` | Shown smaller and greyed out |

The build stops with an error if the checklist links to a step number that has no heading, or if a
step number appears twice.

### IT contact details and other settings

Edit **`site.config.json`** once:

```json
"it": {
  "email": "[IT email address]",
  "chat": "[chat channel]",
  "phone": "[IT phone number]"
}
```

These values replace the `[IT email address]`, `[chat channel]` and `[IT phone number]` placeholders
in the guides, and fill the "How to reach IT" box on every page. Emails become `mailto:` links and phone
numbers become `tel:` links. Values still in `[brackets]` show as highlighted placeholders.
(Once you fill these in, you may also want to remove the "(IT will fill this in)" note in
`content/mac.md`.)

The same file also sets the site title, the button text, the wording of the password prompt, the
"remember me" duration (`rememberDays`), the minimum password length (`minPasswordLength`, default 12)
and the StatiCrypt salt.

---

## Local development

Needs Node.js 20 or newer (Cloudflare uses Node 22, see `.nvmrc`).

```sh
npm install
npm run build:plain   # unencrypted build in dist-plain/ (git-ignored), for previewing only
npm run preview       # serves dist-plain/ at http://localhost:4173
```

To test the real, encrypted build locally:

```sh
GUIDE_PASSWORD='some long test passphrase' npm run build    # macOS / Linux / Git Bash
$env:GUIDE_PASSWORD='some long test passphrase'; npm run build   # PowerShell
node scripts/serve.js dist                                   # serves dist/ at http://localhost:4173
```

You can also put `GUIDE_PASSWORD=...` in a `.env` file. It's git-ignored, so it is never committed.

How `npm run build` works:

1. It **fails** if `GUIDE_PASSWORD` is missing or shorter than `minPasswordLength`.
2. It renders the pages into a temporary `.build-tmp/` folder.
3. StatiCrypt writes the encrypted copies into `dist/`, and the temporary folder is deleted.
4. It checks that every HTML file in `dist/` is encrypted. If any isn't, it deletes `dist/` and fails,
   so an unencrypted page can't be deployed by accident.

Never deploy `dist-plain/`.

---

## Cloudflare Pages setup (one time)

1. Push this repository to a **private** GitHub repository.
2. In the Cloudflare dashboard go to **Workers & Pages** > **Create** > **Pages** tab >
   **Connect to Git** (wording may differ slightly; Cloudflare also calls this "Import an existing
   Git repository").
3. Authorise the **Cloudflare Pages** GitHub app. Give it access to **only this repository**, then
   select it.
4. **Set up builds and deployments:**
   - **Project name:** anything, e.g. `device-security-guides`. This becomes `<name>.pages.dev`.
   - **Production branch:** `main`
   - **Framework preset:** `None`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** leave empty.
5. Under **Environment variables (advanced)** add:
   - `NODE_VERSION` = `22`
   - `GUIDE_PASSWORD` = your passphrase. Click **Encrypt** so it's stored as a secret.
6. Click **Save and Deploy**. The first build takes about a minute.
7. Make sure the variables exist for **both Production and Preview**: open the project >
   **Settings** > **Variables and Secrets** (older dashboards: **Settings** > **Environment variables**).
   Add `GUIDE_PASSWORD` (type **Secret**) and `NODE_VERSION` for each environment.
   If `GUIDE_PASSWORD` is missing, the build fails on purpose with a clear message, so nothing
   unprotected is ever published.
8. Optional:
   - Add a custom domain under **Custom domains**.
   - Restrict who can see preview deployments under **Settings** > **General** > **Access policy**.
     Preview builds are encrypted too.

`public/_headers` adds `X-Robots-Tag: noindex`, `Referrer-Policy: no-referrer`, `X-Frame-Options: DENY`
and similar headers on Cloudflare. `public/robots.txt` disallows all crawlers.

---

## Changing the password

1. In Cloudflare: open the project > **Settings** > **Variables and Secrets**, then edit
   `GUIDE_PASSWORD` for Production (and Preview).
2. Go to **Deployments**, open the latest production deployment, and choose
   **Retry deployment**. A variable change only takes effect after a new build.
3. Give people the new password.

Anyone who ticked "Remember me" will see the password prompt again on their next visit, because the
saved password no longer works. That's expected and fine. Their step ticks are kept.

To clear the saved password on one device, use the "Forget the password on this device" link in the
footer (it opens `/?staticrypt_logout`).

---

## Security notes (please read)

- **StatiCrypt is client-side encryption.** The encrypted pages are public files. Anyone can download
  them and try to guess the password offline, as fast as their computer allows. This is good for
  keeping casual visitors, search engines and link-forwarders out. It is **not** access control for
  secrets. These guides contain no secrets, which is why this approach is fine here.
- **Choose a long passphrase.** Four or more random words (20+ characters) is a good minimum. A short
  password can be cracked.
- **Keep the source repository private.** The Markdown in `content/` is the plain, unencrypted text.
  Anyone who can read the repo can read the guides.
- Everyone shares one password, so you can't revoke access for a single person. When someone leaves,
  or if the password leaks, change it (see above).
- "Remember me" saves a salted hash of the password in the browser's localStorage. People on shared
  or public computers should untick it. The prompt tells them so.
- The salt in `site.config.json` is not secret (it's in every encrypted page anyway). Keeping it fixed
  means "Remember me" keeps working across rebuilds. If you change it, every saved login is reset.

---

## Files

```
content/iphone.md, content/mac.md   the guides (edit these)
site.config.json                    IT contacts, labels, password-prompt text, remember-me, salt
scripts/build.js                    Markdown -> HTML -> StatiCrypt
scripts/serve.js                    tiny local preview server
src/site.css, src/guide.js          styles and the progress/TOC script (inlined into every page)
src/password-template.html          the custom password prompt
public/                             copied as-is (robots.txt, Cloudflare _headers)
```

Dependencies (exact versions): `marked` 18.1.2 and `staticrypt` 3.5.4.

## Hosting: GitHub Pages (current)

The repo is **public** (owner decision, 2026-11-18: the guides aren't sensitive). The password only gates the website: anyone can read the guide text in this repo. Never put anything sensitive here.

- `.github/workflows/pages.yml` builds the encrypted site on every push to `main` and deploys it to GitHub Pages.
- The password comes from the repository secret **`GUIDE_PASSWORD`** (12+ characters). Set it under Settings → Secrets and variables → Actions, or with `gh secret set GUIDE_PASSWORD --repo ottotheautonomous/apple-security-guides`. Then re-run the workflow (Actions → Deploy guides to GitHub Pages → Run workflow).
- Site URL: https://ottotheautonomous.github.io/apple-security-guides/
- To change the password, update the secret and re-run the workflow.
- The Cloudflare Pages steps above remain a valid alternative if the repo is ever made private again.
