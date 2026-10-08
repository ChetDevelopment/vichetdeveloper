/**
 * HTML email templates for the contact form.
 * Email apps (Gmail, Outlook, phone mail) only support old-school HTML, so these use
 * tables and inline styles on purpose.
 */

export type ContactMessage = {
  name: string;
  email: string;
  topic: string;
  message: string;
  lang: 'en' | 'km';
  sentAt: Date;
  siteUrl: string;
};

const BRAND = {
  name: 'Vichet Sat',
  accent: '#0f9f7a',
  ink: '#18181b',
  muted: '#71717a',
  line: '#e4e4e7',
  soft: '#f4f4f5',
};

const FONT = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, 'Noto Sans Khmer', sans-serif`;

/** Visitor input must never be treated as HTML. */
export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

const formatDate = (d: Date) =>
  new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Phnom_Penh' }).format(d) + ' (ICT)';

/** Shared outer layout: header with monogram, white card, footer. */
function layout(opts: { preheader: string; body: string; footer: string }): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light only">
<title>${escapeHtml(opts.preheader)}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.soft};">
<span style="display:none!important;visibility:hidden;opacity:0;height:0;width:0;overflow:hidden;">${escapeHtml(opts.preheader)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.soft};">
  <tr><td align="center" style="padding:32px 16px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
      <!-- Header -->
      <tr><td style="padding:0 4px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>
          <td style="width:36px;height:36px;background:${BRAND.ink};border-radius:10px;text-align:center;vertical-align:middle;font:700 13px ${FONT};color:#ffffff;">VS</td>
          <td style="padding-left:12px;font:600 15px ${FONT};color:${BRAND.ink};">${BRAND.name}<span style="color:${BRAND.muted};font-weight:400;"> &middot; Portfolio</span></td>
        </tr></table>
      </td></tr>
      <!-- Card -->
      <tr><td style="background:#ffffff;border:1px solid ${BRAND.line};border-radius:16px;overflow:hidden;">
        <div style="height:4px;background:${BRAND.accent};line-height:4px;font-size:0;">&nbsp;</div>
        <div style="padding:32px 32px 28px;font:15px/1.6 ${FONT};color:#3f3f46;">${opts.body}</div>
      </td></tr>
      <!-- Footer -->
      <tr><td style="padding:20px 4px 0;font:12px/1.6 ${FONT};color:${BRAND.muted};text-align:center;">${opts.footer}</td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

function button(href: string, label: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;"><tr>
    <td style="background:${BRAND.ink};border-radius:10px;">
      <a href="${href}" style="display:inline-block;padding:12px 22px;font:600 14px ${FONT};color:#ffffff;text-decoration:none;">${label}</a>
    </td></tr></table>`;
}

/** Email to me: a new message arrived. */
export function notificationEmail(m: ContactMessage): { subject: string; html: string; text: string } {
  const name = escapeHtml(m.name);
  const email = escapeHtml(m.email);
  const topic = escapeHtml(m.topic);
  const message = escapeHtml(m.message).replace(/\n/g, '<br>');
  const firstName = escapeHtml(m.name.split(' ')[0] ?? m.name);
  const replyHref = `mailto:${encodeURIComponent(m.email)}?subject=${encodeURIComponent(`Re: ${m.topic}`)}`;

  const row = (label: string, value: string) => `<tr>
      <td style="padding:6px 0;width:72px;vertical-align:top;font:13px ${FONT};color:${BRAND.muted};">${label}</td>
      <td style="padding:6px 0;font:14px ${FONT};color:${BRAND.ink};">${value}</td>
    </tr>`;

  const body = `
    <p style="margin:0;font:600 12px ${FONT};letter-spacing:.08em;text-transform:uppercase;color:${BRAND.muted};">New message</p>
    <h1 style="margin:8px 0 0;font:700 22px/1.3 ${FONT};color:${BRAND.ink};">${name} wants to get in touch</h1>
    <p style="margin:14px 0 0;">
      <span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#e7f6f1;color:#0b7a5e;font:600 12px ${FONT};">${topic}</span>
    </p>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top:22px;border-top:1px solid ${BRAND.line};border-bottom:1px solid ${BRAND.line};">
      <tr><td style="padding:10px 0;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%">
        ${row('From', name)}
        ${row('Email', `<a href="mailto:${email}" style="color:${BRAND.accent};text-decoration:none;">${email}</a>`)}
        ${row('Sent', escapeHtml(formatDate(m.sentAt)))}
        ${row('Page', m.lang === 'km' ? 'Khmer version' : 'English version')}
      </table></td></tr>
    </table>
    <div style="margin-top:22px;padding:18px 20px;background:${BRAND.soft};border-left:3px solid ${BRAND.accent};border-radius:8px;font:15px/1.7 ${FONT};color:${BRAND.ink};">${message}</div>
    ${button(replyHref, `Reply to ${firstName}`)}
    <p style="margin:14px 0 0;font:12px ${FONT};color:${BRAND.muted};">Or just hit “Reply” — it goes straight to ${email}.</p>`;

  return {
    subject: `📩 ${m.topic} — ${m.name}`,
    html: layout({
      preheader: `${m.topic} from ${m.name}: ${m.message.slice(0, 90)}`,
      body,
      footer: `Sent from the contact form on <a href="${m.siteUrl}" style="color:${BRAND.muted};">${escapeHtml(m.siteUrl.replace(/^https?:\/\//, ''))}</a>`,
    }),
    text: `New message from your portfolio\n\nTopic: ${m.topic}\nFrom: ${m.name}\nEmail: ${m.email}\nSent: ${formatDate(m.sentAt)}\n\n${m.message}\n`,
  };
}

