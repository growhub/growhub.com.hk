import { describe, expect, it } from 'vitest';
import { buildCompanyRows } from './hooks';

describe('buildCompanyRows', () => {
  it('returns four label/value rows', () => {
    expect(buildCompanyRows('en')).toHaveLength(4);
  });

  it('pairs each label with its value', () => {
    const rows = buildCompanyRows('en');
    expect(rows[0]).toEqual({ label: 'Company', value: 'GrowHub Limited' });
  });

  it('is localized', () => {
    expect(buildCompanyRows('ja')[1].label).toBe('FOUNDER & CEO');
    expect(buildCompanyRows('zh-hk')[0].label).toBe('企業名稱');
  });
});
