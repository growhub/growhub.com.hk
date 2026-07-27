import { createPortal } from 'react-dom';
import { useMobileNav } from './hooks';
import type { MobileNavProps } from './types';

function MenuIcon({ open = false }: { open?: boolean }) {
  const lineBase =
    'absolute left-1/2 h-[1.5px] -translate-x-1/2 rounded-full bg-current transition-[width,transform] duration-300 ease-out';

  return (
    <span className="relative block h-5 w-5" aria-hidden="true">
      <span
        className={`${lineBase} top-[6px] ${open ? 'w-5 translate-y-[3.5px] rotate-45' : 'w-5'}`}
      />
      <span
        className={`${lineBase} top-[13px] ${
          open ? 'w-5 -translate-y-[3.5px] -rotate-45' : 'w-3.5'
        }`}
      />
    </span>
  );
}

export default function MobileNav({
  links,
  contact,
  langLinks,
  menuLabel,
  closeLabel,
}: MobileNavProps) {
  const { open, toggle, close, triggerRef, dialogRef } = useMobileNav();

  // The full-screen overlay is portaled to <body> so a transformed/filtered
  // ancestor (e.g. the sticky header) can't trap its `position: fixed`.
  const overlay = open ? (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={menuLabel}
      className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-[color:var(--color-base)]"
    >
      {/* Close button — always visible at the top of the opaque overlay. */}
      <div className="flex shrink-0 justify-end px-4 py-3">
        <button
          type="button"
          aria-label={closeLabel}
          onClick={close}
          className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/80 text-[color:var(--color-ink)] shadow-[0_8px_24px_rgba(31,54,120,0.08)] backdrop-blur-sm transition-[color,border-color,background-color,box-shadow,transform] duration-200 hover:border-[color:var(--color-brand)]/35 hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-brand)] hover:shadow-[0_10px_28px_rgba(49,76,220,0.14)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand)]/30 focus-visible:ring-offset-2"
        >
          <MenuIcon open />
        </button>
      </div>
      <nav className="flex flex-1 flex-col items-center justify-center gap-5 px-8 py-8 text-center">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            className="group flex min-w-40 flex-col items-center rounded-xl px-5 py-1 transition-colors hover:bg-[color:var(--color-surface-2)]"
          >
            {l.eyebrow && (
              <span className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-brand-2)]">
                {l.eyebrow}
              </span>
            )}
            <span className="mt-0.5 text-xl font-semibold text-[color:var(--color-ink)] transition-colors group-hover:text-[color:var(--color-brand)]">
              {l.label}
            </span>
          </a>
        ))}
        <a
          href={contact.href}
          onClick={close}
          className="btn btn-primary mt-1 flex min-w-48 flex-col gap-0.5 py-3"
        >
          {contact.eyebrow && (
            <span className="font-[family-name:var(--font-display)] text-[9px] uppercase tracking-[0.2em] opacity-80">
              {contact.eyebrow}
            </span>
          )}
          <span className="text-base">{contact.label}</span>
        </a>

        <div className="mt-4 flex items-center gap-3 text-base">
          {langLinks.map((ll, i) => (
            <span key={ll.code} className="flex items-center gap-3">
              {i > 0 && <span className="text-[color:var(--color-ink-faint)]">/</span>}
              <a
                href={ll.href}
                className={
                  ll.active ? 'font-bold text-gradient' : 'text-[color:var(--color-ink-muted)]'
                }
              >
                {ll.label}
              </a>
            </span>
          ))}
        </div>
      </nav>
    </div>
  ) : null;

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={menuLabel}
        aria-expanded={open}
        onClick={toggle}
        className="group inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/70 text-[color:var(--color-ink)] shadow-[0_8px_24px_rgba(31,54,120,0.08)] backdrop-blur-sm transition-[color,border-color,background-color,box-shadow,transform] duration-200 hover:border-[color:var(--color-brand)]/35 hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-brand)] hover:shadow-[0_10px_28px_rgba(49,76,220,0.14)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand)]/30 focus-visible:ring-offset-2"
      >
        <MenuIcon open={open} />
      </button>

      {overlay && createPortal(overlay, document.body)}
    </div>
  );
}
