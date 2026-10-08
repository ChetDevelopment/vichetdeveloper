# Vichet Sat — Portfolio

Personal portfolio site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).
It's a fully static site: no server or database, fast to load, and free to host.

## Run it locally

```bash
npm install
npm run dev       # http://localhost:4321
```

```bash
npm run build     # type-check + build to dist/
npm run preview   # serve the built site
```

## Editing content

The site is in **English** (`/`) and **Khmer** (`/km/`). Visitors switch with the EN / ខ្មែរ button in the header.

- **Your content** (profile, projects, skills, experience) is in [`src/data/site.ts`](src/data/site.ts).
- **Buttons and labels** (menu, headings, form text) are in [`src/i18n/ui.ts`](src/i18n/ui.ts).

Every text has both languages side by side, so update both when you change something:

```ts
title: { en: 'Attendance Management System', km: 'ប្រព័ន្ធគ្រប់គ្រងវត្តមាន' },
```

Search for `TODO` to find what's still missing (photo, CV, some dates).

**Project screenshots:** drop images into `public/images/projects/<slug>/`.
A file named `cover.png` (or the first file by name) becomes the cover; the rest show as a clickable gallery.
No code changes needed.

To add a project, copy one of the objects in the `projects` array and change its `slug`.
Pages are created automatically at `/projects/<slug>` and `/km/projects/<slug>`.

## Contact form

Messages from the contact page are delivered in this order:

1. **`/api/contact` + Resend** — a designed HTML email to your inbox (and, with a verified domain, an automatic "thanks" reply to the visitor). Runs as one Vercel serverless function.
2. **Web3Forms** — backup if the function isn't configured. Plain layout.
3. **The visitor's email app** — last resort, if neither is set up.

Set these environment variables (in `.env` locally, and in **Vercel → Settings → Environment Variables**):

| Variable | Needed for | Example |
|---|---|---|
| `RESEND_API_KEY` | designed emails | `re_123…` from resend.com → API Keys |
| `CONTACT_TO_EMAIL` | designed emails | `satvichetnice1@gmail.com` (must be your Resend account email until you verify a domain) |
| `RESEND_FROM` | optional auto-reply | `Vichet Sat <hello@your-domain.com>` (needs a domain verified in Resend) |
| `PUBLIC_WEB3FORMS_KEY` | backup delivery | from web3forms.com |

Email templates live in [`src/lib/contactEmails.ts`](src/lib/contactEmails.ts).

## Deploying

**Vercel** (the site uses the Vercel adapter for the contact function):
push this folder to a GitHub repo, then on vercel.com click **Add New → Project** and import it.
Add the environment variables from the table above, plus `SITE_URL`, then deploy.

## Project structure

```
src/
  data/site.ts        ← all content (EN + KM)
  i18n/ui.ts          ← interface text (EN + KM) + language helpers
  layouts/Base.astro  ← <head>, SEO tags, header/footer
  components/         ← Header, Footer, ProjectCard, icons…
  views/              ← page designs, shared by both languages
  pages/              ← routes: English at /, Khmer in pages/km/
  styles/global.css   ← Tailwind + theme
public/               ← images, favicon, robots.txt, CV
_draft/               ← the old AI Studio draft (safe to delete)
```
