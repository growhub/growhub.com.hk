import type { Locale } from '@i18n/ui';

export interface LangSwitcherProps {
  lang: Locale;
  /** Canonical path without locale prefix, e.g. "/" or "/contact". */
  route: string;
}

export interface LocaleLink {
  href: string;
  code: Locale;
  label: string;
  active: boolean;
}
