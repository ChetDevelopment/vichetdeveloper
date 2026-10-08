/**
 * ALL website content lives in this file, in English (en) and Khmer (km).
 *
 * Every text looks like:  { en: 'English text', km: 'អត្ថបទខ្មែរ' }
 * Change both languages when you edit something.
 * Anything marked TODO still needs your input.
 */
import type { L } from '../i18n/ui';

export const profile = {
  name: 'Vichet Sat',
  role: { en: 'Junior Full-Stack Developer', km: 'អ្នកអភិវឌ្ឍន៍ Full-Stack កម្រិតដំបូង' } as L,
  location: { en: 'Sen Sok, Phnom Penh, Cambodia', km: 'សែនសុខ ភ្នំពេញ កម្ពុជា' } as L,
  intro: {
    en: 'I build web applications with Vue.js, Laravel and Node.js — from the database and REST API to the screens people use, and deploying them to the cloud.',
    km: 'ខ្ញុំបង្កើតកម្មវិធីវេបដោយប្រើ Vue.js, Laravel និង Node.js — ចាប់ពី database និង REST API រហូតដល់ផ្ទៃដែលអ្នកប្រើមើលឃើញ ព្រមទាំងដាក់ឱ្យដំណើរការលើ cloud។',
  } as L,
  // Set to false to hide the "open to work" badge.
  openToWork: true,
  openToWorkText: {
    en: 'Open to full-time junior roles & freelance work',
    km: 'កំពុងស្វែងរកការងារពេញម៉ោង និងការងារ freelance',
  } as L,

  // Leave a field as '' to hide it.
  email: 'satvichetnice1@gmail.com',
  phone: '+855 97 242 6374',
  telegram: '',
  github: 'https://github.com/ChetDevelopment',
  linkedin: 'https://www.linkedin.com/in/vichet-sat/',
  facebook: 'https://www.facebook.com/khun.chet.588786',
  // Your CV in public/ (leave '' to hide the download buttons)
  cvUrl: '/Vichet-Sat-CV.pdf',
  // Your photo in public/images/ (if empty, your initials "VS" are shown instead)
  photo: '/images/me.jpg',
  // Shown inside a circle that follows the cursor over the photo ('' to turn off).
  photoReveal: '/images/me-robot.jpg',
};

export const about = {
  paragraphs: [
    {
      en: 'I’m Vichet, a junior full-stack developer from Cambodia. I’m currently studying for an Associate Degree in Web Programming at Passerelles Numériques Cambodia (PNC).',
      km: 'ខ្ញុំឈ្មោះ Vichet ជាអ្នកអភិវឌ្ឍន៍ Full-Stack កម្រិតដំបូងមកពីប្រទេសកម្ពុជា។ បច្ចុប្បន្នខ្ញុំកំពុងសិក្សាថ្នាក់បរិញ្ញាបត្ររង ផ្នែក Web Programming នៅ Passerelles Numériques Cambodia (PNC)។',
    },
    {
      en: 'Most of my work uses Vue.js on the frontend and Laravel or Node.js on the backend, with MySQL. I’ve built REST APIs with login and role-based access, dashboards and reports, and I’ve deployed projects to AWS EC2 using Docker and GitHub Actions.',
      km: 'ការងារភាគច្រើនរបស់ខ្ញុំប្រើ Vue.js សម្រាប់ frontend និង Laravel ឬ Node.js សម្រាប់ backend ជាមួយ MySQL។ ខ្ញុំបានបង្កើត REST API ដែលមានប្រព័ន្ធ login និងការកំណត់សិទ្ធិតាមតួនាទី ផ្ទាំងគ្រប់គ្រង (dashboard) និងរបាយការណ៍ ហើយធ្លាប់ដាក់គម្រោងឱ្យដំណើរការលើ AWS EC2 ដោយប្រើ Docker និង GitHub Actions។',
    },
    {
      en: 'I’ve also worked in teams as Scrum Master and project coordinator. I’m looking for a team where I can keep learning, get my code reviewed, and help build software people use every day.',
      km: 'ខ្ញុំក៏ធ្លាប់ធ្វើការជាក្រុម ក្នុងតួនាទីជា Scrum Master និងអ្នកសម្របសម្រួលគម្រោងផងដែរ។ ខ្ញុំកំពុងស្វែងរកក្រុមការងារមួយ ដែលខ្ញុំអាចបន្តរៀនសូត្រ ទទួលបានការពិនិត្យកូដ (code review) និងជួយបង្កើតកម្មវិធីដែលមនុស្សប្រើប្រាស់ជារៀងរាល់ថ្ងៃ។',
    },
  ] as L[],
  softSkills: [
    { en: 'Problem solving', km: 'ការដោះស្រាយបញ្ហា' },
    { en: 'Communication', km: 'ការប្រាស្រ័យទាក់ទង' },
    { en: 'Teamwork', km: 'ការងារជាក្រុម' },
    { en: 'Adaptability', km: 'ការសម្របខ្លួន' },
    { en: 'Research', km: 'ការស្រាវជ្រាវ' },
  ] as L[],
  spokenLanguages: [
    { en: 'Khmer — native', km: 'ខ្មែរ — ភាសាកំណើត' },
    { en: 'English — intermediate', km: 'អង់គ្លេស — កម្រិតមធ្យម' },
  ] as L[],
};

