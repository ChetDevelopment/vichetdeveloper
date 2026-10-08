/**
 * POST /api/contact — receives the contact form and sends a designed email via Resend.
 *
 * Environment variables (set them in Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY     required  — from resend.com → API Keys
 *   CONTACT_TO_EMAIL   required  — where messages go (your Gmail)
 *   RESEND_FROM        optional  — e.g. "Vichet Sat <hello@yourdomain.com>" (needs a verified domain).
 *                                  When set, visitors also get an automatic "thanks" reply.
 *                                  Without it, Resend's test sender is used (it can only email you).
 */
import type { APIRoute } from 'astro';
import { autoReplyEmail, notificationEmail, type ContactMessage } from '../../lib/contactEmails';
import { profile } from '../../data/site';

export const prerender = false;

const env = (key: string): string | undefined => process.env[key] ?? (import.meta.env as Record<string, string | undefined>)[key];

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

// Simple per-IP limit: 5 messages per 10 minutes (per server instance — enough to stop casual spam).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function sendEmail(apiKey: string, payload: Record<string, unknown>): Promise<boolean> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) console.error('[contact] Resend error', res.status, await res.text());
  return res.ok;
}

export const POST: APIRoute = async ({ request, clientAddress, site }) => {
  const apiKey = env('RESEND_API_KEY');
  const to = env('CONTACT_TO_EMAIL');
  // 503 tells the page to fall back to Web3Forms / email app.
  if (!apiKey || !to) return json(503, { ok: false, error: 'not_configured' });

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json(400, { ok: false, error: 'bad_request' });
  }

  const get = (key: string) => String(form.get(key) ?? '').trim();

  // Spam traps: real people never fill these hidden fields. Pretend it worked.
  if (get('botcheck') || get('_gotcha')) return json(200, { ok: true });

  const name = get('name').slice(0, 100);
  const email = get('email').slice(0, 200);
  const topic = get('topic').slice(0, 60) || 'Message';
  const message = get('message').slice(0, 5000);
  const lang = get('lang') === 'km' ? 'km' : 'en';

  if (!name || !EMAIL.test(email) || message.length < 2) return json(422, { ok: false, error: 'invalid' });

  let ip = 'unknown';
  try {
    ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || clientAddress;
  } catch {}
  if (rateLimited(ip)) return json(429, { ok: false, error: 'too_many' });

  const siteUrl = (site?.origin ?? new URL(request.url).origin).replace(/\/$/, '');
  const msg: ContactMessage = { name, email, topic, message, lang, sentAt: new Date(), siteUrl };

  const from = env('RESEND_FROM');
  const note = notificationEmail(msg);
  const sent = await sendEmail(apiKey, {
    from: from ?? 'Vichet Sat Portfolio <onboarding@resend.dev>',
    to: [to],
    reply_to: email,
    subject: note.subject,
    html: note.html,
    text: note.text,
  });
  if (!sent) return json(502, { ok: false, error: 'send_failed' });

  // The "thanks" reply needs a verified domain (Resend's test sender can only email the account owner).
  if (from) {
    const reply = autoReplyEmail(msg, { site: siteUrl, linkedin: profile.linkedin, github: profile.github });
    await sendEmail(apiKey, { from, to: [email], reply_to: to, subject: reply.subject, html: reply.html, text: reply.text });
  }

  return json(200, { ok: true });
};
