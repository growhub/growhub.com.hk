// ============================================================
// GrowHub i18n — trilingual content dictionary
// Locales: zh-hk (default, no URL prefix), en, ja
// ============================================================

export const locales = ['zh-hk', 'en', 'ja'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'zh-hk';

export const localeNames: Record<Locale, string> = {
  'zh-hk': '繁',
  en: 'EN',
  ja: '日',
};

// HTML lang attribute value per locale
export const htmlLang: Record<Locale, string> = {
  'zh-hk': 'zh-Hant-HK',
  en: 'en',
  ja: 'ja',
};

export interface ServiceItem {
  name: string;
  desc: string;
  tags: string[];
}

export interface StepItem {
  title: string;
  desc: string;
}

export interface Dict {
  nav: {
    home: string;
    services: string;
    approach: string;
    works: string;
    company: string;
    contact: string;
  };
  meta: {
    home_title: string;
    home_desc: string;
    contact_title: string;
    privacy_title: string;
    thanks_title: string;
  };
  hero: {
    badge: string;
    title_line1: string;
    title_highlight: string;
    title_line2: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    stats: { value: string; label: string }[];
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  ai: {
    kicker: string;
    title: string;
    subtitle: string;
    points: StepItem[];
    note: string;
  };
  works: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: StepItem[];
  };
  company: {
    kicker: string;
    title: string;
    labels: { name: string; ceo: string; foundation: string; address: string };
    values: { name: string; ceo: string; foundation: string; address: string };
  };
  news: {
    kicker: string;
    title: string;
    items: { date: string; title: string; desc: string }[];
  };
  contactCta: {
    title: string;
    subtitle: string;
    button: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    name: string;
    email: string;
    content: string;
    submit: string;
    privacy_note: string;
  };
  thanks: {
    title: string;
    subtitle: string;
    desc: string;
    back: string;
  };
  privacy: {
    title: string;
    subtitle: string;
    body: { heading: string; text: string }[];
  };
  footer: {
    tagline: string;
    contactPrompt: string;
    nav_home: string;
    nav_privacy: string;
    nav_contact: string;
    rights: string;
  };
  notFound: {
    title: string;
    desc: string;
    back: string;
  };
}

const zhHK: Dict = {
  nav: {
    home: '首頁',
    services: '服務',
    approach: 'AI 開發',
    works: '開發流程',
    company: '公司詳情',
    contact: '查詢',
  },
  meta: {
    home_title: 'GrowHub — 香港軟件開發公司 | Web・App・AI 開發',
    home_desc:
      'GrowHub 是位於香港的軟件開發公司，專注 Web 應用・服務開發、網站製作與運營，以及流動應用程式開發。我們善用 AI 打造高效的開發流程。',
    contact_title: '查詢 | GrowHub',
    privacy_title: '私隱條例 | GrowHub',
    thanks_title: '查詢完畢 | GrowHub',
  },
  hero: {
    badge: '香港・軟件開發',
    title_line1: '以',
    title_highlight: 'AI 驅動',
    title_line2: '的方式，將構想快速化為產品',
    subtitle:
      'GrowHub 是一間位於香港的軟件開發公司。由 Web 應用・服務、網站製作與運營，到流動應用程式開發，我們善用 AI 打造高效流程，與客戶並肩把握每一次成長機會。',
    cta_primary: '免費諮詢',
    cta_secondary: '了解服務',
    stats: [
      { value: '2019', label: '香港成立' },
      { value: '3', label: '核心服務領域' },
      { value: 'AI', label: '驅動開發流程' },
    ],
  },
  services: {
    kicker: 'SERVICES',
    title: '我們的服務',
    subtitle: '由構思、開發到運營，提供一條龍的軟件開發服務。',
    items: [
      {
        name: 'Web 應用・服務開發',
        desc: '從構思到上線，開發可擴展的 Web 應用與 SaaS 服務。與客戶一同參與整個開發流程，持續提升服務品質。',
        tags: ['SaaS', 'Web App', 'API'],
      },
      {
        name: '網站製作與運營',
        desc: '由網站設計、製作到發佈後的持續運營與增長支援，提供全程一條龍服務。',
        tags: ['Website', '運營', 'SEO'],
      },
      {
        name: '流動應用程式開發',
        desc: '開發 iOS / Android 流動應用程式，由 UI/UX 設計到發佈與維護，全面支援。',
        tags: ['iOS', 'Android', 'UX'],
      },
      {
        name: 'AI 驅動開發',
        desc: '運用最新 AI 技術，重塑開發流程，以更快的速度與更高的品質交付產品。',
        tags: ['AI', '自動化', '效率'],
      },
    ],
  },
  ai: {
    kicker: 'AI-DRIVEN DEVELOPMENT',
    title: '以 AI 重塑開發流程',
    subtitle:
      '我們持續探索並實踐以 AI 為核心的開發手法，將其融入日常工作，為客戶帶來更快、更可靠、更具成本效益的成果。',
    points: [
      {
        title: '更快的交付速度',
        desc: '藉助 AI 輔助編碼與自動化，大幅縮短由構思到上線的時間。',
      },
      {
        title: '穩定的品質',
        desc: 'AI 輔助的程式碼審查與測試，讓品質在高速開發下依然可靠。',
      },
      {
        title: '更佳的成本效益',
        desc: '以精簡而高效的流程，讓每一分投入都能發揮更大價值。',
      },
    ],
    note: '我們亦提供 AI 開發流程導入的諮詢與協作。',
  },
  works: {
    kicker: 'HOW WE WORK',
    title: '我們的開發流程',
    subtitle: '透明、協作、快速迭代。與客戶一起把握每一步。',
    steps: [
      { title: '諮詢與構思', desc: '深入了解需求與目標，一同釐清方向。' },
      { title: '設計與原型', desc: '快速製作原型，儘早驗證與調整。' },
      { title: 'AI 驅動開發', desc: '善用 AI 加速開發，同時確保品質。' },
      { title: '發佈與運營', desc: '上線後持續運營、量度與優化，支援成長。' },
    ],
  },
  company: {
    kicker: 'COMPANY',
    title: '公司詳情',
    labels: {
      name: '企業名稱',
      ceo: '創始人 & 首席執行官',
      foundation: '公司成立日期',
      address: '地址',
    },
    values: {
      name: 'GrowHub 香港有限公司',
      ceo: '中村 美嘉 (CARMEN)',
      foundation: '2019 年 4 月 17 日',
      address: '21/F., Kam Fung Commercial Building, 2-4 Tin Lok Lane, Wanchai, Hong Kong',
    },
  },
  news: {
    kicker: 'NEWS',
    title: '最新消息',
    items: [
      {
        date: '2019/04/17',
        title: '完成法人登記手續',
        desc: '本公司於 2019 年 4 月 17 日完成法人登記相關手續。衷心感謝一直支持本公司的各位。',
      },
    ],
  },
  contactCta: {
    title: '有項目在構思中？',
    subtitle: '無論是 Web、App 還是 AI 開發，歡迎隨時與我們傾談。',
    button: '立即查詢',
  },
  contact: {
    kicker: 'CONTACT',
    title: '查詢',
    subtitle: '請由此填寫，我們會儘快回覆。',
    name: '姓名 / 公司名稱',
    email: '電子郵箱',
    content: '查詢內容',
    submit: '提交',
    privacy_note: '提交即表示您同意本公司的私隱條例。',
  },
  thanks: {
    title: '查詢完畢',
    subtitle: '感謝您的查詢。',
    desc: '您的查詢已成功收到，相關負責人會儘快回覆，請稍候。',
    back: '返回首頁',
  },
  privacy: {
    title: '私隱條例',
    subtitle: '請於同意本公司的個人資料私隱條例後瀏覽本網站。',
    body: [
      {
        heading: '個人資料的收集',
        text: '本公司在您透過查詢表格與我們聯絡時，會收集您所提供的姓名、電子郵箱及查詢內容等個人資料。',
      },
      {
        heading: '個人資料的使用',
        text: '所收集的個人資料僅用於回覆您的查詢及提供相關服務，不會用於其他用途。',
      },
      {
        heading: '個人資料的保護',
        text: '本公司會採取合理措施保護您的個人資料，防止未經授權的存取、外洩或篡改。',
      },
      {
        heading: '第三方披露',
        text: '除法律要求或取得您的同意外，本公司不會向第三方披露您的個人資料。',
      },
    ],
  },
  footer: {
    tagline: '善用 AI，打造高效的軟件開發。',
    contactPrompt: '歡迎垂詢',
    nav_home: '首頁',
    nav_privacy: '私隱條例',
    nav_contact: '查詢',
    rights: 'All rights reserved.',
  },
  notFound: {
    title: '找不到頁面',
    desc: '您尋找的頁面不存在，或已被移除。',
    back: '返回首頁',
  },
};

const en: Dict = {
  nav: {
    home: 'Home',
    services: 'Services',
    approach: 'AI Development',
    works: 'Process',
    company: 'Company',
    contact: 'Contact',
  },
  meta: {
    home_title: 'GrowHub — Hong Kong Software Studio | Web・App・AI Development',
    home_desc:
      'GrowHub is a Hong Kong-based software studio building web apps & services, websites, and mobile apps — powered by an AI-driven development workflow.',
    contact_title: 'Contact | GrowHub',
    privacy_title: 'Privacy Policy | GrowHub',
    thanks_title: 'Thank You | GrowHub',
  },
  hero: {
    badge: 'Hong Kong · Software Studio',
    title_line1: 'Turning ideas into products, ',
    title_highlight: 'AI-driven',
    title_line2: ' and fast.',
    subtitle:
      'GrowHub is a Hong Kong-based software studio. From web apps & services and website production to mobile app development, we harness AI to build faster and work alongside our clients at every step of growth.',
    cta_primary: 'Get in touch',
    cta_secondary: 'Our services',
    stats: [
      { value: '2019', label: 'Founded in HK' },
      { value: '3', label: 'Core service areas' },
      { value: 'AI', label: 'Driven workflow' },
    ],
  },
  services: {
    kicker: 'SERVICES',
    title: 'What we do',
    subtitle: 'End-to-end software development, from idea to operation.',
    items: [
      {
        name: 'Web App & Service Development',
        desc: 'We build scalable web apps and SaaS products, from concept to launch — working through the whole flow together with our clients to raise service quality.',
        tags: ['SaaS', 'Web App', 'API'],
      },
      {
        name: 'Website Production & Management',
        desc: 'From design and build to post-launch operation and growth support, we provide a consistent, end-to-end service.',
        tags: ['Website', 'Ops', 'SEO'],
      },
      {
        name: 'App Development',
        desc: 'We develop iOS / Android mobile apps, supporting everything from UI/UX design to release and maintenance.',
        tags: ['iOS', 'Android', 'UX'],
      },
      {
        name: 'AI-Driven Development',
        desc: 'We reshape the development process with the latest AI technology, shipping products with more speed and higher quality.',
        tags: ['AI', 'Automation', 'Efficiency'],
      },
    ],
  },
  ai: {
    kicker: 'AI-DRIVEN DEVELOPMENT',
    title: 'Reshaping development with AI',
    subtitle:
      'We continuously explore and put into practice an AI-first way of building software, weaving it into our daily work to deliver faster, more reliable, and more cost-effective results.',
    points: [
      {
        title: 'Faster delivery',
        desc: 'AI-assisted coding and automation dramatically shorten the path from idea to launch.',
      },
      {
        title: 'Reliable quality',
        desc: 'AI-assisted code review and testing keep quality dependable even at high development speed.',
      },
      {
        title: 'Better cost efficiency',
        desc: 'A lean, high-leverage process makes every unit of investment go further.',
      },
    ],
    note: 'We also offer consulting and collaboration on adopting AI-driven workflows.',
  },
  works: {
    kicker: 'HOW WE WORK',
    title: 'Our process',
    subtitle: 'Transparent, collaborative, and fast-iterating — every step, together.',
    steps: [
      { title: 'Discovery', desc: 'Understand your needs and goals, and align on direction together.' },
      { title: 'Design & Prototype', desc: 'Prototype quickly to validate and adjust early.' },
      { title: 'AI-Driven Build', desc: 'Leverage AI to accelerate development while safeguarding quality.' },
      { title: 'Launch & Operate', desc: 'Operate, measure, and optimize after launch to support growth.' },
    ],
  },
  company: {
    kicker: 'COMPANY',
    title: 'Company',
    labels: {
      name: 'Company',
      ceo: 'Founder & CEO',
      foundation: 'Founded',
      address: 'Address',
    },
    values: {
      name: 'GrowHub Limited',
      ceo: 'Mika Nakamura (Carmen)',
      foundation: '17 April 2019',
      address: '21/F., Kam Fung Commercial Building, 2-4 Tin Lok Lane, Wanchai, Hong Kong',
    },
  },
  news: {
    kicker: 'NEWS',
    title: 'Latest news',
    items: [
      {
        date: '17 Apr 2019',
        title: 'Corporate registration completed',
        desc: 'We completed our corporate registration on 17 April 2019. Thank you sincerely to everyone who has supported us.',
      },
    ],
  },
  contactCta: {
    title: 'Have a project in mind?',
    subtitle: 'Whether it is web, app, or AI development, we would love to talk.',
    button: 'Contact us',
  },
  contact: {
    kicker: 'CONTACT',
    title: 'Contact',
    subtitle: 'Fill in the form below and we will get back to you soon.',
    name: 'Name / Company',
    email: 'E-mail',
    content: 'Message',
    submit: 'Submit',
    privacy_note: 'By submitting, you agree to our privacy policy.',
  },
  thanks: {
    title: 'Thank you',
    subtitle: 'Thank you for reaching out.',
    desc: 'Your message has been received. Our team will get back to you shortly.',
    back: 'Back to home',
  },
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'Please read and agree to our privacy policy before using this site.',
    body: [
      {
        heading: 'Collection of Personal Data',
        text: 'When you contact us through the inquiry form, we collect the personal data you provide, such as your name, e-mail address, and the content of your message.',
      },
      {
        heading: 'Use of Personal Data',
        text: 'The personal data collected is used solely to respond to your inquiry and provide related services, and for no other purpose.',
      },
      {
        heading: 'Protection of Personal Data',
        text: 'We take reasonable measures to protect your personal data against unauthorized access, disclosure, or alteration.',
      },
      {
        heading: 'Disclosure to Third Parties',
        text: 'We do not disclose your personal data to third parties except as required by law or with your consent.',
      },
    ],
  },
  footer: {
    tagline: 'Building efficient software, powered by AI.',
    contactPrompt: 'Get in touch',
    nav_home: 'Home',
    nav_privacy: 'Privacy Policy',
    nav_contact: 'Contact',
    rights: 'All rights reserved.',
  },
  notFound: {
    title: 'Page not found',
    desc: 'The page you are looking for does not exist or has been moved.',
    back: 'Back to home',
  },
};

