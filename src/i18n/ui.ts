/**
 * Language helpers + all small interface text (buttons, headings, labels).
 * Your main content (projects, about, skills…) is in src/data/site.ts.
 */

export const languages = { en: 'EN', km: 'ខ្មែរ' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** A piece of text in both languages. */
export type L = Record<Lang, string>;

export function getLang(url: URL): Lang {
  return url.pathname === '/km' || url.pathname.startsWith('/km/') ? 'km' : 'en';
}

/** '/km/about/' -> '/about/' */
export function stripLang(pathname: string): string {
  const stripped = pathname.replace(/^\/km(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

/** Build a link for the given language: ('/about', 'km') -> '/km/about' */
export function localePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return path === '/' ? '/km/' : `/km${path}`;
}

export const ui = {
  'nav.projects': { en: 'Projects', km: 'គម្រោង' },
  'nav.about': { en: 'About', km: 'អំពីខ្ញុំ' },
  'nav.contact': { en: 'Contact', km: 'ទំនាក់ទំនង' },
  'a11y.skip': { en: 'Skip to content', km: 'រំលងទៅមាតិកា' },
  'a11y.theme': { en: 'Toggle dark mode', km: 'ប្ដូរផ្ទៃងងឹត/ភ្លឺ' },
  'a11y.lang': { en: 'Language', km: 'ភាសា' },
  'a11y.menu': { en: 'Open menu', km: 'បើកម៉ឺនុយ' },
  'a11y.tech': { en: 'Technologies', km: 'បច្ចេកវិទ្យា' },

  'home.hi': { en: 'Hi, I’m', km: 'សួស្ដី ខ្ញុំឈ្មោះ' },
  'home.seeProjects': { en: 'See my projects', km: 'មើលគម្រោងរបស់ខ្ញុំ' },
  'home.getInTouch': { en: 'Get in touch', km: 'ទាក់ទងមកខ្ញុំ' },
  'home.cv': { en: 'Download CV', km: 'ទាញយក CV' },
  'home.projectsIntro': {
    en: 'Real projects from school and work — what they do, my role, and what I built.',
    km: 'គម្រោងពិតពីសាលា និងការងារ — អ្វីដែលវាធ្វើ តួនាទីរបស់ខ្ញុំ និងអ្វីដែលខ្ញុំបានបង្កើត។',
  },
  'home.photoHint': { en: 'Hover me', km: 'ដាក់កណ្ដុរលើរូប' },
  'home.openShort': { en: 'Open to work', km: 'កំពុងស្វែងរកការងារ' },
  'home.factLive': { en: 'projects live online', km: 'គម្រោងកំពុងដំណើរការអនឡាញ' },
  'home.factStudy': { en: 'Studying Web Programming at PNC', km: 'កំពុងសិក្សា Web Programming នៅ PNC' },
  'cta.eyebrow': { en: 'Contact', km: 'ទំនាក់ទំនង' },
  'cta.copy': { en: 'Copy', km: 'ចម្លង' },
  'cta.copied': { en: 'Copied!', km: 'បានចម្លង!' },
  'nav.hire': { en: 'Contact me', km: 'ទាក់ទងខ្ញុំ' },
  'home.projectsTitle': { en: 'Things I’ve built', km: 'អ្វីដែលខ្ញុំបានបង្កើត' },
  'home.viewAll': { en: 'View all', km: 'មើលទាំងអស់' },
  'home.skills': { en: 'Skills', km: 'ជំនាញ' },
  'home.skillsTitle': { en: 'What I work with', km: 'បច្ចេកវិទ្យាដែលខ្ញុំប្រើ' },
  'home.skillsIntro': {
    en: 'The tools I use most in my projects. Move your mouse over the sphere to spin it.',
    km: 'ឧបករណ៍ដែលខ្ញុំប្រើច្រើនបំផុតក្នុងគម្រោង។ ដាក់កណ្ដុរលើបាល់ ដើម្បីបង្វិលវា។',
  },
  'home.experience': { en: 'Experience', km: 'បទពិសោធន៍' },
  'home.experienceTitle': { en: 'Experience & education', km: 'បទពិសោធន៍ និងការសិក្សា' },
  'home.education': { en: 'Education', km: 'ការសិក្សា' },
  'home.ctaTitle': { en: 'Let’s talk', km: 'មកពិភាក្សាគ្នា' },
  'home.ctaText': {
    en: 'I’m looking for a full-time junior developer role, and I’m happy to help with freelance projects. If you think I could be a good fit, I’d love to hear from you.',
    km: 'ខ្ញុំកំពុងស្វែងរកការងារពេញម៉ោងជាអ្នកអភិវឌ្ឍន៍កម្រិតដំបូង ហើយក៏រីករាយជួយគម្រោង freelance ផងដែរ។ ប្រសិនបើអ្នកគិតថាខ្ញុំសមស្រប សូមទាក់ទងមកខ្ញុំ។',
  },
  'home.contactMe': { en: 'Contact me', km: 'ទាក់ទងខ្ញុំ' },

  'projects.title': { en: 'Things I’ve built', km: 'អ្វីដែលខ្ញុំបានបង្កើត' },
  'projects.intro': {
    en: 'Projects I’ve built at school and at work. Each page explains what the project does, my role, and what I built.',
    km: 'គម្រោងដែលខ្ញុំបានបង្កើតនៅសាលា និងកន្លែងធ្វើការ។ ទំព័រនីមួយៗពន្យល់ពីអ្វីដែលគម្រោងធ្វើ តួនាទីរបស់ខ្ញុំ និងអ្វីដែលខ្ញុំបានធ្វើ។',
  },
  'projects.readMore': { en: 'Read more', km: 'អានបន្ថែម' },
  'project.all': { en: 'All projects', km: 'គម្រោងទាំងអស់' },
  'project.role': { en: 'My role', km: 'តួនាទីរបស់ខ្ញុំ' },
  'project.when': { en: 'When', km: 'ពេលវេលា' },
  'project.tech': { en: 'Tech', km: 'បច្ចេកវិទ្យា' },
  'project.live': { en: 'View live', km: 'មើលផ្ទាល់' },
  'project.code': { en: 'Source code', km: 'កូដប្រភព' },
  'project.overview': { en: 'Overview', km: 'ទិដ្ឋភាពទូទៅ' },
  'project.built': { en: 'What I built', km: 'អ្វីដែលខ្ញុំបានធ្វើ' },
  'project.challenges': { en: 'Challenges', km: 'បញ្ហាប្រឈម' },
  'project.learned': { en: 'What I learned', km: 'អ្វីដែលខ្ញុំបានរៀន' },
  'project.gallery': { en: 'Screenshots', km: 'រូបភាពអេក្រង់' },
  'project.private': {
    en: 'Internal project for my workplace — the source code is private.',
    km: 'គម្រោងផ្ទៃក្នុងសម្រាប់កន្លែងធ្វើការ — កូដប្រភពមិនបង្ហាញជាសាធារណៈទេ។',
  },
  'project.privateShort': { en: 'Internal project', km: 'គម្រោងផ្ទៃក្នុង' },
  'project.liveBadge': { en: 'Live', km: 'កំពុងដំណើរការ' },
  'project.api': { en: 'API endpoints', km: 'API endpoints' },
  'project.apiMore': { en: 'routes in total', km: 'route សរុប' },
  'project.next': { en: 'Next project', km: 'គម្រោងបន្ទាប់' },

  'about.title': { en: 'A bit about me', km: 'ស្គាល់ខ្ញុំបន្តិច' },
  'about.softSkills': { en: 'Soft skills', km: 'ជំនាញទន់' },
  'about.languages': { en: 'Languages', km: 'ភាសា' },
  'about.downloadCv': { en: 'Download CV', km: 'ទាញយក CV' },

  'contact.title': { en: 'Get in touch', km: 'ទាក់ទងមកខ្ញុំ' },
  'contact.intro': {
    en: 'Have a full-time role or a project in mind? Send me a message and I’ll get back to you within a couple of days.',
    km: 'មានការងារពេញម៉ោង ឬគម្រោងណាមួយមែនទេ? សូមផ្ញើសារមកខ្ញុំ ហើយខ្ញុំនឹងឆ្លើយតបក្នុងរយៈពេលពីរបីថ្ងៃ។',
  },
  'contact.email': { en: 'Email', km: 'អ៊ីមែល' },
  'contact.phone': { en: 'Phone', km: 'ទូរស័ព្ទ' },
  'contact.formTitle': { en: 'Send me a message', km: 'ផ្ញើសារមកខ្ញុំ' },
  'contact.formHint': { en: 'I usually reply within 1–2 days.', km: 'ជាធម្មតាខ្ញុំឆ្លើយតបក្នុងរយៈពេល ១–២ ថ្ងៃ។' },
  'contact.topic': { en: 'What is it about?', km: 'តើទាក់ទងអំពីអ្វី?' },
  'contact.topicJob': { en: 'Full-time job', km: 'ការងារពេញម៉ោង' },
  'contact.topicCollab': { en: 'Collaboration', km: 'សហការ' },
  'contact.topicFreelance': { en: 'Freelance project', km: 'គម្រោង freelance' },
  'contact.topicOther': { en: 'Something else', km: 'ផ្សេងៗ' },
  'contact.mailOpened': {
    en: 'Your email app should open with the message ready — just press send.',
    km: 'កម្មវិធីអ៊ីមែលរបស់អ្នកនឹងបើកជាមួយសារដែលរួចរាល់ — គ្រាន់តែចុចផ្ញើ។',
  },
  'contact.name': { en: 'Name', km: 'ឈ្មោះ' },
  'contact.message': { en: 'Message', km: 'សារ' },
  'contact.send': { en: 'Send message', km: 'ផ្ញើសារ' },
  'contact.sending': { en: 'Sending…', km: 'កំពុងផ្ញើ…' },
  'contact.sent': { en: 'Thanks! Your message was sent.', km: 'អរគុណ! សាររបស់អ្នកត្រូវបានផ្ញើហើយ។' },
  'contact.failed': {
    en: 'Something went wrong. Please email me directly instead.',
    km: 'មានបញ្ហាបន្តិច។ សូមផ្ញើអ៊ីមែលមកខ្ញុំដោយផ្ទាល់។',
  },

  'footer.built': { en: 'Built with Astro & Tailwind CSS.', km: 'បង្កើតដោយ Astro និង Tailwind CSS។' },
} satisfies Record<string, L>;

export type UiKey = keyof typeof ui;

/** Returns a translator for one language: const t = useT('km'); t('nav.about') */
export function useT(lang: Lang) {
  return (key: UiKey | L): string => (typeof key === 'string' ? ui[key][lang] : key[lang]);
}
