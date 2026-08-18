# Bharath Resort — Resort Frontend

A static, no-build-step frontend for a resort site. Plain HTML/CSS/JS —
open `index.html` in a browser, or serve the folder with any static host
(including GitHub Pages).

## Folder structure

```
resort-site/
├── index.html          # single-page site: hero, about, rooms, amenities,
│                        # gallery, guest log, booking form, footer
├── css/
│   └── style.css        # all styling, CSS variables for colors/type
├── js/
│   └── script.js         # nav toggle, header scroll state, form handling
├── assets/
│   └── images/           # drop real photography here
├── .gitignore
└── README.md
```

## Customizing it

- **Text & pricing** — edit directly in `index.html`; every section is
  clearly commented (`<!-- ===== STAYS ===== -->` etc).
- **Colors & fonts** — all defined once as CSS variables at the top of
  `css/style.css` under `:root`.
- **Photos** — `index.html` and `style.css` already point at real image
  files; you just need to add them. The gallery and hero fall back to a
  colored gradient until each file exists, so nothing breaks meanwhile.

  **Where to get free, high-res (4K) tropical/lagoon photos legally:**
  - [Unsplash](https://unsplash.com/s/photos/maldives) — search "Maldives",
    "overwater villa", "lagoon resort". Free for commercial use, no
    attribution required. Click a photo → the download arrow → pick the
    largest size.
  - [Pexels](https://www.pexels.com/search/maldives%20resort/) — same
    licensing terms.

  Avoid pulling photos from Google Images or hotel press pages — those
  belong to specific properties and aren't licensed for reuse on someone
  else's commercial site.

  **Save the downloaded files into `assets/images/` using these exact
  names** so they appear automatically:
  ```
  assets/images/hero.jpg              — hero background (behind the title)
  assets/images/water-cabin.jpg       — gallery: Water Cabin
  assets/images/boatyard.jpg          — gallery: The boatyard slip
  assets/images/breakfast.jpg         — gallery: Breakfast
  assets/images/boathouse-jetty.jpg   — gallery: Boathouse jetty
  assets/images/garden-suite.jpg      — gallery: Garden Suite
  ```
  Large 4K originals (4–8 MB each) load slowly on mobile — compress with
  [squoosh.app](https://squoosh.app) or [tinypng.com](https://tinypng.com)
  down to roughly 200–400 KB per image before committing them.
- **Booking form** — `js/script.js` currently just validates the form and
  shows a confirmation message. Point the `fetch(...)` call (commented in
  the file) at your backend, form service (e.g. Formspree), or email
  provider to actually receive enquiries.

## Running locally

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally so relative paths behave the same as in production:
  ```bash
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```

## Deploying with GitHub Pages

1. Push this folder to the repo (see commands below).
2. On GitHub: **Settings → Pages → Source** → select the `main` branch
   and `/ (root)` folder → Save.
3. The site will be live at `https://<username>.github.io/<repo-name>/`
   within a minute or two.

## Pushing to GitHub

From inside this folder:

```bash
git init
git add .
git commit -m "Add resort frontend"
git branch -M main
git remote add origin https://github.com/bharathmxr/bharath2026-Project.git
git push -u origin main
```

If the remote already has a README/commit from GitHub's web UI, pull
first to avoid a rejected push:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```
