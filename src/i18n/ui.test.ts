import { describe, expect, it } from 'vitest';
import { defaultLocale, getDict, isLocale, localizePath } from './ui';

describe('localizePath', () => {
  it('returns "/" for the default-locale home', () => {
    expect(localizePath('/', 'zh-hk')).toBe('/');
  });

  it('prefixes the home path for non-default locales', () => {
    expect(localizePath('/', 'en')).toBe('/en');
    expect(localizePath('/', 'ja')).toBe('/ja');
  });

  it('keeps sub-paths unprefixed for the default locale', () => {
    expect(localizePath('/contact', 'zh-hk')).toBe('/contact');
    expect(localizePath('/policy/privacy', 'zh-hk')).toBe('/policy/privacy');
  });

  it('prefixes sub-paths for non-default locales', () => {
    expect(localizePath('/contact', 'en')).toBe('/en/contact');
    expect(localizePath('/policy/privacy', 'ja')).toBe('/ja/policy/privacy');
  });

  it('strips a trailing slash', () => {
    expect(localizePath('/contact/', 'en')).toBe('/en/contact');
  });
});

describe('getDict', () => {
  it('returns the dictionary for each locale', () => {
    expect(getDict('en').nav.home).toBe('Home');
    expect(getDict('ja').nav.home).toBe('ホーム');
    expect(getDict('zh-hk').nav.home).toBe('首頁');
  });
});

describe('isLocale', () => {
  it('accepts supported locales', () => {
    expect(isLocale('en')).toBe(true);
    expect(isLocale('zh-hk')).toBe(true);
    expect(isLocale('ja')).toBe(true);
  });

  it('rejects everything else', () => {
    expect(isLocale('fr')).toBe(false);
    expect(isLocale('')).toBe(false);
    expect(isLocale(undefined)).toBe(false);
  });
});

describe('defaultLocale', () => {
  it('is zh-hk', () => {
    expect(defaultLocale).toBe('zh-hk');
  });
});
