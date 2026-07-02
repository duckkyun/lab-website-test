# Ryu Lab website

Website for Ryu Lab — Department of Biomedical Sciences, Yonsei University College
of Medicine. We study microbiome, immune homeostasis, and tissue-resident cell biology.

Live (GitHub Pages): `https://<owner>.github.io/<repo>/` — the URL is derived from
the repo at build time, so it follows a rename or account transfer automatically.

If you find any problems on the site or want something changed, feel free to contact me.
Address: duckkyun29@gmail.com

## Stack

- [Astro](https://astro.build/) static site (no runtime framework on the page).
- Self-hosted [Pretendard](https://github.com/orioncactus/pretendard) for all type.
- Light/dark theme (system preference + a header toggle, remembered in `localStorage`).
- Deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).

## Develop

```bash
npm install
npm run dev            # http://localhost:4321/ryulab/
npm run dev -- --host  # also expose on the LAN for phone testing
npm run build          # output to dist/
npm run preview        # preview the production build
```

## Structure

```
src/
  layouts/Base.astro      shared <head>, header, footer, theme + menu scripts
  components/             Header, Footer, PublicationList
  pages/                  one .astro per route (index, research, members, …)
  data/publications.ts    publication list (typed)
  styles/global.css       design tokens + components (light/dark)
  styles/fonts/           Pretendard woff2 (fingerprinted by the build)
public/                   favicon, images, docs (served as-is)
astro.config.mjs          site/base config (reads BASE_PATH / SITE_URL from the build env)
```

`site` and `base` are injected by the deploy workflow, which derives them from
the GitHub repo at build time (see `.github/workflows/deploy.yml`). A project
repo `<name>` is served under `/<name>/`; a repo named `<owner>.github.io` is
served at the root. Because nothing is hardcoded, renaming the repo or
transferring it to another account needs no code change. For local dev the
defaults in `astro.config.mjs` are used (`base: '/ryulab'`).

## Acknowledgement

This website is supervised by [Park Yeon Su](https://github.com/kitewatermelon) and [Hyungchan Ahn](https://github.com/hyeongchanan).
**Mental support from [Soeun Park❤️](https://github.com/moncchichipark) is essential for my whole project.**