export type SkillGroup = { title: L; items: string[] };

export const skills: SkillGroup[] = [
  { title: { en: 'Frontend', km: 'Frontend' }, items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Bootstrap'] },
  { title: { en: 'Backend & APIs', km: 'Backend និង API' }, items: ['PHP', 'Laravel', 'Node.js', 'NestJS', 'REST APIs'] },
  { title: { en: 'Databases', km: 'មូលដ្ឋានទិន្នន័យ' }, items: ['MySQL', 'MongoDB'] },
  { title: { en: 'Testing', km: 'ការធ្វើតេស្ត' }, items: ['Functional testing', 'API testing', 'Automated testing (Jest)', 'Debugging'] },
  { title: { en: 'Cloud & DevOps', km: 'Cloud និង DevOps' }, items: ['AWS EC2', 'Ubuntu', 'Apache', 'Docker', 'GitHub Actions'] },
  { title: { en: 'Tools', km: 'ឧបករណ៍' }, items: ['Git', 'GitHub', 'Jira', 'Postman', 'Figma'] },
];

export type TimelineItem = {
  title: L;
  org: L;
  period: L;
  points?: L[];
};

export const experience: TimelineItem[] = [
  {
    title: { en: 'Full-Stack Developer', km: 'អ្នកអភិវឌ្ឍន៍ Full-Stack' },
    org: { en: 'PUC-IFL Enrollment & Academic System', km: 'ប្រព័ន្ធចុះឈ្មោះ និងគ្រប់គ្រងការសិក្សា PUC-IFL' },
    period: { en: 'Aug 2026 — Present', km: 'សីហា ២០២៦ — បច្ចុប្បន្ន' },
    points: [
      {
        en: 'Building both the Vue 3 + TypeScript frontend and the Laravel 12 REST API, working module by module from planning docs to tested features.',
        km: 'បង្កើតទាំង frontend ដោយ Vue 3 + TypeScript និង REST API ដោយ Laravel 12 ដោយធ្វើតាមម៉ូឌុលនីមួយៗ ចាប់ពីឯកសារផែនការ រហូតដល់មុខងារដែលបានតេស្តរួច។',
      },
      {
        en: 'Built modules for online applications, placement tests, class division, QR invitations, attendance and schedules.',
        km: 'បង្កើតម៉ូឌុលសម្រាប់ការដាក់ពាក្យអនឡាញ ការប្រឡងចូលរៀន (placement test) ការបែងចែកថ្នាក់ ការអញ្ជើញតាម QR វត្តមាន និងកាលវិភាគ។',
      },
      {
        en: 'Added real-time notifications, password reset, and fixed mobile layout issues on the login page and dashboard.',
        km: 'បន្ថែមការជូនដំណឹងភ្លាមៗ (real-time) ការកំណត់ពាក្យសម្ងាត់ឡើងវិញ និងកែបញ្ហាការបង្ហាញលើទូរស័ព្ទនៅទំព័រ login និង dashboard។',
      },
      {
        en: 'Work in a shared GitHub organization using feature branches and merges.',
        km: 'ធ្វើការក្នុង GitHub organization រួម ដោយប្រើ feature branch និងការ merge កូដ។',
      },
    ],
  },
];

export const education: TimelineItem[] = [
  {
    title: { en: 'Associate Degree in Web Programming', km: 'បរិញ្ញាបត្ររង ផ្នែក Web Programming' },
    org: { en: 'Passerelles Numériques Cambodia (PNC)', km: 'Passerelles Numériques Cambodia (PNC)' },
    period: { en: '2025 — Present', km: '២០២៥ — បច្ចុប្បន្ន' },
  },
  {
    title: { en: 'High School Diploma', km: 'សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ' },
    org: { en: 'Rovieng High School', km: 'វិទ្យាល័យរវៀង' },
    period: { en: '2022 — 2024', km: '២០២២ — ២០២៤' },
  },
];

export type Project = {
  slug: string; // used in the URL: /projects/<slug>
  title: L;
  summary: L; // one sentence for the card
  role: L;
  period: L;
  stack: string[];
  liveUrl?: string;
  imageNote?: L; // small caption under the screenshot (e.g. if it's a design preview)
  liveLabel?: L; // button text for liveUrl (default: "View live")
  // GitHub repos. Add a label when there is more than one (e.g. frontend + API).
  code?: { url: string; label?: L }[];
  // true = work/internal project: the code isn't public, so a short note is shown instead of code links.
  private?: boolean;
  // Backend-only projects: real API routes shown as the cover instead of a screenshot.
  api?: { prefix: string; total: number; routes: string[] };
  // 2–3 key facts shown as big numbers (all taken from the real code).
  highlights?: { value: string; label: L }[];
  overview?: L;
  features: L[];
  challenges?: L[]; // optional: a problem you hit and how you solved it
  learned?: L[]; // optional: what you learned
};

// Order matters: this is the order on the home and Projects pages.
// Screenshots: put images in public/images/projects/<slug>/ (e.g. cover.png, 1.png, 2.png).
// Add liveUrl if a project is online somewhere.
export const projects: Project[] = [
  {
    slug: 'ty-khai-topup',
    highlights: [
      { value: '41', label: { en: 'database models', km: 'model មូលដ្ឋានទិន្នន័យ' } },
      { value: 'KHQR', label: { en: 'Bakong payments', km: 'ការទូទាត់ Bakong' } },
      { value: 'Live', label: { en: 'on Vercel', km: 'លើ Vercel' } },
    ],
    liveUrl: 'https://tykhai.vercel.app',
    code: [{ url: 'https://github.com/ChetDevelopment/Game-top-up-storefront-for-Cambodia' }],
    title: { en: 'Ty Khai TopUp — Game Top-Up Store', km: 'Ty Khai TopUp — ហាងបញ្ចូលលុយហ្គេម' },
    summary: {
      en: 'A live game top-up store for Cambodia — players choose a game and package, pay with Bakong KHQR, and track their order.',
      km: 'ហាងបញ្ចូលលុយហ្គេមដែលកំពុងដំណើរការពិតនៅកម្ពុជា — អ្នកលេងជ្រើសរើសហ្គេម និងកញ្ចប់ ទូទាត់តាម Bakong KHQR ហើយតាមដានការបញ្ជាទិញបាន។',
    },
    role: { en: 'Full-Stack Developer', km: 'អ្នកអភិវឌ្ឍន៍ Full-Stack' },
    period: { en: '2026 · Live', km: '២០២៦ · កំពុងដំណើរការ' }, // TODO: exact months
    stack: ['Next.js 16', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind CSS', 'Upstash Redis', 'Bakong KHQR', 'Vercel'],
    overview: {
      en: 'A production e-commerce site for selling game credits in Cambodia, live on Vercel. It is built with Next.js 16 and TypeScript, with Prisma and a PostgreSQL database of 41 models.',
      km: 'គេហទំព័រលក់ទំនិញអនឡាញសម្រាប់លក់ក្រេឌីតហ្គេមនៅកម្ពុជា ដែលកំពុងដំណើរការលើ Vercel។ បង្កើតដោយ Next.js 16 និង TypeScript ជាមួយ Prisma និងមូលដ្ឋានទិន្នន័យ PostgreSQL ដែលមាន ៤១ model។',
    },
    features: [
      { en: 'Game catalog with search, top-up packages for each game, and prices in USD or KHR.', km: 'បញ្ជីហ្គេមជាមួយការស្វែងរក កញ្ចប់បញ្ចូលលុយសម្រាប់ហ្គេមនីមួយៗ និងតម្លៃជាដុល្លារ ឬរៀល។' },
      { en: 'Checkout with Bakong KHQR payment, order tracking, and a scheduled job that reconciles payments.', km: 'ការទូទាត់តាម Bakong KHQR ការតាមដានការបញ្ជាទិញ និង job ដែលដំណើរការតាមពេលកំណត់ ដើម្បីផ្ទៀងផ្ទាត់ការទូទាត់។' },
      { en: 'Sign in with email or Google (NextAuth), guest checkout, and a user wallet.', km: 'ការចូលប្រើដោយអ៊ីមែល ឬ Google (NextAuth) ការទិញដោយមិនចាំបាច់ចុះឈ្មោះ និងកាបូបលុយរបស់អ្នកប្រើ។' },
      { en: 'Referral program, daily missions, spin wheel, mystery boxes and a leaderboard.', km: 'កម្មវិធីណែនាំមិត្តភក្តិ បេសកកម្មប្រចាំថ្ងៃ កង់សំណាង ប្រអប់អាថ៌កំបាំង និងតារាងចំណាត់ថ្នាក់។' },
      { en: 'Admin dashboard for orders, games and products, customers, banners, promo codes, resellers, a blog, and payment health.', km: 'ផ្ទាំងគ្រប់គ្រងសម្រាប់ការបញ្ជាទិញ ហ្គេម និងផលិតផល អតិថិជន ផ្ទាំងផ្សាយពាណិជ្ជកម្ម កូដបញ្ចុះតម្លៃ អ្នកលក់បន្ត ប្លុក និងស្ថានភាពការទូទាត់។' },
      { en: 'Rate limiting with Upstash Redis, CSRF protection and input validation with Zod.', km: 'ការកំណត់ចំនួនសំណើ (rate limiting) ដោយ Upstash Redis ការការពារ CSRF និងការផ្ទៀងផ្ទាត់ទិន្នន័យដោយ Zod។' },
      { en: 'Responsive design that works well on phones.', km: 'ការរចនាដែលបត់បែន និងប្រើបានល្អលើទូរស័ព្ទ។' },
    ],
  },
  {
    slug: 'puc-enrollment-system',
    highlights: [
      { value: '27', label: { en: 'database entities', km: 'entity មូលដ្ឋានទិន្នន័យ' } },
      { value: '3', label: { en: 'user roles: admin, teacher, student', km: 'តួនាទី៖ អ្នកគ្រប់គ្រង គ្រូ សិស្ស' } },
      { value: 'E2E', label: { en: 'tests with Playwright', km: 'តេស្តដោយ Playwright' } },
    ],
    private: true,
    title: { en: 'PUC-IFL Enrollment & Academic System', km: 'ប្រព័ន្ធចុះឈ្មោះ និងគ្រប់គ្រងការសិក្សា PUC-IFL' },
    summary: {
      en: 'An enrollment and academic management system for PUC-IFL — from online applications and placement tests to class division, attendance and schedules.',
      km: 'ប្រព័ន្ធចុះឈ្មោះ និងគ្រប់គ្រងការសិក្សាសម្រាប់ PUC-IFL — ចាប់ពីការដាក់ពាក្យអនឡាញ និងការប្រឡងចូលរៀន រហូតដល់ការបែងចែកថ្នាក់ វត្តមាន និងកាលវិភាគ។',
    },
    role: { en: 'Full-Stack Developer', km: 'អ្នកអភិវឌ្ឍន៍ Full-Stack' },
    period: { en: 'Aug 2026 — Present', km: 'សីហា ២០២៦ — បច្ចុប្បន្ន' },
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'Laravel 12', 'MySQL', 'Laravel Reverb', 'Playwright', 'PHPUnit'],
    overview: {
      en: 'A system for PUC-IFL that handles new students from their first application to their first class. The project has a Vue 3 + TypeScript frontend and a separate Laravel 12 REST API with a MySQL database of 27 entities. Before coding, we wrote planning documents — architecture, database design and a task list — and then built the system module by module.',
      km: 'ប្រព័ន្ធសម្រាប់ PUC-IFL ដែលគ្រប់គ្រងសិស្សថ្មី ចាប់ពីការដាក់ពាក្យដំបូង រហូតដល់ថ្ងៃចូលរៀនថ្ងៃដំបូង។ គម្រោងនេះមាន frontend ជា Vue 3 + TypeScript និង REST API ដាច់ដោយឡែកដោយ Laravel 12 ជាមួយមូលដ្ឋានទិន្នន័យ MySQL ដែលមាន ២៧ entity។ មុនពេលសរសេរកូដ ពួកយើងបានសរសេរឯកសារផែនការ — architecture ការរចនាមូលដ្ឋានទិន្នន័យ និងបញ្ជីការងារ — បន្ទាប់មកបង្កើតប្រព័ន្ធតាមម៉ូឌុលនីមួយៗ។',
    },
    features: [
      {
        en: 'Online applications with Excel import, and a placement test with a strict test mode, question bank, reading passages and test templates.',
        km: 'ការដាក់ពាក្យអនឡាញ ជាមួយការនាំចូលពី Excel និងការប្រឡងចូលរៀន (placement test) ដែលមាន strict mode ធនាគារសំណួរ អត្ថបទអាន និងគំរូតេស្ត។',
      },
      {
        en: 'English level assignment and class division, with QR-code invitations for students.',
        km: 'ការកំណត់កម្រិតភាសាអង់គ្លេស និងការបែងចែកថ្នាក់ ព្រមទាំងការអញ្ជើញសិស្សតាម QR code។',
      },
      {
        en: 'QR-based attendance sessions, class schedules and student ID management.',
        km: 'វគ្គវត្តមានដោយប្រើ QR code កាលវិភាគថ្នាក់ និងការគ្រប់គ្រងអត្តលេខសិស្ស។',
      },
      {
        en: 'Holiday import and sync from Google Calendar.',
        km: 'ការនាំចូល និងធ្វើសមកាលកម្មថ្ងៃឈប់សម្រាកពី Google Calendar។',
      },
      {
        en: 'Real-time notifications with Laravel Reverb (WebSockets) and a password reset flow.',
        km: 'ការជូនដំណឹងភ្លាមៗ (real-time) ដោយ Laravel Reverb (WebSockets) និងលំហូរកំណត់ពាក្យសម្ងាត់ឡើងវិញ។',
      },
      {
        en: 'Roles and permissions (RBAC), audit logs, reports and data export.',
        km: 'តួនាទី និងសិទ្ធិ (RBAC) កំណត់ត្រាសកម្មភាព (audit log) របាយការណ៍ និងការនាំចេញទិន្នន័យ។',
      },
      {
        en: 'Separate screens for admins, teachers and students, and responsive layouts for phones.',
        km: 'ផ្ទាំងដាច់ដោយឡែកសម្រាប់អ្នកគ្រប់គ្រង គ្រូ និងសិស្ស ព្រមទាំងការបង្ហាញដែលសមស្របលើទូរស័ព្ទ។',
      },
    ],
    challenges: [
      {
        en: 'Error messages were too generic, so users didn’t know why a class assignment or an application was rejected. I changed the frontend to show the real reason returned by the API.',
        km: 'សារកំហុសពីមុនមិនច្បាស់ ធ្វើឱ្យអ្នកប្រើមិនដឹងថាហេតុអ្វីការចាត់ថ្នាក់ ឬពាក្យស្នើសុំត្រូវបានបដិសេធ។ ខ្ញុំបានកែ frontend ឱ្យបង្ហាញមូលហេតុពិតប្រាកដដែល API ផ្ញើមក។',
      },
      {
        en: 'Several pages broke on small phone screens. I reworked the login page and dashboard, and replaced a wide table with a card list on phones.',
        km: 'ទំព័រមួយចំនួនបង្ហាញខុសលើអេក្រង់ទូរស័ព្ទតូច។ ខ្ញុំបានកែទំព័រ login និង dashboard ឡើងវិញ ហើយប្ដូរតារាងធំទៅជាបញ្ជីកាតនៅលើទូរស័ព្ទ។',
      },
    ],
    // TODO: check these — written from your git history; change them to your own words.
    learned: [
      {
        en: 'Writing the database design and task list before coding made a big system much easier to build step by step.',
        km: 'ការសរសេរការរចនាមូលដ្ឋានទិន្នន័យ និងបញ្ជីការងារមុនពេលសរសេរកូដ ធ្វើឱ្យប្រព័ន្ធធំងាយស្រួលបង្កើតជាជំហានៗ។',
      },
      {
        en: 'Automated tests (Playwright end-to-end tests, Vitest and PHPUnit) catch problems before they reach users.',
        km: 'តេស្តស្វ័យប្រវត្តិ (Playwright end-to-end, Vitest និង PHPUnit) ជួយរកឃើញបញ្ហាមុនពេលវាទៅដល់អ្នកប្រើ។',
      },
    ],
  },
  {
    slug: 'pnc-education-system',
    highlights: [
      { value: '500+', label: { en: 'students per Excel import', km: 'សិស្សក្នុងការនាំចូល Excel ម្ដង' } },
      { value: '14', label: { en: 'feature test suites', km: 'ឈុតតេស្តមុខងារ' } },
      { value: 'QR', label: { en: 'ID cards as PDF', km: 'កាតសម្គាល់ខ្លួនជា PDF' } },
    ],
    liveUrl: 'https://pnc.54.227.112.85.sslip.io/login',
    code: [
      { url: 'https://github.com/pnc-education-system/pnc-education-system', label: { en: 'Frontend code', km: 'កូដ Frontend' } },
      { url: 'https://github.com/pnc-education-system/pnc-education-system-api', label: { en: 'API code', km: 'កូដ API' } },
    ],
    title: { en: 'PNC Education System', km: 'ប្រព័ន្ធអប់រំ PNC' },
    summary: {
      en: 'An internal platform for PNC that manages the student lifecycle — enrollment, profiles, ID cards and evaluations.',
      km: 'ប្រព័ន្ធផ្ទៃក្នុងសម្រាប់ PNC ដើម្បីគ្រប់គ្រងដំណើរការសិស្ស — ការចុះឈ្មោះ ប្រវត្តិរូប កាតសម្គាល់ខ្លួន និងការវាយតម្លៃ។',
    },
    role: { en: 'Full-Stack Developer', km: 'អ្នកអភិវឌ្ឍន៍ Full-Stack' },
    period: { en: 'July 2026', km: 'កក្កដា ២០២៦' },
    stack: ['Laravel 12', 'PHP 8.2', 'Vue.js', 'MySQL', 'JWT'],
    overview: {
      en: 'An internal student lifecycle platform for PNC. I built the REST API with Laravel 12 (PHP 8.2) and the frontend with Vue.js, using MySQL for the database.',
      km: 'ប្រព័ន្ធផ្ទៃក្នុងសម្រាប់គ្រប់គ្រងដំណើរការសិស្សរបស់ PNC។ ខ្ញុំបានបង្កើត REST API ដោយ Laravel 12 (PHP 8.2) និង frontend ដោយ Vue.js ហើយប្រើ MySQL ជាមូលដ្ឋានទិន្នន័យ។',
    },
    features: [
      { en: 'JWT login with role-based access control (RBAC).', km: 'ប្រព័ន្ធ login ដោយ JWT និងការកំណត់សិទ្ធិតាមតួនាទី (RBAC)។' },
      { en: 'Two-step Excel bulk import for 500+ student records.', km: 'ការនាំចូលទិន្នន័យពី Excel ជាពីរជំហាន សម្រាប់ទិន្នន័យសិស្សច្រើនជាង ៥០០នាក់។' },
      { en: 'Enrollment status flow (state machine) with an audit trail of every change.', km: 'លំហូរស្ថានភាពការចុះឈ្មោះ (state machine) ដែលកត់ត្រារាល់ការផ្លាស់ប្ដូរ (audit trail)។' },
      { en: 'Webcam photo capture and batch PDF generation of ID cards with QR codes.', km: 'ថតរូបតាម webcam និងបង្កើតកាតសម្គាល់ខ្លួនដែលមាន QR code ជា PDF ច្រើនក្នុងពេលតែមួយ។' },
      { en: 'Student self-evaluation with comparison of results over time.', km: 'ការវាយតម្លៃខ្លួនឯងរបស់សិស្ស និងការប្រៀបធៀបលទ្ធផលតាមពេលវេលា។' },
      { en: 'Service-layer structure, consistent API error responses, and 14 feature test suites.', km: 'រចនាសម្ព័ន្ធ service layer ការឆ្លើយតបកំហុស API ជាស្តង់ដារ និង feature test ចំនួន ១៤ ឈុត។' },
    ],
  },
  {
    slug: 'nearly-ecommerce',
    highlights: [
      { value: '41', label: { en: 'API routes', km: 'API route' } },
      { value: '15', label: { en: 'database models', km: 'model មូលដ្ឋានទិន្នន័យ' } },
      { value: 'KHQR', label: { en: 'Bakong payments', km: 'ការទូទាត់ Bakong' } },
    ],
    imageNote: { en: 'Screenshots are from a design preview of the shop.', km: 'រូបភាពទាំងនេះយកចេញពីគំរូរចនា (design preview) របស់ហាង។' },
    code: [{ url: 'https://github.com/ChetDevelopment/Full-Stack-E-commerce' }],
    title: { en: 'NEARLY — Khmer Heritage Marketplace', km: 'NEARLY — ផ្សារអនឡាញផលិតផលបេតិកភណ្ឌខ្មែរ' },
    summary: {
      en: 'A full-stack online store for Khmer heritage products, with Bakong KHQR payment and an admin dashboard.',
      km: 'ហាងអនឡាញពេញលេញសម្រាប់ផលិតផលបេតិកភណ្ឌខ្មែរ ដែលមានការទូទាត់តាម Bakong KHQR និងផ្ទាំងគ្រប់គ្រងសម្រាប់អ្នកគ្រប់គ្រង។',
    },
    role: { en: 'Full-Stack Developer', km: 'អ្នកអភិវឌ្ឍន៍ Full-Stack' },
    period: { en: 'June 2026', km: 'មិថុនា ២០២៦' },
    stack: ['Laravel 12', 'Vue 3', 'MySQL', 'Laravel Sanctum', 'Tailwind CSS', 'Bakong KHQR'],
    overview: {
      en: 'A Laravel 12 REST API with a Vue 3 single-page shop for customers and a Blade dashboard for admins. The API is documented with OpenAPI (Swagger) and a Postman collection.',
      km: 'REST API ដោយ Laravel 12 ជាមួយហាងជា Vue 3 SPA សម្រាប់អតិថិជន និងផ្ទាំងគ្រប់គ្រងជា Blade សម្រាប់អ្នកគ្រប់គ្រង។ API មានឯកសារ OpenAPI (Swagger) និង Postman collection។',
    },
    features: [
      { en: 'Product catalog with categories, search and filters, product images and reviews.', km: 'បញ្ជីផលិតផលតាមប្រភេទ ជាមួយការស្វែងរក តម្រង រូបភាពផលិតផល និងការវាយតម្លៃ។' },
      { en: 'Shopping cart, wishlist, and checkout with tax and coupons.', km: 'កន្ត្រកទំនិញ បញ្ជីប្រាថ្នា (wishlist) និងការទូទាត់ដែលគិតពន្ធ និងគូប៉ុង។' },
      { en: 'Bakong KHQR payment integration.', km: 'ការភ្ជាប់ការទូទាត់តាម Bakong KHQR។' },
      { en: 'Stock deducted when an order is placed, order history, and order tracking with QR confirmation.', km: 'កាត់ស្តុកពេលមានការបញ្ជាទិញ ប្រវត្តិការបញ្ជាទិញ និងការតាមដានការបញ្ជាទិញដោយបញ្ជាក់តាម QR។' },
      { en: 'Token-based login with Laravel Sanctum and phone verification.', km: 'ការ login តាម token ដោយ Laravel Sanctum និងការផ្ទៀងផ្ទាត់លេខទូរស័ព្ទ។' },
      { en: 'Admin dashboard to manage products, categories, orders, users, coupons and tax settings.', km: 'ផ្ទាំងគ្រប់គ្រងសម្រាប់គ្រប់គ្រងផលិតផល ប្រភេទ ការបញ្ជាទិញ អ្នកប្រើ គូប៉ុង និងការកំណត់ពន្ធ។' },
    ],
  },
  {
    slug: 'attendance-management-system',
    highlights: [
      { value: 'RFID', label: { en: '& fingerprint check-in', km: 'និងការចុះវត្តមានតាមស្នាមម្រាមដៃ' } },
      { value: 'AWS', label: { en: 'EC2 with Docker + CI/CD', km: 'EC2 ជាមួយ Docker + CI/CD' } },
      { value: 'Bot', label: { en: 'Telegram notifications', km: 'ការជូនដំណឹងតាម Telegram' } },
    ],
    code: [{ url: 'https://github.com/ChetDevelopment/Attendance-System' }],
    title: { en: 'Attendance Management System', km: 'ប្រព័ន្ធគ្រប់គ្រងវត្តមាន' },
    summary: {
      en: 'An attendance platform for PNC, a Cambodian IT school, with check-in, dashboards, reports and Telegram notifications.',
      km: 'ប្រព័ន្ធគ្រប់គ្រងវត្តមានសម្រាប់ PNC (សាលា IT នៅកម្ពុជា) ដែលមានការចុះវត្តមាន ផ្ទាំងគ្រប់គ្រង របាយការណ៍ និងការជូនដំណឹងតាម Telegram។',
    },
    role: { en: 'Full-Stack Developer & Scrum Master', km: 'អ្នកអភិវឌ្ឍន៍ Full-Stack និង Scrum Master' },
    period: { en: 'Feb – Apr 2026', km: 'កុម្ភៈ – មេសា ២០២៦' },
    stack: ['Laravel 10', 'Vue 3', 'TypeScript', 'MySQL', 'Redis', 'Docker', 'GitHub Actions', 'AWS EC2'],
    overview: {
      en: 'A full-stack attendance platform with a Laravel 10 backend, a Vue 3 + TypeScript frontend, MySQL and Redis caching. Besides development, I was the team’s Scrum Master.',
      km: 'ប្រព័ន្ធគ្រប់គ្រងវត្តមានពេញលេញ ដែលមាន backend ជា Laravel 10, frontend ជា Vue 3 + TypeScript, MySQL និង Redis caching។ ក្រៅពីការសរសេរកូដ ខ្ញុំក៏ជា Scrum Master របស់ក្រុមផងដែរ។',
    },
    features: [
      { en: 'Attendance tracking with RFID / fingerprint check-in and geofencing.', km: 'ការតាមដានវត្តមាន ជាមួយការចុះវត្តមានតាម RFID/ស្នាមម្រាមដៃ និង geofencing (កំណត់តំបន់ទីតាំង)។' },
      { en: 'Role-based dashboards and reports, including student risk monitoring.', km: 'ផ្ទាំងគ្រប់គ្រងតាមតួនាទី និងរបាយការណ៍ រួមទាំងការតាមដានសិស្សដែលមានហានិភ័យ។' },
      { en: 'Telegram Bot notifications.', km: 'ការជូនដំណឹងតាម Telegram Bot។' },
      { en: 'Teacher timetable sync from an external API.', km: 'ការធ្វើសមកាលកម្មកាលវិភាគគ្រូពី API ខាងក្រៅ។' },
      { en: 'Excel / CSV report export.', km: 'ការនាំចេញរបាយការណ៍ជា Excel/CSV។' },
      { en: 'Containerized with Docker and deployed to AWS EC2 through a GitHub Actions CI/CD pipeline.', km: 'ដំណើរការក្នុង Docker container និងដាក់ឱ្យប្រើលើ AWS EC2 តាម CI/CD របស់ GitHub Actions។' },
    ],
  },
  {
    slug: 'mentorkhet',
    highlights: [
      { value: '98', label: { en: 'API routes', km: 'API route' } },
      { value: '150', label: { en: 'end-to-end tests', km: 'តេស្ត end-to-end' } },
      { value: '3', label: { en: 'developers, 2-week sprint', km: 'អ្នកអភិវឌ្ឍន៍ sprint ២ សប្ដាហ៍' } },
    ],
    liveUrl: 'https://mentor-management-api.onrender.com/api/v1/health',
    liveLabel: { en: 'Live API (health check)', km: 'API ផ្ទាល់ (health check)' },
    api: {
      prefix: '/api/v1',
      total: 98,
      routes: [
        'POST   /auth/login',
        'POST   /auth/refresh-token',
        'GET    /mentors',
        'GET    /matchings/recommended',
        'POST   /sessions',
        'POST   /sessions/:id/accept',
        'POST   /sessions/:id/complete',
        'GET    /availabilities/:mentorId/slots',
        'POST   /feedback/:id/respond',
        'POST   /mentors/:id/approve',
        'GET    /admin/dashboard',
        'GET    /activity-logs',
      ],
    },
    code: [{ url: 'https://github.com/ChetDevelopment/Mentor-Management-System' }],
    title: { en: 'MentorKhet — Mentor Management System', km: 'MentorKhet — ប្រព័ន្ធគ្រប់គ្រងអ្នកណែនាំ' },
    summary: {
      en: 'A backend API that matches mentees with mentors by skills, ratings and availability — built by a team of three in a two-week sprint.',
      km: 'Backend API ដែលផ្គូផ្គងអ្នករៀន (mentee) ជាមួយអ្នកណែនាំ (mentor) តាមជំនាញ ការវាយតម្លៃ និងពេលទំនេរ — បង្កើតដោយក្រុមបីនាក់ក្នុងរយៈពេលពីរសប្ដាហ៍។',
    },
    role: { en: 'Backend Developer & Project Coordinator', km: 'អ្នកអភិវឌ្ឍន៍ Backend និងអ្នកសម្របសម្រួលគម្រោង' },
    period: { en: 'May – Jun 2026', km: 'ឧសភា – មិថុនា ២០២៦' },
    stack: ['NestJS', 'TypeScript', 'TypeORM', 'MySQL', 'JWT', 'Jest', 'Docker', 'GitHub Actions'],
    overview: {
      en: 'MentorKhet connects mentees with mentors. Our team of three built the backend with NestJS and TypeScript in a 14-day sprint. Besides writing modules, I coordinated the project: I set up the project structure, wrote the sprint plan and task list, and split the remaining tasks between the team.',
      km: 'MentorKhet ភ្ជាប់អ្នករៀនជាមួយអ្នកណែនាំ។ ក្រុមយើងបីនាក់បានបង្កើត backend ដោយ NestJS និង TypeScript ក្នុង sprint រយៈពេល ១៤ ថ្ងៃ។ ក្រៅពីការសរសេរម៉ូឌុល ខ្ញុំក៏សម្របសម្រួលគម្រោង៖ រៀបចំរចនាសម្ព័ន្ធគម្រោង សរសេរផែនការ sprint និងបញ្ជីការងារ ហើយបែងចែកការងារដែលនៅសល់ក្នុងក្រុម។',
    },
    features: [
      { en: 'Mentoring session flow: request, accept, decline, complete, cancel and no-show.', km: 'លំហូរវគ្គណែនាំ៖ ស្នើសុំ ទទួលយក បដិសេធ បញ្ចប់ បោះបង់ និងអវត្តមាន (no-show)។' },
      { en: 'Matching service that scores mentors for each mentee.', km: 'សេវាផ្គូផ្គង ដែលដាក់ពិន្ទុអ្នកណែនាំសម្រាប់អ្នករៀនម្នាក់ៗ។' },
      { en: 'Modules for mentor availability, skills and categories, and learning resources.', km: 'ម៉ូឌុលសម្រាប់ពេលទំនេររបស់អ្នកណែនាំ ជំនាញ និងប្រភេទ និងធនធានសិក្សា។' },
      { en: 'Password reset with expiring tokens, and login required on every route by default (global auth guard).', km: 'ការកំណត់ពាក្យសម្ងាត់ឡើងវិញដោយ token ដែលផុតកំណត់ និងតម្រូវឱ្យ login លើគ្រប់ route (global auth guard)។' },
      { en: 'Activity logs, mentor approval and suspension, and admin tools.', km: 'កំណត់ត្រាសកម្មភាព ការអនុម័ត និងផ្អាកអ្នកណែនាំ និងឧបករណ៍សម្រាប់អ្នកគ្រប់គ្រង។' },
      { en: '150 end-to-end API tests with Jest, including negative cases for validation, security and roles.', km: 'តេស្ត API end-to-end ចំនួន ១៥០ ដោយ Jest រួមទាំងករណីខុស សម្រាប់ validation សុវត្ថិភាព និងតួនាទី។' },
      { en: 'A 130-case test plan in Google Sheets with a dashboard and bug tracker, generated by Google Apps Script.', km: 'ផែនការតេស្ត ១៣០ ករណីក្នុង Google Sheets ដែលមាន dashboard និងតារាងតាមដាន bug បង្កើតដោយ Google Apps Script។' },
    ],
  },
];

export const seo = {
  title: { en: 'Vichet Sat — Junior Full-Stack Developer in Phnom Penh', km: 'Vichet Sat — អ្នកអភិវឌ្ឍន៍ Full-Stack នៅភ្នំពេញ' } as L,
  description: {
    en: 'Vichet Sat is a junior full-stack developer in Phnom Penh building web apps with Vue.js, Laravel, Node.js and MySQL. See projects and get in touch.',
    km: 'Vichet Sat ជាអ្នកអភិវឌ្ឍន៍ Full-Stack នៅភ្នំពេញ ដែលបង្កើតកម្មវិធីវេបដោយ Vue.js, Laravel, Node.js និង MySQL។ មើលគម្រោង និងទាក់ទងមកខ្ញុំ។',
  } as L,
};
