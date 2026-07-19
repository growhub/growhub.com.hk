import { describe, expect, it } from 'vitest';
import { defaultLocale, getDict, isLocale, localizePath } from './ui';

describe('localizePath', () => {
  it('returns "/" for the default-locale (en) home', () => {
    expect(localizePath('/', 'en')).toBe('/');
  });

  it('prefixes the home path for non-default locales', () => {
    expect(localizePath('/', 'zh-hk')).toBe('/zh-hk');
    expect(localizePath('/', 'ja')).toBe('/ja');
  });

  it('keeps sub-paths unprefixed for the default locale', () => {
    expect(localizePath('/contact', 'en')).toBe('/contact');
    expect(localizePath('/policy/privacy', 'en')).toBe('/policy/privacy');
  });

  it('prefixes sub-paths for non-default locales', () => {
    expect(localizePath('/contact', 'zh-hk')).toBe('/zh-hk/contact');
    expect(localizePath('/policy/privacy', 'ja')).toBe('/ja/policy/privacy');
  });

  it('strips a trailing slash', () => {
    expect(localizePath('/contact/', 'zh-hk')).toBe('/zh-hk/contact');
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
  it('is en', () => {
    expect(defaultLocale).toBe('en');
  });
});