/** Email to the visitor: "thanks, I got your message". Sent only when a verified sender domain is set up. */
export function autoReplyEmail(m: ContactMessage, links: { site: string; linkedin: string; github: string }) {
  const km = m.lang === 'km';
  const firstName = escapeHtml(m.name.split(' ')[0] ?? m.name);
  const quoted = escapeHtml(m.message).replace(/\n/g, '<br>');

  const body = km
    ? `<h1 style="margin:0;font:700 22px/1.5 ${FONT};color:${BRAND.ink};">សួស្ដី ${firstName}!</h1>
       <p style="margin:14px 0 0;">អរគុណសម្រាប់សាររបស់អ្នក។ ខ្ញុំបានទទួលវាហើយ ហើយនឹងឆ្លើយតបក្នុងរយៈពេល ១–២ ថ្ងៃ។</p>`
    : `<h1 style="margin:0;font:700 22px/1.3 ${FONT};color:${BRAND.ink};">Thanks, ${firstName}!</h1>
       <p style="margin:14px 0 0;">I got your message and will reply within 1–2 days.</p>`;

  const copy = `<p style="margin:24px 0 8px;font:600 12px ${FONT};letter-spacing:.08em;text-transform:uppercase;color:${BRAND.muted};">${km ? 'សាររបស់អ្នក' : 'Your message'}</p>
    <div style="padding:16px 18px;background:${BRAND.soft};border-radius:8px;font:14px/1.7 ${FONT};color:#52525b;">${quoted}</div>
    <p style="margin:24px 0 0;">${km ? 'ដោយក្ដីគោរព' : 'Best regards'},<br><strong style="color:${BRAND.ink};">Vichet Sat</strong><br><span style="color:${BRAND.muted};">Junior Full-Stack Developer · Phnom Penh</span></p>`;

  const footerLinks = [
    `<a href="${links.site}" style="color:${BRAND.muted};">Portfolio</a>`,
    links.linkedin && `<a href="${links.linkedin}" style="color:${BRAND.muted};">LinkedIn</a>`,
    links.github && `<a href="${links.github}" style="color:${BRAND.muted};">GitHub</a>`,
  ]
    .filter(Boolean)
    .join(' &nbsp;·&nbsp; ');

  return {
    subject: km ? 'អរគុណសម្រាប់សាររបស់អ្នក — Vichet Sat' : 'Thanks for your message — Vichet Sat',
    html: layout({ preheader: km ? 'ខ្ញុំបានទទួលសាររបស់អ្នកហើយ' : 'I got your message and will reply soon.', body: body + copy, footer: footerLinks }),
    text: km
      ? `សួស្ដី ${m.name}!\n\nអរគុណសម្រាប់សាររបស់អ្នក។ ខ្ញុំនឹងឆ្លើយតបក្នុងរយៈពេល ១–២ ថ្ងៃ។\n\n— Vichet Sat`
      : `Thanks, ${m.name}!\n\nI got your message and will reply within 1–2 days.\n\n— Vichet Sat`,
  };
}
