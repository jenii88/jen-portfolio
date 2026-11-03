# Jen — Portfolio Site

A plain HTML/CSS/JS portfolio site (no build step, no framework), built as one
long scrolling page that reads like a book: Cover → Dedication → Ch. 1
Automations & Systems → Ch. 2 Designs & Campaigns → Ch. 3 Web/App Dev &
Coding → Ch. 4 Résumé → Closing (which links back to the Cover).

- The top nav is pinned and jumps to each chapter; the chapter you are in is
  highlighted.
- Designs is a full-screen panel: the page snaps to it as you scroll, the row
  of books slides up into view, and clicking a book opens the pop-up.
- Only the cover has the grain texture (it is baked into the cover images).

## Files

- `index.html` — the whole site (every section, the Designs pop-up and its script)
- `styles.css` — shared design tokens + components
- `assets/cover-desktop.jpg`, `assets/cover-phone.jpg` — original cover backgrounds
- `resume.pdf` — placeholder résumé PDF (swap for the real one)
- `dedication.html`, `automations.html`, `designs.html`, `web-dev.html`,
  `resume.html`, `closing.html` — tiny redirect pages so old links still land
  on the right section of `index.html`. You can delete them from the repo
  whenever you like.

## Where to edit things

- Designs: seven series on the shelf (Giveaways face-out, then Spring, Memorial
  Day, Summer, July 4th, Labor Day, Cyber Monday). Titles, write-ups, tags and
  spine colours are in the `designs` array in the script at the bottom of
  `index.html`.
- Giveaways: the 12 slots are in the `GIVEAWAYS` list just above it. Fill in
  title, date, year and the three image paths for each one; images go in
  `images/designs/giveaways/` (see the README.txt in that folder). Anything
  left empty shows a placeholder.
- Everything else: edit the matching `<section id="...">` in `index.html`.

## Known placeholders still to fill in

- Designs: write-ups and screenshots (dashed placeholder boxes) and the real
  campaign names.
- Web/Dev: one dashed placeholder for a before/after theme screenshot.
- Cover: nothing placeholder, but the three "Beyond The Work" tiles are still
  text-only.

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


---

## Summer series (first promo series filled in)

Summer 2026 is in: hero, banner, email header artwork and the full email. The page screenshot is still a placeholder.
Details and file names are in `images/designs/summer/README.txt`. The data lives in the `SUMMER` list inside `index.html`.
The other five promo series (Spring, Memorial Day, July 4th, Labor Day, Cyber Monday) are placeholders until their content is added.


---

## Emails are in (all six promo series + giveaways)

- Giveaways: 7 giveaways, 17 emails (Launch / Reminder / Winner tabs). Promo series: Spring, Memorial Day, Summer,
  July 4th, Labor Day, Cyber Monday - 11 campaigns.
- Heroes and pages are still placeholders (set `hero:` / `page:` in the data near the top of the script in `index.html`).
- GIFs play in place over the email screenshots. The big ones are small looping videos (mp4 + webm) in `images/designs/anim/`.
- A series with one campaign opens straight onto it; two or more show the year filter and a grid.

---

## Page recordings

A campaign's `page:` can be a screen recording of the page instead of a screenshot:

    page: rec('images/designs/spring/2025-page')

The folder needs three files with that name: `2025-page.mp4`, `2025-page.webm` and `2025-page-poster.jpg` (the still shown first, and
for visitors who prefer reduced motion). The video is silent, loops while it is on screen, pauses when scrolled away, and has a pause
button. Recordings are 1280 x 606; keep them short so the site stays light.

Two or more recordings of one campaign (for example a sneak-peek page and the live sale page) become tabs:

    page: [ { label: 'Sneak peek', ...rec('images/designs/cyber-monday/2024-page-sneak-peek') },
            { label: 'Sale live',  ...rec('images/designs/cyber-monday/2024-page-sale') } ]
