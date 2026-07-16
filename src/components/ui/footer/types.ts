import type { Locale } from '@i18n/ui';

export interface FooterProps {
  lang: Locale;
}

export interface FooterLink {
  href: string;
  label: string;
}
