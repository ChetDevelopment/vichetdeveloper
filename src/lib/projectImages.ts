import fs from 'node:fs';
import path from 'node:path';

const IMAGE_FILE = /\.(png|jpe?g|webp|avif|gif)$/i;

/**
 * Finds a project's screenshots in public/images/projects/<slug>/.
 * A file named "cover.*" comes first; the rest are sorted by name (1.png, 2.png, 10.png…).
 * Just drop images in the folder — no code changes needed.
 */
export function projectImages(slug: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'images', 'projects', slug);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_FILE.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .sort((a, b) => Number(/^cover\./i.test(b)) - Number(/^cover\./i.test(a)))
    .map((file) => `/images/projects/${slug}/${encodeURIComponent(file)}`);
}
