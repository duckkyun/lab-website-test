# Code guide — how this site is built (and where to tweak it)

A short map for reading the code and making your own changes. This site is an
[Astro](https://astro.build) static site: it builds to plain HTML/CSS/JS, so
there's no framework running on the page.

## The big picture (30 seconds)

Three things to understand, and you understand the whole site:

1. **Pages** — `src/pages/*.astro`. One file per URL (`index.astro` → home,
   `research.astro` → `/research/`, …).
2. **The shared shell** — `src/layouts/Base.astro`. Every page wraps itself in
   this, so the `<head>`, header, and footer live in one place.
3. **The design** — `src/styles/global.css`. One file. The CSS variables at the
   top (the "design tokens") control colour, spacing, radius, etc.

> `.astro` syntax: everything between the top `---` fences is **JavaScript**
> (the "frontmatter"); everything below is **HTML** with `{expressions}`. It's
> React-like but simpler. See https://docs.astro.build (Components / Layouts).

## Reading order (easy → core)

| # | File | What you learn |
|---|------|----------------|
| 1 | `astro.config.mjs` | Project config (tiny). Why a `base` path is needed for GitHub Pages (read from `BASE_PATH`/`SITE_URL` at build time), plus the sitemap integration. |
| 2 | `src/consts.ts` | Site title, nav items, maintainer email — **all site-wide text in one place**. |
| 3 | `src/layouts/Base.astro` | **Most important.** How every page is assembled: `<head>` + SEO/OG meta, the dark-mode toggle script, font preloading, and the header/footer slots. |
| 4 | `src/components/Header.astro`, `Footer.astro` | The shared chrome — change once, every page updates. |
| 5 | `src/styles/global.css` | **~90% of tuning happens here.** Start with `:root` (light tokens) and `:root[data-theme="dark"]` (dark tokens) at the top. |
| 6 | `src/pages/index.astro` | The home page. How a page uses `Base` and the "barrier" hero is built. |
| 7 | `src/pages/404.astro` | Small and self-contained — a good example of a page with a scoped `<style>`. |
| 8 | `src/data/publications.ts` + `src/components/PublicationList.astro` | The data → rendered-list pattern. |

The other pages (`research`, `members`, `news`, `contact`) follow the **same
pattern as `index.astro`** — read one and you can read them all.

## "Where do I change X?"

| Want to change… | Edit… |
|---|---|
| 🎨 Colours / theme | `global.css` top: `:root` and `:root[data-theme="dark"]` (`--accent` is the blue) |
| 📝 Site title, nav menu, email | `src/consts.ts` |
| ✍️ A page's text | that page in `src/pages/` |
| 📚 Publications | `src/data/publications.ts` (add an object to the array) |
| 🎬 Page-load animation | `global.css`: `.page-shell` + `@keyframes page-rise` |
| 📐 Spacing / radius / max width / font sizes | `global.css` `:root`: `--radius*`, `--shell`, and each component's rules |
| 🖼️ Images, favicon, CV | `public/` (referenced as `{base + 'images/…'}`) |

## Running it locally (to experiment safely)

```bash
npm install
git checkout -b my-tweaks      # work on a branch, not main
npm run dev                    # http://localhost:4321/ryulab/
                               # save a file → the browser updates instantly
npm run dev -- --host          # also reachable from your phone on the same Wi-Fi
npm run build                  # production build into dist/
```

⚠️ **Pushing to `main` auto-deploys to the live site** (via
`.github/workflows/deploy.yml`). Always experiment on a branch and only merge to
`main` when you're happy.

## Design decisions & history

`PLAN.md` (in the repo root, git-ignored so it stays local) is a running log of
what we decided and **why** — including the debugging trail for the header
transition issues. Read it when you wonder "why is it done this way?".

## Conventions worth knowing

- **Base paths:** internal links and assets are prefixed with
  `import.meta.env.BASE_URL` (e.g. `{base + 'research/'}`) so they work under the
  Pages subpath. The subpath (`base`) and absolute origin (`site`) come from the
  deploy workflow, which derives them from the repo — so a rename or transfer
  needs no code change. A repo named `<owner>.github.io` is served at the root.
- **Theme:** an inline script in `Base.astro`'s `<head>` applies the saved/system
  theme before first paint (no flash). The toggle and mobile menu use one
  delegated click handler on `document`.
- **No view transitions:** navigation is a normal page load (smooth thanks to the
  browser's paint-holding) with a CSS "rise" on `.page-shell`. We removed Astro's
  view transitions because they snapshot the header and caused flicker — see
  `PLAN.md`.
