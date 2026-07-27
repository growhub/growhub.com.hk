import { type RefObject, useCallback, useEffect, useRef, useState } from 'react';

export interface UseMobileNav {
  open: boolean;
  toggle: () => void;
  close: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
  dialogRef: RefObject<HTMLDivElement | null>;
}

/**
 * Drawer open/close state for the mobile navigation.
 * Locks body scroll while open and closes on the Escape key.
 */
export function useMobileNav(): UseMobileNav {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
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
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    dialogRef.current?.querySelector<HTMLElement>('button, a[href]')?.focus();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return { open, toggle, close, triggerRef, dialogRef };
}
