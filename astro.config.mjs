// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL layout is injected by the deploy workflow (.github/workflows/deploy.yml),
// which derives BASE_PATH and SITE_URL from the GitHub repo at build time — so
// renaming the repo or transferring it to another account needs no code change:
//   • project repo  "<name>"           → served under /<name>/
//   • user/org repo "<owner>.github.io" → served at the root, BASE_PATH="/"
// The defaults below are only for local `npm run dev` / `npm run build`.
const base = process.env.BASE_PATH ?? '/ryulab';
const site = process.env.SITE_URL ?? 'https://ryulab.github.io';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  // Dev-only: allow access through a public tunnel (e.g. cloudflared) so the
  // site can be previewed from a phone on a different network. No effect on build.
  vite: {
    server: {
      allowedHosts: ['.trycloudflare.com', '.loca.lt'],
    },
  },
});
