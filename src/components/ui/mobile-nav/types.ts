import type { Locale } from '@i18n/ui';

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

export interface MobileNavProps {
  links: NavLink[];
  contact: NavLink;
  langLinks: LangLink[];
}
