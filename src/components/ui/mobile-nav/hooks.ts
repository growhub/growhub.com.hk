import { useCallback, useEffect, useState } from 'react';

export interface UseMobileNav {
  open: boolean;
  toggle: () => void;
  close: () => void;
}

/**
 * Drawer open/close state for the mobile navigation.
 * Locks body scroll while open and closes on the Escape key.
 */
export function useMobileNav(): UseMobileNav {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return { open, toggle, close };
}
