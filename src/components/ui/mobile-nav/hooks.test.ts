import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { useMobileNav } from './hooks';

afterEach(() => {
  document.body.style.overflow = '';
});

describe('useMobileNav', () => {
  it('starts closed', () => {
    const { result } = renderHook(() => useMobileNav());
    expect(result.current.open).toBe(false);
  });

  it('toggles open and closed', () => {
    const { result } = renderHook(() => useMobileNav());
    act(() => result.current.toggle());
    expect(result.current.open).toBe(true);
    act(() => result.current.toggle());
    expect(result.current.open).toBe(false);
  });

  it('close() forces closed', () => {
    const { result } = renderHook(() => useMobileNav());
    act(() => result.current.toggle());
    act(() => result.current.close());
    expect(result.current.open).toBe(false);
  });

  it('locks body scroll while open and restores it on close', () => {
    const { result } = renderHook(() => useMobileNav());
    act(() => result.current.toggle());
    expect(document.body.style.overflow).toBe('hidden');
    act(() => result.current.close());
    expect(document.body.style.overflow).toBe('');
  });

  it('closes on the Escape key', () => {
    const { result } = renderHook(() => useMobileNav());
    act(() => result.current.toggle());
    expect(result.current.open).toBe(true);
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    });
    expect(result.current.open).toBe(false);
  });
});
