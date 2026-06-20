# Ryu Lab website

Website for Ryu Lab — Department of Biomedical Sciences, Yonsei University College
of Medicine. We study microbiome, immune homeostasis, and tissue-resident cell biology.

Live: https://duckkyun.github.io/lab-website-test/

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
npm run dev            # http://localhost:4321/lab-website-test/
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
astro.config.mjs          site/base config (base = /lab-website-test)
```

This is a GitHub Pages **project** site served under `/lab-website-test`, so
`astro.config.mjs` sets `base: '/lab-website-test'`. To move to a root domain
(Netlify / Vercel / Cloudflare / custom domain) later, build with `BASE_PATH=""`.

## Acknowledgement

This website is supervised by [Park Yeon Su](https://github.com/kitewatermelon) and [Hyungchan Ahn](https://github.com/hyeongchanan).
**Mental support from [Soeun Park❤️](https://github.com/moncchichipark) is essential for my whole project.**