const ja: Dict = {
  nav: {
    home: 'ホーム',
    services: 'サービス',
    approach: 'AI開発',
    works: '開発フロー',
    company: '会社概要',
    contact: 'お問い合わせ',
  },
  meta: {
    home_title: 'GrowHub — 香港のソフトウェア開発会社 | Web・アプリ・AI開発',
    home_desc:
      'GrowHubは香港のソフトウェア開発会社です。Webアプリ・サービス開発、Web制作・運用、アプリ開発を、AIを活用した効率的な開発手法で提供します。',
    contact_title: 'お問い合わせ | GrowHub',
    privacy_title: 'プライバシーポリシー | GrowHub',
    thanks_title: 'お問い合わせ完了 | GrowHub',
  },
  hero: {
    badge: '香港・ソフトウェア開発',
    title_line1: 'アイデアを、',
    title_highlight: 'AIを活用',
    title_line2: 'して素早くプロダクトへ。',
    subtitle:
      'GrowHubは香港のソフトウェア開発会社です。Webアプリ・サービスからWeb制作・運用、アプリ開発まで、AIを活用した効率的な開発でスピーディに形にし、お客様の成長に伴走します。',
    cta_primary: '無料で相談する',
    cta_secondary: 'サービスを見る',
    stats: [
      { value: '2019', label: '香港で設立' },
      { value: '3', label: 'コア領域' },
      { value: 'AI', label: '駆動の開発' },
    ],
  },
  services: {
    kicker: 'SERVICES',
    title: '私たちのサービス',
    subtitle: '企画から開発、運用まで。ソフトウェア開発をワンストップで。',
    items: [
      {
        name: 'Webアプリ・サービス開発',
        desc: '企画からリリースまで、スケールするWebアプリ・SaaSを開発します。開発フロー全体をお客様と一緒に進め、サービスの質を高めます。',
        tags: ['SaaS', 'Webアプリ', 'API'],
      },
      {
        name: 'Web制作・運用',
        desc: 'サイトのデザイン・制作から、リリース後の運用・グロース支援まで、一貫してサポートします。',
        tags: ['Web制作', '運用', 'SEO'],
      },
      {
        name: 'アプリ開発',
        desc: 'iOS / Android のモバイルアプリを、UI/UX設計からリリース・保守まで幅広く開発します。',
        tags: ['iOS', 'Android', 'UX'],
      },
      {
        name: 'AIを活用した開発',
        desc: '最新のAI技術で開発フローを再設計し、より速く、より高い品質でプロダクトをお届けします。',
        tags: ['AI', '自動化', '効率化'],
      },
    ],
  },
  ai: {
    kicker: 'AI-DRIVEN DEVELOPMENT',
    title: 'AIで開発フローを再設計する',
    subtitle:
      'AIを軸にした開発手法を継続的に模索・実践し、日々の業務に取り込むことで、より速く・確実で・費用対効果の高い成果をお客様にお届けします。',
    points: [
      {
        title: 'スピードの向上',
        desc: 'AIによるコーディング支援と自動化で、企画からリリースまでの時間を大幅に短縮します。',
      },
      {
        title: '安定した品質',
        desc: 'AIを活用したコードレビューとテストで、高速な開発でも品質を確かなものに保ちます。',
      },
      {
        title: '高い費用対効果',
        desc: '無駄のない効率的なプロセスで、投資した分の価値を最大化します。',
      },
    ],
    note: 'AI開発フロー導入のご相談・伴走支援も承っています。',
  },
  works: {
    kicker: 'HOW WE WORK',
    title: '開発の進め方',
    subtitle: '透明・協働・高速な反復。一つひとつのステップをお客様と共に。',
    steps: [
      { title: 'ヒアリング', desc: '要件とゴールを深く理解し、方向性を一緒に定めます。' },
      { title: '設計・プロトタイプ', desc: '素早く試作し、早い段階で検証・調整します。' },
      { title: 'AI駆動の開発', desc: 'AIを活用して開発を加速しつつ、品質を担保します。' },
      { title: 'リリース・運用', desc: '公開後も運用・計測・改善を続け、成長を支援します。' },
    ],
  },
  company: {
    kicker: 'COMPANY',
    title: '会社概要',
    labels: {
      name: '企業名',
      ceo: 'FOUNDER & CEO',
      foundation: '設立',
      address: '住所',
    },
    values: {
      name: 'GrowHub Limited（GrowHub株式会社）',
      ceo: '中村 美嘉（CARMEN）',
      foundation: '2019年4月17日',
      address: '21/F., Kam Fung Commercial Building, 2-4 Tin Lok Lane, Wanchai, Hong Kong',
    },
  },
  news: {
    kicker: 'NEWS',
    title: 'お知らせ',
    items: [
      {
        date: '2019/04/17',
        title: '法人登記が完了しました',
        desc: '2019年4月17日付けで法人登記が完了いたしました。支援していただいた皆様、誠にありがとうございます。',
      },
    ],
  },
  contactCta: {
    title: '構想中のプロジェクトはありますか？',
    subtitle: 'Web・アプリ・AI開発など、まずはお気軽にご相談ください。',
    button: 'お問い合わせ',
  },
  contact: {
    kicker: 'CONTACT',
    title: 'お問い合わせ',
    subtitle: 'こちらのフォームよりお問い合わせください。折り返しご連絡いたします。',
    name: 'お名前 / 会社名',
    email: 'メールアドレス',
    content: 'お問い合わせ内容',
    submit: '送信する',
    privacy_note: '送信することで、プライバシーポリシーに同意したものとみなします。',
  },
  thanks: {
    title: 'お問い合わせ完了',
    subtitle: 'お問い合わせありがとうございます。',
    desc: 'お問い合わせを受け付けました。担当より折り返しご連絡いたします。しばらくお待ちください。',
    back: 'ホームへ戻る',
  },
  privacy: {
    title: 'プライバシーポリシー',
    subtitle: '本サイトのご利用にあたっては、プライバシーポリシーへの同意をお願いいたします。',
    body: [
      {
        heading: '個人情報の収集',
        text: 'お問い合わせフォームからご連絡いただく際に、お名前・メールアドレス・お問い合わせ内容などの個人情報を取得します。',
      },
      {
        heading: '個人情報の利用',
        text: '取得した個人情報は、お問い合わせへの回答および関連するサービス提供の目的にのみ利用し、それ以外の目的には利用しません。',
      },
      {
        heading: '個人情報の保護',
        text: '不正アクセス・漏洩・改ざんなどを防ぐため、合理的な安全対策を講じて個人情報を保護します。',
      },
      {
        heading: '第三者への開示',
        text: '法令に基づく場合、またはご本人の同意がある場合を除き、個人情報を第三者に開示することはありません。',
      },
    ],
  },
  footer: {
    tagline: 'AIを活用して、効率的なソフトウェア開発を。',
    contactPrompt: 'お気軽にお問い合わせください',
    nav_home: 'ホーム',
    nav_privacy: 'プライバシーポリシー',
    nav_contact: 'お問い合わせ',
    rights: 'All rights reserved.',
  },
  notFound: {
    title: 'ページが見つかりません',
    desc: 'お探しのページは存在しないか、移動された可能性があります。',
    back: 'ホームへ戻る',
  },
};

export const dictionaries: Record<Locale, Dict> = {
  'zh-hk': zhHK,
  en,
  ja,
};

export function getDict(lang: Locale): Dict {
  return dictionaries[lang] ?? dictionaries[defaultLocale];
}

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/**
 * Build a localized URL path. zh-hk (default) has no prefix; en/ja are prefixed.
 * @param path a path starting with "/" (e.g. "/contact")
 */
export function localizePath(path: string, lang: Locale): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  if (lang === defaultLocale) return clean === '' ? '/' : clean;
  return `/${lang}${clean === '' ? '' : clean}`;
}
