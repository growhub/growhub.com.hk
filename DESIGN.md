# GrowHub — Design System

The visual language of the GrowHub site. It is driven entirely by **CSS
variables** defined in `src/styles/global.css`, so switching the `data-theme`
attribute on `<html>` re-skins the whole site. The active theme is set by
`THEME` in `src/layouts/base-layout/base-layout.astro` (currently **`aurora`**).

Components must read these variables (`var(--color-*)` or arbitrary values like
`[color:var(--color-*)]`) — never hardcode colors.

---

## 1. Brand & voice

- **Positioning:** "Build first, then talk." — every project starts with a
  **zero-upfront-cost, AI-driven working prototype**, then the service is shaped
  around it.
- **Tone:** confident, concrete, friendly. Lead with the tangible ("動くもの" /
  "a working prototype") and the ¥0 / HK$0 offer.
- **Languages:** English (default), Traditional Chinese (zh-hk), Japanese (ja).

---

## 2. Color

Tokens live on `:root` (and `:root[data-theme="…"]`), **not** inside `@theme`
(a `--color-*` token there would shadow Tailwind's own utilities).

### Aurora (active — light, cool indigo→blue)

| Token                | Value      | Use                              |
| -------------------- | ---------- | -------------------------------- |
| `--color-base`       | `#f7f9ff`  | page background                  |
| `--color-surface`    | `#ffffff`  | cards, raised surfaces           |
| `--color-surface-2`  | `#eef2ff`  | alternating section tint, chips  |
| `--color-border`     | `#e4e9fb`  | hairline borders                 |
| `--color-ink`        | `#0f1b3d`  | primary text                     |
| `--color-ink-muted`  | `#4a5578`  | secondary text                   |
| `--color-ink-faint`  | `#8b95b5`  | captions, tertiary text          |
| `--color-brand`      | `#4f46e5`  | primary (indigo)                 |
| `--color-brand-2`    | `#0284c7`  | secondary (blue) — kickers       |
| `--color-accent`     | `#7c3aed`  | accent (violet)                  |

Other alternate palettes (`light`, `dark`, `dusk`) are defined in `global.css`
for future theming; keep any new component compatible with all of them by only
using the tokens above.

### Gradients

- **Brand gradient** (buttons, highlights): `linear-gradient(100deg,
  var(--color-brand), var(--color-brand-2))`.
- **Text gradient** (`.text-gradient`): cyan → indigo → accent, clipped to text.
  Used for kicker numbers and highlighted headline words.
- **Icon stroke gradient:** an inline `<linearGradient>` from `#0284c7` to
  `#4f46e5` referenced as `stroke="url(#…-grad)"`.

### Usage rules

- Kickers (section eyebrows): `--color-brand-2`, uppercase, `tracking-[0.2em]`.
- Never place text directly on the brand gradient except white button labels.
- Aim for AA contrast; body text uses `--color-ink` / `--color-ink-muted`.

---

## 3. Typography

Fonts load from Google Fonts in `base-layout`.

| Role            | Family                          | Notes                         |
| --------------- | ------------------------------- | ----------------------------- |
| Display / logo  | **Sora** (`--font-display`)     | geometric; headings, wordmark |
| Body / UI       | **Inter** (`--font-sans`)       | CJK falls back to Noto / Hiragino / JhengHei |

- Headings: `font-[family-name:var(--font-display)]`, `font-bold`,
  `tracking-tight`. Section titles `text-3xl sm:text-4xl`; hero `text-4xl
  sm:text-6xl`.
- Body: Inter, `leading-relaxed` for paragraphs.
- **CJK line-breaking:** headings use `text-wrap: balance`, paragraphs
  `text-wrap: pretty` (set globally in `global.css`) to avoid a lone trailing
  character/punctuation. Keep the highlighted headline span `inline-block` so it
  doesn't break mid-phrase.

---

## 4. Layout & spacing

- **Container:** `.container-x` — `max-width: 72rem`, centered,
  `padding-inline: 1.25rem`.
- **Section rhythm:** `py-20 sm:py-28`; anchor targets add `scroll-mt-20` (fixed
  header offset). News is tighter (`py-8 sm:py-12`).
- **Radius:** cards `1rem` (`.card`), large panels `rounded-3xl`, pills/buttons
  `9999px`.
- **Grid gaps:** `gap-5` for card grids.

### Visual rhythm (メリハリ)

The page alternates tone so it doesn't read flat:

`Hero (gradient tint) → Services (surface-2 tint) → Capabilities (base) →
AI-Driven (bold dark band) → Works (base) → Company (surface-2 tint) → News →
Contact CTA`

The **AI-Driven Development** band is the visual anchor: a deep navy→cyan
gradient (`#1e1b4b → #0f172a → #0c4a6e`) with white text, glass cards and a
stronger glow.

---

## 5. Components (utility classes in `global.css`)

- **`.card`** — surface, hairline border, soft shadow; hover lifts
  (`translateY(-4px)`) and brightens the border. Cover-image cards use
  `overflow-hidden p-0` with the image on top (`aspect-[16/10]` services,
  `aspect-[8/3]` capabilities) and padded content below.
- **`.btn` / `.btn-primary` / `.btn-ghost`** — pill buttons. Primary is the
  brand gradient with white text and a colored shadow; ghost is bordered.
- **`.glass`** — translucent surface + blur; used for the carousel arrows.
- **`.text-gradient`** — gradient-clipped text.
- **`.glow-bg`** — radial glow backdrop (`--glow-c*`); **`.grid-pattern`** — a
  faint masked grid.
- **`.reveal` / `.is-visible`** — scroll-in fade/slide (disabled under
  `prefers-reduced-motion`).
- **Chips/badges:** rounded-full, `--color-border` outline, `--color-ink-faint`
  text; the "¥0 / HK$0" badge uses the brand gradient with white text.

### Carousel (services)

Scroll-snap track, side-centered glass arrows, mouse **grab-to-scroll** (snap
disabled while dragging) and touch flick, **infinite loop** (item set tripled,
scroll silently recentered), autoplay that pauses on hover/focus/touch/drag and
only runs while on-screen.

---

## 6. Motion

- Transitions are short and eased (`0.2–0.7s`, `cubic-bezier(0.16,1,0.3,1)` for
  reveals). Hover: subtle lift + shadow.
- Always honor `prefers-reduced-motion: reduce` — reveals show instantly,
  autoplay is off, smooth scroll falls back to auto.

---

## 7. Iconography & imagery

- Icons are inline **stroke** SVGs (`stroke-width` ~1.6–2, round caps/joins),
  often stroked with the icon gradient.
- Section/card artwork is **abstract SVG placeholders** in the Cool palette
  (`public/images/…`) — swap for real artwork later; keep the same aspect ratios.

---

## 8. Accessibility

- Visible focus ring (`:focus-visible`) in `--color-brand-2`.
- Decorative images use empty `alt`; icons `aria-hidden`.
- Maintain AA contrast; the dark AI band uses white / `white/70` text.
- Respect reduced motion everywhere.

---

_Change tokens and shared classes in `src/styles/global.css`; document notable
changes here. Component/coding conventions live in [`.ai/`](./.ai/README.md)._
