import { useMobileNav } from './hooks';
import type { MobileNavProps } from './types';

export default function MobileNav({ links, contact, langLinks }: MobileNavProps) {
  const { open, toggle, close } = useMobileNav();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        onClick={toggle}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--color-border)] text-[color:var(--color-ink)]"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[color:var(--color-base)]">
          {/* Close button — always visible at the top of the opaque overlay. */}
          <div className="flex shrink-0 justify-end p-3">
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-ink)]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-6 px-8 py-8 text-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="text-2xl font-semibold text-[color:var(--color-ink)] hover:text-gradient"
              >
                {l.label}
              </a>
            ))}
            <a href={contact.href} onClick={close} className="btn btn-primary mt-2 text-lg">
              {contact.label}
            </a>

            <div className="mt-6 flex items-center gap-3 text-lg">
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
      )}
    </div>
  );
}
