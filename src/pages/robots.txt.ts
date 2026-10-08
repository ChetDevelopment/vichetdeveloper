import type { APIRoute } from 'astro';

// Generated at build time so the sitemap link always uses the real site address.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${new URL('sitemap.xml', site)}
`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
