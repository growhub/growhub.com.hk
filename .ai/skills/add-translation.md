# Skill: add or change copy (i18n)

All user-facing text lives in `src/i18n/ui.ts`.

1. If adding a new field, extend the `Dict` interface first.
2. Fill the value for **every** locale object: `en`, `zhHK`, `ja`
   (the build fails on a missing key). English is the default (no URL prefix).
3. Write natural, idiomatic copy per language — not a literal translation.
   Keep the brand voice: "Build first, then talk." / zero-upfront-cost prototype.
4. For links use `localizePath('/path', lang)`. Section anchors resolve against
   the localized home (`/#services`, `/ja#services`).
5. Mind CJK line breaks — headings use `text-wrap: balance`, body
   `text-wrap: pretty` (set globally); avoid forcing manual breaks.
6. `pnpm test && pnpm build`.
