import type { APIRoute } from 'astro';
import { projects } from '../data/site';
import { localePath } from '../i18n/ui';

// Built at deploy time: every page in English and Khmer, with hreflang links so Google
// knows the two versions belong together.
const paths = ['/', '/projects/', '/about/', '/contact/', ...projects.map((p) => `/projects/${p.slug}/`)];

export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const today = new Date().toISOString().slice(0, 10);

  const entries = paths.flatMap((path) => {
    const en = url(localePath(path, 'en'));
    const km = url(localePath(path, 'km'));
    const alternates = `
    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>
    <xhtml:link rel="alternate" hreflang="km" href="${km}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${en}"/>`;
    const priority = path === '/' ? '1.0' : path.startsWith('/projects/') && path !== '/projects/' ? '0.8' : '0.6';
    return [en, km].map((loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority}</priority>${alternates}
  </url>`);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
