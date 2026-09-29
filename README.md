# Jen — Portfolio Site

A plain HTML/CSS/JS portfolio site (no build step, no framework). Structured
like a book: Cover → Dedication → Automations & Systems → Designs &
Campaigns → Web/App Dev & Coding → Résumé → Closing, with a "chapter nav"
at the bottom of each page and a page-turn transition between them in
Chrome/Edge (via the CSS View Transitions API — it just degrades to a normal
page load in Safari/Firefox, no errors).

## Files

- `index.html` — Cover (Home)
- `dedication.html` — Dedication (skills snapshot)
- `automations.html` — Chapter 1: Automations & Systems
- `designs.html` — Chapter 2: Designs & Campaigns
- `web-dev.html` — Chapter 3: Web / App Dev & Coding
- `resume.html` — Chapter 4: Résumé
- `closing.html` — Closing / back cover
- `styles.css` — shared design tokens + components
- `resume.pdf` — placeholder résumé PDF (swap for the real one)

## Known placeholders still to fill in

- Contact email: currently `jen@example.com` everywhere (nav pill, closing
  page, résumé footer) — swap for your real one with a find-and-replace.
- Résumé page: `[Your Title]`, `[Start Date]`, `[Degree Level]`,
  `[University Name]`, `[Year]`.
- Designs page: 7 dashed placeholder image blocks — swap in real
  screenshots.
- Web-Dev page: 1 dashed placeholder for a before/after theme screenshot.

## Deploy it — GitHub + Vercel

You don't need to install anything locally; GitHub's website will let you
upload these files directly, and Vercel needs zero configuration for a
plain static site.

### 1. Create a GitHub repo

1. Sign in at [github.com](https://github.com) (or create a free account).
2. Click **New repository** (the `+` in the top right → *New repository*).
3. Name it something like `jen-portfolio`. Keep it **Public** (needed for
   Vercel's free tier to deploy it, unless you're on a paid Vercel plan).
   Don't add a README/gitignore/license — leave it empty.
4. Click **Create repository**.

### 2. Upload the site files

On the new repo's page, click **uploading an existing file**, then drag in
every file from this folder (all the `.html` files, `styles.css`,
`resume.pdf`, this `README.md`) — not the folder itself, the files inside
it. Scroll down and click **Commit changes**.

*(If you'd rather use git from a terminal instead of the web uploader:)*

```bash
cd jen-portfolio-site
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/jen-portfolio.git
git push -u origin main
```

### 3. Create a Vercel account and import the repo

1. Go to [vercel.com](https://vercel.com) and sign up — choose **Continue
   with GitHub** so the two are linked automatically.
2. Click **Add New... → Project**.
3. Under **Import Git Repository**, find and select `jen-portfolio`.
4. Framework Preset should say **Other** (or auto-detect as a static
   site) — leave build settings blank, there's nothing to build.
5. Click **Deploy**.

Vercel gives you a live URL in under a minute (something like
`jen-portfolio.vercel.app`). From then on, every time you push a change to
the `main` branch on GitHub, Vercel redeploys automatically — no extra
steps.

### Custom domain (optional)

In the Vercel project → **Settings → Domains**, you can add a domain you
own, or just keep the free `*.vercel.app` one.
