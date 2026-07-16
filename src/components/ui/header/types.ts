import type { Locale } from '@i18n/ui';

export interface HeaderProps {
  lang: Locale;
  route: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface LangLink {
  href: string;
  code: Locale;
  label: string;
  active: boolean;
}
