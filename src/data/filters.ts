export type FilterPriority = 'main' | 'extra';
export type FilterRecommended = 'recommended' | null;

export interface FilterBlock {
  url: string;
  emoji: string;
  name: string;
  tagline: string;
  priority: FilterPriority;
  recommended?: FilterRecommended;
  summary: string;
  blocks: string[];
  notBlocks?: string[];
  audience: string;
  accent: string; // tailwind gradient stops
}

export const FILTERS: FilterBlock[] = [
  {
    url: 'https://raw.githubusercontent.com/drknvpn/ublockorigin/refs/heads/main/RuNoAds.txt',
    emoji: '🩷',
    name: 'RuNoAds',
    tagline: 'Основной фильтр для RU',
    priority: 'main',
    summary:
      'Базовый список фильтров для блокировки рекламы на русскоязычных сайтах. Оптимизирован для работы с Яндекс, Mail.ru, VK и MAX. Содержит 17 000+ правил для повседневного использования.',
    blocks: [
      'Рекламные баннеры на Яндекс, Mail.ru, VK, OK',
      'Всплывающие окна на новостных порталах',
      'Социальные виджеты и кнопки «Поделиться»',
      'Рекламные блоки в результатах поиска',
      'Лишние элементы интерфейса на маркетплейсах',
    ],
    audience: 'Для всех пользователей, которые хотят убрать рекламу на русских сайтах.',
    accent: 'from-sky-400/30 to-cyan-300/10',
  },
  {
    url: 'https://raw.githubusercontent.com/drknvpn/ublockorigin/refs/heads/main/EvilTube.txt',
    emoji: '📲',
    name: 'EvilTube',
    tagline: 'С Shorts',
    priority: 'extra',
    summary:
      'Дополнительный список фильтров для YouTube, который оставляет раздел Shorts активным, но убирает остальную рекламу и мусор в интерфейсе. Идеально для тех, кто любит смотреть Shorts.',
    blocks: [
      'Рекламные баннеры на странице YouTube',
      'Элементы «Купить Premium» и подобные',
      'Лишние виджеты в интерфейсе',
      'Всплывающие окна',
    ],
    notBlocks: ['Shorts (остаются активными)'],
    audience: 'Для тех, кто любит смотреть Shorts, но хочет убрать остальную рекламу.',
    accent: 'from-violet-400/30 to-fuchsia-300/10',
  },
  {
    url: 'https://raw.githubusercontent.com/drknvpn/ublockorigin/refs/heads/main/EvilTubeNoShorts.txt',
    emoji: '📱',
    name: 'EvilTubeNoShorts',
    tagline: 'Без Shorts (Рекомендуется)',
    priority: 'extra',
    recommended: 'recommended',
    summary:
      'Дополнительный список фильтров для YouTube, который полностью убирает раздел Shorts из интерфейса. Видео-реклама и баннеры остаются под контролем основного списка.',
    blocks: [
      'Раздел Shorts на главной странице',
      'Кнопка Shorts в боковом меню',
      'Короткие видео в ленте рекомендаций',
      'Вкладка Shorts на каналах',
    ],
    audience: 'Для тех, кто не смотрит Shorts и хочет убрать их из интерфейса.',
    accent: 'from-emerald-400/30 to-teal-300/10',
  },
];

export interface ExtensionLink {
  name: string;
  store: string;
  url: string;
}

export interface ExtensionInfo {
  id: string;
  name: string;
  emoji: string;
  description: string;
  links: ExtensionLink[];
}

export const EXTENSIONS: ExtensionInfo[] = [
  {
    id: 'ublock',
    name: 'uBlock Origin',
    emoji: '📕',
    description:
      'Эффективный блокировщик рекламы с открытым исходным кодом. Минимальная нагрузка на память и процессор.',
    links: [
      { name: 'Chrome Web Store', store: 'Chrome', url: 'https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm' },
      { name: 'Firefox Add-ons', store: 'Mozilla', url: 'https://addons.mozilla.org/firefox/addon/ublock-origin/' },
      { name: 'Opera Add-ons', store: 'Opera', url: 'https://addons.opera.com/extensions/details/ublock-origin/' },
      { name: 'Edge Add-ons', store: 'Edge', url: 'https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejbsdiegeqjfhcmm' },
    ],
  },
  {
    id: 'adguard',
    name: 'AdGuard',
    emoji: '📗',
    description:
      'Мощный блокировщик рекламы и трекеров с гибкими настройками фильтров и поддержкой кастомных списков.',
    links: [
      { name: 'Chrome Web Store', store: 'Chrome', url: 'https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgnkllg' },
      { name: 'Firefox Add-ons', store: 'Mozilla', url: 'https://addons.mozilla.org/firefox/addon/adguard-adblocker/' },
      { name: 'Opera Add-ons', store: 'Opera', url: 'https://addons.opera.com/extensions/details/adguard-adblocker/' },
      { name: 'Edge Add-ons', store: 'Edge', url: 'https://microsoftedge.microsoft.com/addons/detail/adguard-adblocker-mv3/pkclgpgemlfigkhlclhholmkbgbhbofc' },
    ],
  },
];
