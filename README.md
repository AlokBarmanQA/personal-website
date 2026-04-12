# Alok Kumar Barman — Personal Website

This repository contains a small static personal profile website for Alok Kumar Barman. It is ready to be published via GitHub Pages.

Quick start

1. Initialize repo (if not already):

```bash
git init
git add .
git commit -m "Initial personal website"
```

2. Create a GitHub repository named e.g. `personal-website`, then add the remote and push:

```bash
git remote add origin https://github.com/<your-username>/personal-website.git
git branch -M main
git push -u origin main
```

3. Once pushed, the included GitHub Actions workflow will publish the site to GitHub Pages automatically on push to `main`.

Files of interest

- `index.html` — main page
- `styles.css` — styles
- `script.js` — tiny interaction
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow

If you prefer to manually enable Pages, go to your repository Settings → Pages and select the `gh-pages` branch or use the automatic workflow.
