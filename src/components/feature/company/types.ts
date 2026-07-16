import type { Locale } from '@i18n/ui';

export interface CompanyProps {
  lang: Locale;
}

export interface CompanyRow {
  label: string;
  value: string;
}
