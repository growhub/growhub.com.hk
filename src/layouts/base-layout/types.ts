import type { Locale } from '@i18n/ui';

export interface BaseLayoutProps {
  lang: Locale;
  /** Canonical path without locale prefix, e.g. "/" or "/contact". */
  route: string;
  title: string;
  description: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

export interface AlternateLink {
  hreflang: string;
  href: string;
}
