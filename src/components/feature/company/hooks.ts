import { getDict, type Locale } from '@i18n/ui';
import type { CompanyRow } from './types';

/** Pair each company-info label with its value for the current locale. */
export function buildCompanyRows(lang: Locale): CompanyRow[] {
  const { labels, values } = getDict(lang).company;
  return [
    { label: labels.name, value: values.name },
    { label: labels.ceo, value: values.ceo },
    { label: labels.foundation, value: values.foundation },
    { label: labels.address, value: values.address },
  ];
}
