// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// Your live address, used for SEO (canonical links, sitemap, share previews).
// 1) SITE_URL if you set it (do this once you have your own domain),
// 2) otherwise Vercel's production address, filled in automatically during the Vercel build,
// 3) otherwise a placeholder for local builds.
const SITE_URL =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'https://vichetdeveloper.vercel.app');

export default defineConfig({
  site: SITE_URL,
  // Pages stay static; only /api/contact runs as a Vercel serverless function.
  adapter: vercel({ webAnalytics: { enabled: true } }),
  vite: {
    plugins: [tailwindcss()],
  },
});
