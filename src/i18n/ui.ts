// ============================================================
// GrowHub i18n — trilingual content dictionary
// Locales: en (default, no URL prefix), zh-hk, ja
// ============================================================

export const locales = ['en', 'zh-hk', 'ja'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

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

export type ServiceSlug =
  | 'web-app-development'
  | 'website-production'
  | 'app-development'
  | 'ai-development';

export interface ServiceDetailItem {
  title: string;
  summary: string;
  deliverables: string[];
  suitableFor: string[];
}

export interface StepItem {
  title: string;
  desc: string;
}

export interface Dict {
  nav: {
    home: string;
    services: string;
    capabilities: string;
    approach: string;
    works: string;
    company: string;
    contact: string;
    menu: string;
    close_menu: string;
    skip_to_content: string;
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
    previous: string;
    next: string;
    items: ServiceItem[];
  };
  serviceDetail: {
    kicker: string;
    back: string;
    learnMore: string;
    deliverablesTitle: string;
    suitableTitle: string;
    processKicker: string;
    processTitle: string;
    processIntro: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    items: Record<ServiceSlug, ServiceDetailItem>;
  };
  capabilities: {
    kicker: string;
    title: string;
    subtitle: string;
    groups: { name: string; items: string[] }[];
  };
  ai: {
    kicker: string;
    title: string;
    subtitle: string;
    points: StepItem[];
    note: string;
  };
  strengths: {
    kicker: string;
    title: string;
    subtitle: string;
    items: StepItem[];
  };
  flow: {
    kicker: string;
    title: string;
    subtitle: string;
    engine: string;
    steps: { title: string; desc: string; ai: string }[];
    speed: {
      title: string;
      traditional: string;
      traditionalValue: string;
      ai: string;
      aiValue: string;
      note: string;
    };
  };
  demo: {
    kicker: string;
    title: string;
    subtitle: string;
    placeholder: string;
    examples: string[];
    button: string;
    loading: string;
    disclaimer: string;
    errors: { empty: string; failed: string; notConfigured: string };
    result: {
      heading: string;
      features: string;
      screens: string;
      stack: string;
      nextStep: string;
      cta: string;
      again: string;
    };
  };
  works: {
    kicker: string;
    title: string;
    subtitle: string;
    free_badge: string;
    free_note: string;
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
  faq: {
    kicker: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  contactCta: {
    title: string;
    subtitle: string;
    button: string;
    points: string[];
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    name: string;
    company: string;
    email: string;
    content: string;
    submit: string;
    sending: string;
    privacy_note: string;
    errors: { name: string; email: string; content: string; turnstile: string; generic: string };
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
    contactKicker: string;
    contactPrompt: string;
    explore: string;
    company: string;
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
    capabilities: '技術',
    approach: 'AI 開發',
    works: '合作方式',
    company: '公司詳情',
    contact: '查詢',
    menu: '開啟選單',
    close_menu: '關閉選單',
    skip_to_content: '跳至主要內容',
  },
  meta: {
    home_title: 'GrowHub — 香港軟件開發公司 | 0 初期費用原型開發・Web・App・AI',
    home_desc:
      '先做出來，再談。GrowHub 是香港的軟件開發公司，以 0 初期費用、AI 驅動的方式先造出可運作的原型，再以成品為基礎，與您一起釐清要解決的課題與服務方向。提供 Web 應用・服務開發、網站製作與運營、流動應用程式開發。',
    contact_title: '查詢 | GrowHub',
    privacy_title: '私隱條例 | GrowHub',
    thanks_title: '查詢完畢 | GrowHub',
  },
  hero: {
    badge: '香港・軟件開發',
    title_line1: '以 0 初期費用，從',
    title_highlight: '可運作的原型',
    title_line2: '開始。',
    subtitle:
      '我們先以 AI 驅動的方式快速造出「動得起來的東西」，再一邊看著成品，一邊與您一起決定要解決甚麼課題、打造怎樣的服務。靈活、快速——把您的第一步，變成踏實的一步。',
    cta_primary: '免費諮詢',
    cta_secondary: '了解合作方式',
    stats: [
      { value: 'HK$0', label: '初期費用原型開發' },
      { value: '數日', label: '最快見到成品' },
      { value: '2019', label: '香港成立' },
    ],
  },
  services: {
    kicker: 'SERVICES',
    title: '我們的服務',
    subtitle: '由構思、開發到運營，提供一條龍的軟件開發服務。',
    previous: '上一項服務',
    next: '下一項服務',
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
  serviceDetail: {
    kicker: 'SERVICE',
    back: '返回所有服務',
    learnMore: '了解更多',
    deliverablesTitle: '可協助製作',
    suitableTitle: '適合這類項目',
    processKicker: 'PROTOTYPE FIRST',
    processTitle: '先看到可運作的原型',
    processIntro:
      '我們不會一開始就要求您確定所有規格，而是先用 AI 快速製作可操作的原型，再根據實物一起調整方向。',
    ctaTitle: '有想法，但還未整理成企劃？',
    ctaText: '毋須準備完整的計劃書。先告訴我們您想改善的事情，我們會由原型開始。',
    ctaButton: '免費諮詢',
    items: {
      'web-app-development': {
        title: 'Web 應用・服務開發',
        summary: '由業務構思到 SaaS、會員系統及內部工具，我們設計並開發可持續擴展的 Web 服務。',
        deliverables: [
          'SaaS 與訂閱服務',
          '預約・會員管理系統',
          '企業內部工具',
          'API 與外部服務整合',
        ],
        suitableFor: ['希望把手動流程數碼化', '需要先驗證新服務構思', '現有系統難以擴展或維護'],
      },
      'website-production': {
        title: '網站製作與運營',
        summary: '由資訊架構、UI/UX、開發到發佈後改善，製作兼顧品牌、速度與成果的網站。',
        deliverables: ['企業網站', '服務與產品網站', '多語言網站', 'SEO 與持續改善'],
        suitableFor: [
          '網站未能清楚傳達服務價值',
          '需要面向香港、日本及海外市場',
          '希望發佈後繼續改善成效',
        ],
      },
      'app-development': {
        title: '流動應用程式開發',
        summary: '由介面設計、原型到 iOS・Android 發佈及維護，協助您把流動服務真正交到用戶手上。',
        deliverables: ['iOS・Android 應用程式', '跨平台應用程式', '後台與 API', '發佈與維護支援'],
        suitableFor: [
          '需要手機通知、相機或位置功能',
          '希望同時支援 iOS 與 Android',
          '想先以原型驗證使用流程',
        ],
      },
      'ai-development': {
        title: 'AI 驅動開發',
        summary: '把 LLM、RAG 與自動化融入實際業務，同時以 AI 提升整個產品開發流程的速度與品質。',
        deliverables: [
          '生成式 AI 功能',
          '企業知識搜尋與 RAG',
          '工作流程自動化',
          'AI 開發流程導入支援',
        ],
        suitableFor: ['希望把 AI 接入現有服務', '需要活用公司內部知識', '想在確保品質下加快開發'],
      },
    },
  },
  capabilities: {
    kicker: 'CAPABILITIES',
    title: '技術能力',
    subtitle: '我們用以構建產品的主要技術。',
    groups: [
      { name: '前端', items: ['React', 'Next.js', 'Astro', 'TypeScript', 'Tailwind CSS'] },
      { name: '後端', items: ['Node.js', 'Python', 'Go', 'REST / GraphQL', 'PostgreSQL'] },
      { name: '流動應用', items: ['React Native', 'Swift', 'Kotlin', 'Flutter'] },
      {
        name: '雲端 & DevOps',
        items: ['AWS', 'Cloudflare', 'Docker', 'CI/CD', 'Cloudflare Pages'],
      },
      { name: 'AI', items: ['LLM 整合', 'RAG', 'AI 輔助開發', '自動化'] },
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
    note: '正因為有這套 AI 開發能力，我們才能提供 0 初期費用的原型開發。亦歡迎查詢 AI 開發流程導入的協作。',
  },
  works: {
    kicker: 'PROTOTYPE FIRST',
    title: '先做出來，再談。',
    subtitle:
      '對話的起點不是計劃書，而是「做出來的東西」。這是我們以 0 初期費用原型開展項目的方式。',
    free_badge: 'HK$0',
    free_note:
      '由諮詢、可運作原型的開發，到方案建議——步驟 ①〜③ 全部 0 初期費用。先看到實物，再決定是否進入正式開發。',
    steps: [
      { title: '免費諮詢', desc: '毋須準備計劃書。想做甚麼、有甚麼疑問，直接告訴我們就可以。' },
      { title: 'AI 驅動試作（HK$0）', desc: '運用 AI，最快數日內以 0 初期費用造出可運作的原型。' },
      { title: '看著成品傾談', desc: '一邊實際操作原型，一邊釐清要解決的課題與服務應有的形態。' },
      {
        title: '進入正式開發',
        desc: '方向確定後，隨即靈活、快速地展開正式開發；若感覺不合適，在此停下也沒問題。',
      },
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
        date: '2026/07/25',
        title: '本公司網站已全新改版',
        desc: '本公司網站已於設計及技術層面全面更新。今後亦請繼續多多支持。',
      },
      {
        date: '2019/04/17',
        title: '完成法人登記手續',
        desc: '本公司於 2019 年 4 月 17 日完成法人登記相關手續。衷心感謝一直支持本公司的各位。',
      },
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: '常見問題',
    subtitle: '關於「先做出來，再談」的合作方式，以下是常見的疑問。',
    items: [
      {
        q: '真的 0 初期費用嗎？免費到哪個階段？',
        a: '是。由免費諮詢、AI 驅動的可運作原型開發，到方案建議（步驟 ①〜③）全部 0 初期費用。看過實物後，再決定是否進入正式開發。',
      },
      {
        q: '最快多久可以看到「動得起來的東西」？',
        a: '視乎範圍，最快數日內即可交付可運作的原型。我們刻意把第一步做得又快又輕，讓您盡早看到成果。',
      },
      {
        q: '可以對應哪些類型的專案？',
        a: 'Web 應用・SaaS、網站製作與運營、iOS / Android 流動應用，以及 AI 驅動開發。由構思到上線、運營都能一條龍支援。',
      },
      {
        q: '大量使用 AI，品質可靠嗎？',
        a: '我們以 AI 輔助編碼、程式碼審查與測試，並由工程師把關，在高速開發下維持穩定品質。AI 是加速工具，不是放任交付。',
      },
      {
        q: '如果原型不合適，可以中途停止嗎？',
        a: '可以。看過原型後若感覺方向不合，在此停下也沒問題，不會產生正式開發費用。先確認、後投入是我們的原則。',
      },
      {
        q: '支援哪些語言與地區？',
        a: '本公司位於香港，支援繁體中文、英文、日文，並以遠端方式與香港以至海外的客戶合作。',
      },
    ],
  },
  strengths: {
    kicker: 'JAPAN × HONG KONG',
    title: '把日本的技術力，帶到香港',
    subtitle:
      '開發由日本工程師負責。透過與日本企業協作及日本的尖端 AI，讓您在香港也能享受日本品質的開發。',
    items: [
      {
        title: '日本工程師負責開發',
        desc: '由需求對接到實作，均由日本工程師細心處理，減少認知落差，以日本水準的品質標準交付。',
      },
      {
        title: '與日本企業協作',
        desc: '與日本夥伴企業緊密合作，帶來可靠的技術與開發體制，並將日本的專業知識與最新趨勢注入專案。',
      },
      {
        title: '運用日本尖端 AI',
        desc: '部分最尖端的 AI 在香港較難使用。我們透過日本的技術與環境將其引入開發，兼顧速度與品質。',
      },
    ],
  },
  flow: {
    kicker: 'AI DEVELOPMENT FLOW',
    title: '我們實際如何用 AI 開發',
    subtitle:
      '實績從外部難以判斷，所以我們選擇公開「怎樣做」。AI 貫穿每一個工序，讓小團隊也能又快又穩地交付。',
    engine: 'AI 貫穿全工序，加速並自動化',
    steps: [
      {
        title: '需求整理・設計',
        desc: '一起把想法化為文字，並一口氣完成規格草案。',
        ai: 'AI 整理需求、生成規格草案',
      },
      {
        title: 'AI 驅動原型',
        desc: '最快數日交付可運作原型，以可觸碰的實物討論。',
        ai: 'AI 快速生成初期 UI 與程式碼',
      },
      {
        title: '檢視 & 反覆',
        desc: '看著實物即時調整方向，避免多餘的開發。',
        ai: 'AI 迅速提出改善與替代方案',
      },
      {
        title: '實作・測試',
        desc: '由工程師把關品質，穩步進入正式開發。',
        ai: 'AI 協同編碼、程式碼審查、自動測試',
      },
      {
        title: '發佈・運營',
        desc: '上線不是終點，邊量度邊持續改善。',
        ai: 'AI 提升 CI/CD、監控與迭代效率',
      },
    ],
    speed: {
      title: '為何這麼快',
      traditional: '傳統開發',
      traditionalValue: '數週起',
      ai: 'AI 驅動開發',
      aiValue: '數日起',
      note: '在相同品質標準下，以 AI 壓縮每個工序——這正是能提供 0 初期費用原型的原因。',
    },
  },
  demo: {
    kicker: 'TRY IT NOW',
    title: '先體驗，再相信',
    subtitle: '輸入你的點子，AI 會即時提出原型構成案。這正是我們 0 初期費用原型的縮影。',
    placeholder: '例如：為小店打造的預約與會員 App',
    examples: ['餐廳線上預約系統', '健身教練的會員 App', '二手買賣平台'],
    button: '生成原型構成',
    loading: 'AI 正在思考原型構成…',
    disclaimer:
      '※ 由 AI 即時生成的示意，僅供參考。請勿輸入個人、機密或敏感資料；內容會傳送至外部 AI 服務。',
    errors: {
      empty: '請先輸入你的點子。',
      failed: '生成失敗，請稍後再試。',
      notConfigured: 'Demo 尚未啟用（需設定 AI 服務）。',
    },
    result: {
      heading: 'AI 提出的原型構成',
      features: '主要功能',
      screens: '主要畫面',
      stack: '技術選型',
      nextStep: '若先做原型',
      cta: '就用這個構成諮詢',
      again: '換個點子再試',
    },
  },
  contactCta: {
    title: '不如先看到「動得起來的東西」，再作決定？',
    subtitle: '由 0 初期費用的原型開發開始。Web、App、AI 開發亦歡迎隨時查詢。',
    button: '立即查詢',
    points: ['0 初期費用', '最快數日內出原型', '靈活・快速對應'],
  },
  contact: {
    kicker: 'CONTACT',
    title: '查詢',
    subtitle: '請由此填寫，我們會儘快回覆。',
    name: '姓名',
    company: '公司名稱（可選）',
    email: '電子郵箱',
    content: '查詢內容',
    submit: '提交',
    sending: '傳送中…',
    privacy_note: '提交即表示您同意本公司的私隱條例。',
    errors: {
      name: '請輸入姓名。',
      email: '請輸入有效的電子郵箱。',
      content: '請輸入查詢內容。',
      turnstile: '請完成驗證。',
      generic: '發生錯誤，請稍後再試。',
    },
  },
  thanks: {
    title: '查詢完畢',
    subtitle: '感謝您的查詢。',
    desc: '您的查詢已成功收到，相關負責人會儘快回覆，請稍候。',
    back: '返回首頁',
  },
  privacy: {
    title: '私隱政策',
    subtitle:
      'GrowHub Limited（下稱「本公司」）致力遵守香港《個人資料（私隱）條例》（第486章）的規定，保障閣下的個人資料私隱。請於使用本網站前細閱本私隱政策。',
    body: [
      {
        heading: '適用範圍',
        text: '本私隱政策適用於閣下透過本網站（growhub.com.hk）向本公司提供的個人資料，說明本公司如何收集、使用、儲存及保障該等資料，並列明閣下可行使的權利。',
      },
      {
        heading: '收集的個人資料類別',
        text: '本公司透過查詢表格收集的個人資料包括：姓名、公司名稱（如適用）、電子郵箱地址及查詢內容。當閣下使用 AI 原型規劃 Demo 時，本公司亦會處理閣下輸入的構思內容；請勿輸入個人資料、機密資料或敏感資料。\n此外，本網站使用網站分析工具，可能自動收集瀏覽器類型、裝置資訊、IP 地址（經匿名化處理）及瀏覽行為等非直接識別個人身份的資料。',
      },
      {
        heading: '收集方式',
        text: '個人資料主要透過閣下自願於查詢表格中填寫而收集；瀏覽數據則透過 Cookie 及類似技術於閣下瀏覽本網站時自動收集。',
      },
      {
        heading: '收集及使用個人資料的目的',
        text: '收集的個人資料將用於以下目的：\n(a) 回覆及處理閣下的查詢；\n(b) 提供閣下所要求的服務資訊；\n(c) 根據閣下輸入的構思生成 AI 原型規劃；\n(d) 改善本網站的內容、功能及使用體驗；\n(e) 分析網站流量及使用情況，以優化服務質素；\n(f) 履行適用法律及監管要求。\n提供上述個人資料屬自願性質；惟如閣下未有提供姓名及電子郵箱地址等必要資料，本公司將無法回覆閣下的查詢。',
      },
      {
        heading: 'Cookie 及網站分析工具',
        text: '本網站使用 Google Analytics（GA4）分析網站使用情況，該工具會透過 Cookie 收集匿名的瀏覽數據。閣下可透過瀏覽器設定拒絕或刪除 Cookie，惟此舉可能影響本網站部分功能的正常運作。\n有關 Google Analytics 的私隱政策，請參閱 Google 的相關說明。',
      },
      {
        heading: '第三方披露及服務供應商',
        text: '本公司不會出售閣下的個人資料。除下列情況外，本公司不會向第三方披露閣下的個人資料：\n(a) 為營運網站、處理查詢、傳送電郵、網站分析及 AI 原型規劃而使用的服務供應商（包括 Cloudflare、Google Analytics 及 OpenRouter），該等供應商僅為提供相關服務而處理資料；\n(b) 法律、法規或政府機關要求；\n(c) 已取得閣下的明確同意。\nAI 原型規劃的構思內容會傳送至 OpenRouter 及其所路由的模型供應商。由於上述服務供應商的伺服器可能位於香港以外地區，資料有可能被傳送至香港以外的司法管轄區處理。',
      },
      {
        heading: '資料的保留期限',
        text: '個人資料將僅於達成收集目的所需的期間內保留，其後將被安全刪除或匿名化處理，惟法律另有規定或本公司有合理業務需要保留者除外。',
      },
      {
        heading: '資料保安',
        text: '本公司已採取合理可行的技術及行政保安措施（包括傳輸加密及存取權限管理），保障個人資料免受未經授權或意外的查閱、處理、刪除或其他使用。',
      },
      {
        heading: '查閱及更正個人資料的權利',
        text: '根據《個人資料（私隱）條例》，閣下有權查閱及要求更正本公司持有關於閣下的個人資料。如欲提出查閱或更正請求，請透過本網站的查詢表格與本公司聯絡，本公司將於合理時間內回覆。',
      },
      {
        heading: '未成年人的個人資料',
        text: '本網站及服務主要面向企業客戶，並非為兒童而設。本公司不會在知情的情況下故意收集未成年人的個人資料。',
      },
      {
        heading: '本政策的修訂',
        text: '本公司可能因應法律要求或業務需要不時修訂本私隱政策，最新版本將於本網站發佈。建議閣下定期查閱本頁面，以了解最新內容。',
      },
      {
        heading: '查詢方式',
        text: '如對本私隱政策有任何疑問，或欲行使閣下的個人資料權利，請透過本網站的查詢表格與 GrowHub Limited 聯絡。\n地址：21/F., Kam Fung Commercial Building, 2-4 Tin Lok Lane, Wanchai, Hong Kong',
      },
    ],
  },
  footer: {
    explore: '瀏覽',
    company: '公司',
    tagline: '先做出來，再談。由 0 初期費用的原型開始。',
    contactKicker: 'CONTACT',
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
    capabilities: 'Tech',
    approach: 'AI Development',
    works: 'How we work',
    company: 'Company',
    contact: 'Contact',
    menu: 'Open menu',
    close_menu: 'Close menu',
    skip_to_content: 'Skip to main content',
  },
  meta: {
    home_title: 'GrowHub — Hong Kong Software Studio | Zero-Cost Prototypes・Web・App・AI',
    home_desc:
      'Build first, then talk. GrowHub is a Hong Kong software studio that starts every project with a zero-upfront-cost, AI-driven prototype — then shapes the service around something you can actually touch. Web apps & services, websites, and mobile apps.',
    contact_title: 'Contact | GrowHub',
    privacy_title: 'Privacy Policy | GrowHub',
    thanks_title: 'Thank You | GrowHub',
  },
  hero: {
    badge: 'Hong Kong · Software Studio',
    title_line1: 'Start with a ',
    title_highlight: 'working prototype',
    title_line2: ' — zero upfront cost.',
    subtitle:
      'We build something real first, AI-driven and fast. Then, looking at a working prototype together, we decide what problem your service should solve — and what it should become. Flexible and quick, we turn your first step into a solid one.',
    cta_primary: 'Get in touch',
    cta_secondary: 'See how we work',
    stats: [
      { value: 'HK$0', label: 'Upfront-cost prototype' },
      { value: 'Days', label: 'To something working' },
      { value: '2019', label: 'Founded in HK' },
    ],
  },
  services: {
    kicker: 'SERVICES',
    title: 'What we do',
    subtitle: 'End-to-end software development, from idea to operation.',
    previous: 'Previous service',
    next: 'Next service',
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
  serviceDetail: {
    kicker: 'SERVICE',
    back: 'Back to all services',
    learnMore: 'Learn more',
    deliverablesTitle: 'What we can build',
    suitableTitle: 'A good fit when you',
    processKicker: 'PROTOTYPE FIRST',
    processTitle: 'See a working prototype first',
    processIntro:
      'We do not ask you to lock every requirement at the start. We use AI to build a working prototype quickly, then refine the direction together around something tangible.',
    ctaTitle: 'Have an idea, but not a full brief?',
    ctaText:
      'You do not need a finished specification. Tell us what you want to improve, and we will start by making it tangible.',
    ctaButton: 'Start a free consultation',
    items: {
      'web-app-development': {
        title: 'Web App & Service Development',
        summary:
          'From business ideas to SaaS, membership platforms, and internal tools, we design and build web services that can grow with you.',
        deliverables: [
          'SaaS and subscription products',
          'Booking and membership systems',
          'Internal business tools',
          'APIs and third-party integrations',
        ],
        suitableFor: [
          'Want to digitize a manual workflow',
          'Need to validate a new service idea',
          'Have a system that is difficult to scale or maintain',
        ],
      },
      'website-production': {
        title: 'Website Production & Management',
        summary:
          'From information architecture and UI/UX to development and continuous improvement, we create websites built for brand clarity, speed, and outcomes.',
        deliverables: [
          'Corporate websites',
          'Service and product sites',
          'Multilingual websites',
          'SEO and continuous improvement',
        ],
        suitableFor: [
          'Your website does not explain your value clearly',
          'You need to reach Hong Kong, Japan, or global audiences',
          'You want to improve results after launch',
        ],
      },
      'app-development': {
        title: 'App Development',
        summary:
          'From interface design and prototypes to iOS and Android release and maintenance, we help put a real mobile service in users’ hands.',
        deliverables: [
          'iOS and Android apps',
          'Cross-platform applications',
          'Backend systems and APIs',
          'Release and maintenance support',
        ],
        suitableFor: [
          'Need notifications, camera, or location features',
          'Want to support both iOS and Android',
          'Need to validate the user flow with a prototype first',
        ],
      },
      'ai-development': {
        title: 'AI-Driven Development',
        summary:
          'We bring LLMs, RAG, and automation into real business workflows while using AI to improve the speed and quality of product development itself.',
        deliverables: [
          'Generative AI features',
          'Enterprise knowledge search and RAG',
          'Workflow automation',
          'AI development workflow adoption',
        ],
        suitableFor: [
          'Want to add AI to an existing service',
          'Need to make internal knowledge usable',
          'Want faster delivery without lowering the quality bar',
        ],
      },
    },
  },
  capabilities: {
    kicker: 'CAPABILITIES',
    title: 'Our tech stack',
    subtitle: 'The core technologies we build with.',
    groups: [
      { name: 'Frontend', items: ['React', 'Next.js', 'Astro', 'TypeScript', 'Tailwind CSS'] },
      { name: 'Backend', items: ['Node.js', 'Python', 'Go', 'REST / GraphQL', 'PostgreSQL'] },
      { name: 'Mobile', items: ['React Native', 'Swift', 'Kotlin', 'Flutter'] },
      {
        name: 'Cloud & DevOps',
        items: ['AWS', 'Cloudflare', 'Docker', 'CI/CD', 'Cloudflare Pages'],
      },
      { name: 'AI', items: ['LLM integration', 'RAG', 'AI-assisted dev', 'Automation'] },
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
    note: 'This AI-driven capability is what makes our zero-cost prototyping possible. We also offer consulting on adopting AI workflows.',
  },
  works: {
    kicker: 'PROTOTYPE FIRST',
    title: 'Build first, then talk.',
    subtitle:
      'Conversations start around something real — not a spec document. Here is how a project begins with a zero-cost prototype.',
    free_badge: 'HK$0',
    free_note:
      'From consultation to a working prototype and our proposals — steps 1–3 are all zero upfront cost. See something real before deciding on full development.',
    steps: [
      {
        title: 'Free consultation',
        desc: 'No pitch deck needed. Just tell us what you want to build — even if it is still fuzzy.',
      },
      {
        title: 'AI-driven prototype (HK$0)',
        desc: 'We build a working prototype in days, AI-driven, at zero upfront cost.',
      },
      {
        title: 'Talk over the real thing',
        desc: 'Together we explore the prototype and pin down the problem worth solving — and the shape of the service.',
      },
      {
        title: 'Full development',
        desc: 'Once the direction is clear, we move straight into full development — flexible and fast. If it does not click, you can simply stop here.',
      },
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
        date: '25 Jul 2026',
        title: 'We renewed our corporate website',
        desc: 'We have renewed our corporate website with a fresh design and a modern technology stack. Thank you for your continued support.',
      },
      {
        date: '17 Apr 2019',
        title: 'Corporate registration completed',
        desc: 'We completed our corporate registration on 17 April 2019. Thank you sincerely to everyone who has supported us.',
      },
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Frequently asked questions',
    subtitle: 'Common questions about our "build first, then talk" way of working.',
    items: [
      {
        q: 'Is it really zero upfront cost? How far is free?',
        a: 'Yes. The free consultation, the AI-driven working prototype, and our proposal (steps ①–③) are all zero upfront cost. You decide whether to move into full development only after seeing something real.',
      },
      {
        q: 'How soon can I see something working?',
        a: 'Depending on scope, a working prototype can be ready in a matter of days. We deliberately keep the first step fast and light so you see results early.',
      },
      {
        q: 'What kinds of projects can you take on?',
        a: 'Web apps and SaaS, website production and operation, iOS / Android mobile apps, and AI-driven development — end to end, from idea to launch and beyond.',
      },
      {
        q: 'You use a lot of AI — is quality reliable?',
        a: 'We pair AI-assisted coding, review and testing with engineer oversight, so quality stays dependable even at high speed. AI accelerates the work; it does not replace review.',
      },
      {
        q: 'What if the prototype is not a fit — can I stop?',
        a: 'Absolutely. If the direction does not feel right after seeing the prototype, you can stop there with no full-development cost. Validate first, invest later.',
      },
      {
        q: 'Which languages and regions do you support?',
        a: 'We are based in Hong Kong and work in English, Traditional Chinese and Japanese, collaborating remotely with clients in Hong Kong and overseas.',
      },
    ],
  },
  strengths: {
    kicker: 'JAPAN × HONG KONG',
    title: "Japan's engineering, delivered in Hong Kong",
    subtitle:
      "Development is handled by Japanese engineers. Through collaboration with Japanese companies and Japan's cutting-edge AI, we bring Japan-grade craft to your project — right here in Hong Kong.",
    items: [
      {
        title: 'Japanese engineers on the build',
        desc: 'From requirements to implementation, Japanese engineers do the work with careful communication and Japan-grade quality standards, keeping misalignment to a minimum.',
      },
      {
        title: 'Partnered with Japanese companies',
        desc: 'We work alongside Japanese partner firms, bringing proven technology, a solid delivery setup, and the latest Japanese know-how to every project.',
      },
      {
        title: "Powered by Japan's advanced AI",
        desc: 'Some of the most advanced AI is hard to access from Hong Kong. We tap Japan’s technology and environment to bring it into development — pairing speed with quality.',
      },
    ],
  },
  flow: {
    kicker: 'AI DEVELOPMENT FLOW',
    title: 'How we actually build with AI',
    subtitle:
      'Track records are hard to judge from the outside — so we show how we work instead. AI runs through every stage, letting a small team ship fast and reliably.',
    engine: 'AI runs through every stage — accelerating and automating',
    steps: [
      {
        title: 'Discovery & design',
        desc: 'We put your idea into words together and draft the spec in one go.',
        ai: 'AI structures requirements and drafts specs',
      },
      {
        title: 'AI-driven prototyping',
        desc: 'A working prototype in days — we discuss with something you can actually touch.',
        ai: 'AI generates the initial UI and code fast',
      },
      {
        title: 'Review & iterate',
        desc: 'Adjust direction on the spot while looking at the real thing — no wasted build.',
        ai: 'AI surfaces improvements and alternatives',
      },
      {
        title: 'Build & test',
        desc: 'Engineers safeguard quality as we move steadily into full development.',
        ai: 'AI pair-programming, code review, automated tests',
      },
      {
        title: 'Ship & operate',
        desc: 'Launch is not the end — we measure and keep improving.',
        ai: 'AI streamlines CI/CD, monitoring and iteration',
      },
    ],
    speed: {
      title: 'Why it is fast',
      traditional: 'Traditional development',
      traditionalValue: 'weeks+',
      ai: 'AI-driven development',
      aiValue: 'days+',
      note: 'Same quality bar, every stage compressed with AI — which is exactly why a zero-upfront-cost prototype is possible.',
    },
  },
  demo: {
    kicker: 'TRY IT NOW',
    title: 'Experience it before you believe it',
    subtitle:
      'Describe your idea and AI drafts a prototype plan on the spot — a miniature of the zero-upfront-cost prototype we start every project with.',
    placeholder: 'e.g. A booking and membership app for a small shop',
    examples: [
      'Restaurant online booking',
      'Membership app for a personal trainer',
      'A resale marketplace',
    ],
    button: 'Generate a prototype plan',
    loading: 'AI is sketching your prototype…',
    disclaimer:
      'A rough AI-generated sketch for reference. Do not enter personal, confidential, or sensitive data; input is sent to an external AI service.',
    errors: {
      empty: 'Please describe your idea first.',
      failed: 'Generation failed. Please try again in a moment.',
      notConfigured: 'The demo is not enabled yet (AI service configuration required).',
    },
    result: {
      heading: 'A prototype plan drafted by AI',
      features: 'Core features',
      screens: 'Key screens',
      stack: 'Suggested stack',
      nextStep: 'If we prototyped first',
      cta: 'Talk to us about this plan',
      again: 'Try another idea',
    },
  },
  contactCta: {
    title: 'Why not see something working before you decide?',
    subtitle:
      'Start with a zero-upfront-cost prototype — or just talk to us about web, app, or AI development.',
    button: 'Contact us',
    points: ['Zero upfront cost', 'A prototype in days', 'Flexible and fast'],
  },
  contact: {
    kicker: 'CONTACT',
    title: 'Contact',
    subtitle: 'Fill in the form below and we will get back to you soon.',
    name: 'Name',
    company: 'Company (optional)',
    email: 'E-mail',
    content: 'Message',
    submit: 'Submit',
    sending: 'Sending…',
    privacy_note: 'By submitting, you agree to our privacy policy.',
    errors: {
      name: 'Please enter your name.',
      email: 'Please enter a valid e-mail address.',
      content: 'Please enter a message.',
      turnstile: 'Please complete the verification.',
      generic: 'Something went wrong. Please try again.',
    },
  },
  thanks: {
    title: 'Thank you',
    subtitle: 'Thank you for reaching out.',
    desc: 'Your message has been received. Our team will get back to you shortly.',
    back: 'Back to home',
  },
  privacy: {
    title: 'Privacy Policy',
    subtitle:
      'GrowHub Limited (the "Company") is committed to complying with the Hong Kong Personal Data (Privacy) Ordinance (Cap. 486) and to protecting your personal data privacy. Please read this Privacy Policy carefully before using this website.',
    body: [
      {
        heading: 'Scope',
        text: 'This Privacy Policy applies to personal data you provide to the Company through this website (growhub.com.hk). It explains how the Company collects, uses, stores, and protects that data, and sets out the rights available to you.',
      },
      {
        heading: 'Personal Data We Collect',
        text: 'Through the contact form, we collect: your name, company name (if provided), e-mail address, and the content of your message. When you use the AI prototype planner demo, we also process the idea you enter; please do not enter personal, confidential, or sensitive information.\nIn addition, this website uses analytics tools that may automatically collect non-identifying information such as browser type, device information, IP address (anonymised), and browsing behaviour.',
      },
      {
        heading: 'How We Collect Personal Data',
        text: 'Personal data is primarily collected when you voluntarily submit the contact form. Browsing data is collected automatically via cookies and similar technologies while you use this website.',
      },
      {
        heading: 'Purposes of Collection and Use',
        text: 'Personal data collected is used for the following purposes:\n(a) responding to and handling your enquiry;\n(b) providing information about services you have requested;\n(c) generating an AI prototype plan from the idea you enter;\n(d) improving the content, functionality, and usability of this website;\n(e) analysing website traffic and usage to improve our services; and\n(f) complying with applicable laws and regulatory requirements.\nProvision of personal data is voluntary; however, if you do not provide the necessary information (such as your name and e-mail address), we will not be able to respond to your enquiry.',
      },
      {
        heading: 'Cookies and Website Analytics',
        text: 'This website uses Google Analytics (GA4) to analyse website usage, which collects anonymised browsing data via cookies. You may decline or delete cookies through your browser settings, although doing so may affect certain functions of this website.\nFor more information on how Google handles data, please refer to the Google Analytics privacy policy.',
      },
      {
        heading: 'Disclosure to Third Parties and Service Providers',
        text: 'We do not sell your personal data. We do not disclose your personal data to third parties except:\n(a) to service providers that help us operate this website, process enquiries, deliver email, provide analytics, and generate AI prototype plans (including Cloudflare, Google Analytics, and OpenRouter), who process data to provide those services;\n(b) where required by law, regulation, or government authority; or\n(c) with your explicit consent.\nIdeas entered in the AI prototype planner are sent to OpenRouter and the model provider it routes the request to. As these service providers’ servers may be located outside Hong Kong, data may be transferred to and processed in jurisdictions outside Hong Kong.',
      },
      {
        heading: 'Data Retention',
        text: 'Personal data is retained only for as long as necessary to fulfil the purposes for which it was collected, after which it is securely deleted or anonymised, unless a longer retention period is required by law or for legitimate business purposes.',
      },
      {
        heading: 'Data Security',
        text: 'We have implemented reasonable and practicable technical and administrative security measures, including encryption in transit and access controls, to protect personal data against unauthorised or accidental access, processing, erasure, or other use.',
      },
      {
        heading: 'Access and Correction Rights',
        text: 'Under the Personal Data (Privacy) Ordinance, you have the right to request access to, and correction of, personal data we hold about you. To make such a request, please contact us via the contact form on this website; we will respond within a reasonable time.',
      },
      {
        heading: "Children's Privacy",
        text: 'This website and our services are directed at business customers and are not intended for children. We do not knowingly collect personal data from minors.',
      },
      {
        heading: 'Changes to This Policy',
        text: 'We may update this Privacy Policy from time to time to reflect legal requirements or changes to our business. The latest version will be published on this website. We encourage you to review this page periodically.',
      },
      {
        heading: 'Contact Us',
        text: 'If you have any questions about this Privacy Policy, or wish to exercise your rights regarding your personal data, please contact GrowHub Limited via the contact form on this website.\nAddress: 21/F., Kam Fung Commercial Building, 2-4 Tin Lok Lane, Wanchai, Hong Kong',
      },
    ],
  },
  footer: {
    explore: 'Explore',
    company: 'Company',
    tagline: 'Build first, then talk. Starting with zero-cost prototypes.',
    contactKicker: 'CONTACT',
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
    capabilities: '技術',
    approach: 'AI開発',
    works: '進め方',
    company: '会社概要',
    contact: 'お問い合わせ',
    menu: 'メニューを開く',
    close_menu: 'メニューを閉じる',
    skip_to_content: 'メインコンテンツへ移動',
  },
  meta: {
    home_title: 'GrowHub — 香港のソフトウェア開発会社 | 初期費用0円のプロトタイプ開発',
    home_desc:
      '悩む前に、作る。GrowHubは、初期費用0円・AIドリブンのプロトタイプ開発から始める香港のソフトウェア開発会社です。できたものをベースに、解決すべき課題とつくるべきサービスを一緒に固めます。Webアプリ・サービス開発、Web制作・運用、アプリ開発に対応。',
    contact_title: 'お問い合わせ | GrowHub',
    privacy_title: 'プライバシーポリシー | GrowHub',
    thanks_title: 'お問い合わせ完了 | GrowHub',
  },
  hero: {
    badge: '香港・ソフトウェア開発',
    title_line1: '初期費用0円で、',
    title_highlight: '動くプロトタイプ',
    title_line2: 'から始める。',
    subtitle:
      'まずはAIドリブンで“動くもの”を形に。できたものを見ながら、どんな課題を解決するサービスにするかを一緒に決めていきます。柔軟に、スピーディに——あなたのはじめの一歩を、確かな一歩に。',
    cta_primary: '無料で相談する',
    cta_secondary: '進め方を見る',
    stats: [
      { value: '¥0', label: '初期費用プロトタイプ' },
      { value: '数日', label: '最短で“動くもの”まで' },
      { value: '2019', label: '香港で設立' },
    ],
  },
  services: {
    kicker: 'SERVICES',
    title: '私たちのサービス',
    subtitle: '企画から開発、運用まで。ソフトウェア開発をワンストップで。',
    previous: '前のサービス',
    next: '次のサービス',
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
  serviceDetail: {
    kicker: 'SERVICE',
    back: 'サービス一覧へ戻る',
    learnMore: '詳しく見る',
    deliverablesTitle: '対応できること',
    suitableTitle: 'こんな課題に向いています',
    processKicker: 'PROTOTYPE FIRST',
    processTitle: 'まず、動くプロトタイプを見る',
    processIntro:
      '最初からすべての仕様を決める必要はありません。AIを活用して短期間で動く原型をつくり、実物を見ながら一緒に方向を磨きます。',
    ctaTitle: 'アイデアはあるけれど、企画書はまだ？',
    ctaText:
      '完成した仕様書は必要ありません。改善したいことを聞かせてください。まず形にするところから始めます。',
    ctaButton: '無料で相談する',
    items: {
      'web-app-development': {
        title: 'Webアプリ・サービス開発',
        summary:
          '事業アイデアからSaaS、会員システム、社内ツールまで、成長に合わせて拡張できるWebサービスを設計・開発します。',
        deliverables: [
          'SaaS・サブスクリプションサービス',
          '予約・会員管理システム',
          '業務用の社内ツール',
          'API・外部サービス連携',
        ],
        suitableFor: [
          '手作業の業務をデジタル化したい',
          '新しいサービスの仮説を検証したい',
          '既存システムの拡張や保守に課題がある',
        ],
      },
      'website-production': {
        title: 'Web制作・運用',
        summary:
          '情報設計・UI/UX・開発から公開後の改善まで、ブランド、表示速度、成果を両立するWebサイトを制作します。',
        deliverables: [
          'コーポレートサイト',
          'サービス・プロダクトサイト',
          '多言語サイト',
          'SEO・継続的な改善',
        ],
        suitableFor: [
          'サービスの価値がサイトで伝わっていない',
          '香港・日本・海外へ情報を届けたい',
          '公開後も成果を継続的に改善したい',
        ],
      },
      'app-development': {
        title: 'アプリ開発',
        summary:
          '画面設計とプロトタイプからiOS・Androidの公開、保守まで、実際に使われるモバイルサービスを形にします。',
        deliverables: [
          'iOS・Androidアプリ',
          'クロスプラットフォームアプリ',
          'バックエンド・API',
          'ストア公開・保守支援',
        ],
        suitableFor: [
          '通知・カメラ・位置情報を活用したい',
          'iOSとAndroidの両方に対応したい',
          'まずプロトタイプで操作性を検証したい',
        ],
      },
      'ai-development': {
        title: 'AIを活用した開発',
        summary:
          'LLM、RAG、自動化を実際の業務へ組み込みながら、プロダクト開発そのものの速度と品質もAIで高めます。',
        deliverables: [
          '生成AI機能',
          '社内ナレッジ検索・RAG',
          '業務フロー自動化',
          'AI開発フローの導入支援',
        ],
        suitableFor: [
          '既存サービスへAIを組み込みたい',
          '社内に蓄積した知識を活用したい',
          '品質を保ちながら開発を速めたい',
        ],
      },
    },
  },
  capabilities: {
    kicker: 'CAPABILITIES',
    title: '技術スタック',
    subtitle: '私たちがプロダクトを形にする主な技術です。',
    groups: [
      {
        name: 'フロントエンド',
        items: ['React', 'Next.js', 'Astro', 'TypeScript', 'Tailwind CSS'],
      },
      { name: 'バックエンド', items: ['Node.js', 'Python', 'Go', 'REST / GraphQL', 'PostgreSQL'] },
      { name: 'モバイル', items: ['React Native', 'Swift', 'Kotlin', 'Flutter'] },
      {
        name: 'クラウド & DevOps',
        items: ['AWS', 'Cloudflare', 'Docker', 'CI/CD', 'Cloudflare Pages'],
      },
      { name: 'AI', items: ['LLM連携', 'RAG', 'AI活用開発', '自動化'] },
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
    note: 'この開発体制があるから、初期費用0円のプロトタイプ開発が可能になります。AI開発フロー導入のご相談・伴走支援も承っています。',
  },
  works: {
    kicker: 'PROTOTYPE FIRST',
    title: '悩む前に、作る。',
    subtitle:
      '会話の起点は、企画書ではなく“できたもの”。初期費用0円のプロトタイプから始める、私たちの進め方です。',
    free_badge: '0円',
    free_note:
      'ヒアリングから“動くプロトタイプ”の開発、ご提案まで——ステップ①〜③はすべて初期費用0円。実物を見てから、本開発に進むか判断いただけます。',
    steps: [
      {
        title: '無料相談',
        desc: '企画書は不要です。やりたいこと・モヤモヤを、そのまま聞かせてください。',
      },
      {
        title: 'AIドリブンで試作（0円）',
        desc: 'AIを活用し、最短数日で“動くプロトタイプ”を初期費用0円で開発します。',
      },
      {
        title: 'できたものを見ながら対話',
        desc: '実際に触りながら、解決すべき課題とサービスの形を一緒に見極めます。',
      },
      {
        title: '本開発へ',
        desc: '方向が定まったら、そのまま柔軟・高速に本開発へ。ピンと来なければ、ここで終了でも構いません。',
      },
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
        date: '2026/07/25',
        title: 'コーポレートサイトをリニューアルしました',
        desc: 'この度、コーポレートサイトをデザイン・技術スタックともに一新いたしました。今後とも変わらぬご愛顧を賜りますようお願い申し上げます。',
      },
      {
        date: '2019/04/17',
        title: '法人登記が完了しました',
        desc: '2019年4月17日付けで法人登記が完了いたしました。支援していただいた皆様、誠にありがとうございます。',
      },
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'よくあるご質問',
    subtitle: '「悩む前に、作る」進め方について、よくいただく質問をまとめました。',
    items: [
      {
        q: '本当に初期費用0円ですか？どこまで無料ですか？',
        a: 'はい。無料相談、AI駆動の動くプロトタイプ開発、ご提案（①〜③）まですべて初期費用0円です。実物を見てから、本開発に進むかを判断いただけます。',
      },
      {
        q: '最短でどのくらいで「動くもの」を見られますか？',
        a: '規模によりますが、最短数日で動くプロトタイプをお出しできます。最初の一歩をあえて速く軽く作り、早く成果を見ていただきます。',
      },
      {
        q: 'どんな案件に対応できますか？',
        a: 'Webアプリ・SaaS、Webサイト制作と運用、iOS / Android アプリ、AI駆動開発まで。構想から公開・運用まで一貫して対応します。',
      },
      {
        q: 'AIを多用して品質は大丈夫ですか？',
        a: 'AIによるコーディング・レビュー・テスト支援に加え、エンジニアが必ず確認するため、高速でも品質を保てます。AIは加速の道具で、確認を省くものではありません。',
      },
      {
        q: 'プロトタイプが合わなければ途中でやめられますか？',
        a: 'もちろんです。プロトタイプを見て方向性が合わないと感じたら、そこで止めても本開発費用は発生しません。まず確認、投資は後、が私たちの原則です。',
      },
      {
        q: '対応言語・地域は？',
        a: '香港拠点で、日本語・英語・繁体字に対応。リモートで香港および海外のお客様と協働します。',
      },
    ],
  },
  strengths: {
    kicker: 'JAPAN × HONG KONG',
    title: '日本の技術力を、香港の現場へ',
    subtitle:
      '開発は日本人エンジニアが担当。日本企業との協業と日本の先端AIを活かし、香港にいながら日本品質のものづくりをお届けします。',
    items: [
      {
        title: '日本人エンジニアが担当',
        desc: '要件のすり合わせから実装まで、日本人エンジニアが丁寧に対応。認識のズレを抑え、日本仕込みの品質基準で仕上げます。',
      },
      {
        title: '日本企業との協業',
        desc: '日本のパートナー企業と連携し、確かな技術と開発体制で対応。日本のノウハウと最新動向をプロジェクトに還元します。',
      },
      {
        title: '日本の先端AIを活用',
        desc: '一部の最先端AIは香港では利用が難しいのが実情。私たちは日本の技術・環境を通じてそれらを開発に取り入れ、スピードと品質を両立させます。',
      },
    ],
  },
  flow: {
    kicker: 'AI DEVELOPMENT FLOW',
    title: 'AIをどう開発に使っているか',
    subtitle:
      '実績は外から見えにくいもの。だから私たちは「どう作っているか」を公開します。各工程でAIを活かし、少人数でも速く・確かに仕上げます。',
    engine: 'AIが全工程を貫き、加速・自動化します',
    steps: [
      {
        title: '要件整理・設計',
        desc: 'やりたいことを一緒に言語化し、仕様の叩き台まで一気に。',
        ai: 'AIで要点を構造化・仕様草案を生成',
      },
      {
        title: 'AI駆動プロトタイピング',
        desc: '最短数日で“動くもの”を用意。触れる状態で議論します。',
        ai: 'AIでUI・コードの初期実装を高速生成',
      },
      {
        title: 'レビュー & 反復',
        desc: '実物を見ながらその場で方向を調整。ムダな作り込みを防ぎます。',
        ai: 'AIで改善案・代替案を素早く提示',
      },
      {
        title: '実装・テスト',
        desc: 'エンジニアが品質を担保しつつ、着実に本開発へ。',
        ai: 'AIペアプロ・コードレビュー・自動テスト',
      },
      {
        title: 'リリース・運用',
        desc: '公開して終わりではなく、計測しながら継続改善。',
        ai: 'CI/CD・監視・改善サイクルをAIで効率化',
      },
    ],
    speed: {
      title: 'なぜ速いのか',
      traditional: '従来型の開発',
      traditionalValue: '数週間〜',
      ai: 'AI駆動開発',
      aiValue: '数日〜',
      note: '同じ品質基準でも、AIで各工程を圧縮。だから初期費用0円のプロトタイプ提供が可能です。',
    },
  },
  demo: {
    kicker: 'TRY IT NOW',
    title: '信じる前に、体験してください',
    subtitle:
      'アイデアを入力すると、AIがその場でプロトタイプ構成案を提案します。私たちの「初期費用0円プロトタイプ」の縮図です。',
    placeholder: '例: 小さな店舗向けの予約・会員アプリ',
    examples: [
      '飲食店のネット予約',
      'パーソナルトレーナーの会員アプリ',
      'フリマ・二次流通サービス',
    ],
    button: 'プロトタイプ構成を生成',
    loading: 'AIがプロトタイプを考えています…',
    disclaimer:
      '※ AIによる参考案です。個人情報・機密情報・センシティブな情報は入力しないでください。入力内容は外部AIサービスへ送信されます。',
    errors: {
      empty: 'まずはアイデアを入力してください。',
      failed: '生成に失敗しました。少し時間をおいて再度お試しください。',
      notConfigured: 'デモは未有効化です（AIサービスの設定が必要です）。',
    },
    result: {
      heading: 'AIが提案したプロトタイプ構成',
      features: '主な機能',
      screens: '主な画面',
      stack: '技術スタック案',
      nextStep: 'まず作るなら',
      cta: 'この構成で相談する',
      again: '別のアイデアで試す',
    },
  },
  contactCta: {
    title: 'まずは、“動くもの”を見てから決めませんか？',
    subtitle: '初期費用0円のプロトタイプ開発から。Web・アプリ・AI開発のご相談も歓迎です。',
    button: 'お問い合わせ',
    points: ['初期費用0円', '最短数日でプロトタイプ', '柔軟・スピード対応'],
  },
  contact: {
    kicker: 'CONTACT',
    title: 'お問い合わせ',
    subtitle: 'こちらのフォームよりお問い合わせください。折り返しご連絡いたします。',
    name: 'お名前',
    company: '会社名（任意）',
    email: 'メールアドレス',
    content: 'お問い合わせ内容',
    submit: '送信する',
    sending: '送信中…',
    privacy_note: '送信することで、プライバシーポリシーに同意したものとみなします。',
    errors: {
      name: 'お名前を入力してください。',
      email: '有効なメールアドレスを入力してください。',
      content: 'お問い合わせ内容を入力してください。',
      turnstile: '認証を完了してください。',
      generic: 'エラーが発生しました。時間をおいて再度お試しください。',
    },
  },
  thanks: {
    title: 'お問い合わせ完了',
    subtitle: 'お問い合わせありがとうございます。',
    desc: 'お問い合わせを受け付けました。担当より折り返しご連絡いたします。しばらくお待ちください。',
    back: 'ホームへ戻る',
  },
  privacy: {
    title: 'プライバシーポリシー',
    subtitle:
      'GrowHub Limited（以下「当社」といいます）は、香港の個人資料（隠私）条例（第486章）を遵守し、お客様の個人情報保護に努めています。本サイトのご利用前に、本プライバシーポリシーをご確認ください。',
    body: [
      {
        heading: '適用範囲',
        text: '本プライバシーポリシーは、お客様が本サイト（growhub.com.hk）を通じて当社に提供する個人情報に適用され、当社による個人情報の収集・利用・保管・保護の方法、およびお客様が行使できる権利について定めるものです。',
      },
      {
        heading: '収集する個人情報の種類',
        text: 'お問い合わせフォームからは、お名前・会社名（任意）・メールアドレス・お問い合わせ内容を収集します。AIプロトタイプ構成デモをご利用の場合は、入力されたアイデアも処理します。個人情報・機密情報・センシティブな情報は入力しないでください。\nまた、本サイトではアクセス解析ツールを利用しており、ブラウザの種類、デバイス情報、IPアドレス（匿名化処理済み）、閲覧行動など、個人を直接特定しない情報を自動的に取得する場合があります。',
      },
      {
        heading: '収集方法',
        text: '個人情報は、主にお客様がお問い合わせフォームに任意でご入力いただくことで収集します。閲覧データは、Cookie等の技術を用いて、本サイトのご利用時に自動的に収集されます。',
      },
      {
        heading: '収集・利用目的',
        text: '取得した個人情報は、以下の目的で利用します。\n(a) お問い合わせへの対応・回答\n(b) ご要望に応じたサービス情報のご案内\n(c) 入力されたアイデアに基づくAIプロトタイプ構成案の生成\n(d) 本サイトのコンテンツ・機能・利便性の改善\n(e) アクセス状況の分析によるサービス品質の向上\n(f) 適用される法令・規制の遵守\nこれらの情報提供は任意ですが、お名前・メールアドレス等の必要情報をご提供いただけない場合、お問い合わせへの回答ができません。',
      },
      {
        heading: 'Cookie・アクセス解析ツールについて',
        text: '本サイトでは、Google アナリティクス（GA4）を用いてアクセス状況を分析しており、同ツールはCookieを通じて匿名化された閲覧データを収集します。ブラウザの設定によりCookieの拒否・削除が可能ですが、その場合、本サイトの一部機能が正常に動作しない可能性があります。\nGoogleによるデータの取り扱いについては、Googleアナリティクスのプライバシーポリシーをご参照ください。',
      },
      {
        heading: '第三者提供・業務委託について',
        text: '当社はお客様の個人情報を第三者に販売することはありません。以下の場合を除き、個人情報を第三者に開示することはありません。\n(a) 本サイトの運営、お問い合わせ処理、メール送信、アクセス解析、AIプロトタイプ構成案の生成を支援する委託先（Cloudflare、Google Analytics、OpenRouter等）。これらの委託先は、各サービスの提供に必要な範囲で情報を取り扱います。\n(b) 法令・規制または政府機関からの要請がある場合\n(c) お客様本人の同意がある場合\nAIプロトタイプ構成デモへ入力したアイデアは、OpenRouterおよびOpenRouterがルーティングするモデル提供者へ送信されます。上記委託先のサーバーは香港域外に所在する場合があるため、情報が香港域外で処理される可能性があります。',
      },
      {
        heading: '保有期間',
        text: '個人情報は、収集目的の達成に必要な期間に限り保有し、その後は安全に削除または匿名化処理を行います。ただし、法令により保存が求められる場合、または正当な業務上の必要がある場合はこの限りではありません。',
      },
      {
        heading: '安全管理措置',
        text: '当社は、通信の暗号化やアクセス権限の管理など、合理的かつ実行可能な技術的・組織的安全対策を講じ、個人情報への不正アクセス・漏えい・改ざん・その他の不正利用を防止します。',
      },
      {
        heading: '開示・訂正請求への対応',
        text: '個人資料（隠私）条例に基づき、お客様は当社が保有するご自身の個人情報の開示および訂正を請求する権利を有します。ご請求の際は、本サイトのお問い合わせフォームよりご連絡ください。当社は合理的な期間内に対応いたします。',
      },
      {
        heading: '未成年者の情報について',
        text: '本サイトおよび当社サービスは法人のお客様を主な対象としており、児童を対象としたものではありません。当社が未成年者の個人情報を意図的に収集することはありません。',
      },
      {
        heading: '本ポリシーの変更',
        text: '当社は、法令の改正や事業内容の変更等に応じて、本プライバシーポリシーを予告なく変更する場合があります。最新の内容は本サイトに掲載いたしますので、定期的にご確認ください。',
      },
      {
        heading: 'お問い合わせ窓口',
        text: '本プライバシーポリシーに関するご質問、または個人情報に関する権利行使をご希望の場合は、本サイトのお問い合わせフォームより GrowHub Limited までご連絡ください。\n住所：21/F., Kam Fung Commercial Building, 2-4 Tin Lok Lane, Wanchai, Hong Kong',
      },
    ],
  },
  footer: {
    explore: 'サイトを見る',
    company: '会社情報',
    tagline: '悩む前に、作る。初期費用0円のプロトタイプから。',
    contactKicker: 'CONTACT',
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
