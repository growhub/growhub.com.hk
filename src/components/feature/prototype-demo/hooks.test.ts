import { describe, expect, it } from 'vitest';
import { normalizePlan } from './hooks';

describe('normalizePlan', () => {
  it('normalises a well-formed plan', () => {
    const plan = normalizePlan({
      appName: '  ShopBook  ',
      summary: 'A booking app.',
      features: ['Booking', 'Membership', '', 'Booking'],
      screens: ['Home', 'Booking'],
      stack: ['Astro', 'React'],
      nextStep: 'Build the booking flow.',
    });
    expect(plan).not.toBeNull();
    expect(plan?.appName).toBe('ShopBook');
    // empty + duplicate entries are dropped
    expect(plan?.features).toEqual(['Booking', 'Membership']);
  });

  it('caps array lengths', () => {
    const plan = normalizePlan({
      summary: 'x',
      features: Array.from({ length: 20 }, (_, i) => `f${i}`),
    });
    expect(plan?.features).toHaveLength(6);
  });

  it('tolerates missing/invalid fields', () => {
    const plan = normalizePlan({ summary: 'Just a summary' });
    expect(plan).toEqual({
      appName: '',
      summary: 'Just a summary',
      features: [],
      screens: [],
      stack: [],
      nextStep: '',
    });
  });

  it('returns null for unusable payloads', () => {
    expect(normalizePlan(null)).toBeNull();
    expect(normalizePlan('nope')).toBeNull();
    expect(normalizePlan({})).toBeNull();
    expect(normalizePlan({ appName: 'Only a name' })).toBeNull();
  });
});
