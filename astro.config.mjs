// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Project page on GitHub Pages → served under /lab-website-test.
// To move to a root domain (Netlify/Vercel/Cloudflare/custom domain) later,
// set BASE_PATH="" in the build env; everything else stays portable.
const base = process.env.BASE_PATH ?? '/lab-website-test';
const site = process.env.SITE_URL ?? 'https://duckkyun.github.io';

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
