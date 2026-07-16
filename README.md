# GrowHub Limited — Corporate Site

香港のソフトウェア開発会社 **GrowHub Limited** のコーポレートサイトです。
**Astro + React + Tailwind CSS v4** で構築された、繁体字 (zh-hk) / 英語 (en) / 日本語 (ja) の 3 言語対応の静的サイトです。

## 技術スタック

| 項目 | 採用技術 |
| --- | --- |
| フレームワーク | [Astro](https://astro.build) v5（静的出力 `output: 'static'`） |
| UI / islands | [React](https://react.dev) 19（`@astrojs/react`） |
| スタイル | [Tailwind CSS](https://tailwindcss.com) v4（`@tailwindcss/vite`） |
| 多言語 | Astro 標準 i18n ルーティング（`src/i18n/ui.ts` に辞書を集約） |
| SEO | hreflang alternate + `@astrojs/sitemap` |
| フォント | Sora（見出し・ロゴ）+ Inter（本文）/ CJK はシステムフォント |
| パッケージ管理 | [pnpm](https://pnpm.io)（`pnpm-workspace.yaml`） |
| Lint / Format | [Biome](https://biomejs.dev)（`biome.json`） |
| ホスティング | Netlify（`netlify.toml` / Netlify Forms） |

## 🚀 開発

パッケージ管理は **pnpm** です（`package.json` の `packageManager` で pnpm を固定。
Corepack 有効時は `corepack enable` で自動的に同じバージョンが使われます）。

```sh
pnpm install     # 依存関係のインストール
pnpm dev         # 開発サーバー起動 (http://localhost:4321)
pnpm build       # 本番ビルド (dist/ に出力)
pnpm preview     # ビルド結果のプレビュー
pnpm check       # Biome で lint + format を自動修正
pnpm lint        # Biome で lint（修正なし）
pnpm test        # Vitest でユニットテスト実行
```

### サプライチェーン対策（pnpm）

`pnpm-workspace.yaml` で **公開から 7 日未満のパッケージをインストールしない**設定
（`minimumReleaseAge: 10080`）を有効にしています。新規追加された悪意あるパッケージ／
乗っ取りバージョンを踏むリスクを軽減します。`onlyBuiltDependencies` で postinstall の実行を
許可する依存（esbuild / sharp）も明示しています。

## 🌐 多言語 (i18n)

- 対応言語: `zh-hk`（デフォルト・URL プレフィックス無し）/ `en`（`/en/…`）/ `ja`（`/ja/…`）
- 表示テキストはすべて `src/i18n/ui.ts` の辞書に集約。文言の追加・修正はこのファイルで行います。
- 各言語のルートは `src/pages/`, `src/pages/en/`, `src/pages/ja/` の薄いラッパで、本体は
  `src/components/page/*`（`lang` prop を受け取る共有コンポーネント）に集約しています。

## 🧩 ディレクトリ構成・コンポーネント規約

ファイル名は **kebab-case**。コンポーネントは 1 つのフォルダにまとめ、役割ごとにファイルを分けます。

```
src/components/
  ui/        # 汎用 UI（header / footer / lang-switcher / mobile-nav）
  feature/   # ページのセクション（hero / services / ai-approach / works /
             #                       company / news / contact-cta / contact-form）
  page/      # ページ合成（home-page / contact-page / privacy-page / thanks-page）
```

各フォルダ内のファイルの役割:

| ファイル | 役割 |
| --- | --- |
| `<name>.astro` / `<name>.tsx` | コンポーネント本体 |
| `index.ts` | 公開 API（`export { default }` + 型の再エクスポート） |
| `types.ts` | 型定義（Props など） |
| `constants.ts` | 定数（アイコンパス・クラス文字列など） |
| `hooks.ts` | ロジック（純関数、または React フック）。**必ず `hooks.test.ts` を用意** |

- `.astro` は React フックを持てないため、`hooks.ts` は「テスト可能な純ロジックの `.ts`」として
  扱います（例: `header/hooks.ts` の `buildNavLinks`）。`mobile-nav` のみ React フック
  （`useMobileNav`）です。
- `constants.ts` / `hooks.ts` は**ロジックがある場合のみ**作成します。
- テストは **[Vitest](https://vitest.dev)**。`pnpm test` で実行します（`hooks.ts` には必ずテスト）。
- レイアウトは `src/layouts/base-layout/`、i18n 辞書は `src/i18n/ui.ts`（`ui.test.ts` あり）。
- import エイリアス: `@ui/*` `@feature/*` `@page/*` `@layouts/*` `@i18n/*`（`tsconfig.json` /
  `vitest.config.ts`）。

### ページ構成（1 ページ LP + 補助ページ）

- `/` … トップ（Hero / Services / AI開発 / 開発フロー / 会社概要 / News / Contact CTA）
- `/contact` … お問い合わせ（Netlify Forms）
- `/contact/thanks` … 送信完了
- `/policy/privacy` … プライバシーポリシー
- `/404`

## 🎨 デザイン

明るく先進的な **Aurora**（白ベース＋紫〜シアン〜ピンクのソフトグラデーション）を採用しています。

- **フォント**: 見出し・ロゴは **Sora**、本文は **Inter**（`src/styles/global.css` の
  `--font-display` / `--font-sans`）。繁体字・日本語はシステムフォントにフォールバックします。
- **ロゴ**: 単色ワードマーク（`.logo` クラス）。`--logo-color` を `var(--color-brand)` に
  変えるとブランドカラーのロゴにできます。

配色は CSS カスタムプロパティで管理し、`:root[data-theme='…']` として
**light / aurora / dusk / dark** の 4 パレットを用意しています。現在の適用テーマは
`src/layouts/base-layout/constants.ts` の `THEME` 定数（既定: `'aurora'`）で切り替えられます。将来的に
light/dark トグルを追加する場合も、この仕組みをそのまま利用できます。

> 注: 色トークンは Tailwind の `@theme` ではなく `:root` に定義しています。`--color-base` の
> ような名前を `@theme` に置くと、Tailwind 標準の `text-base`（フォントサイズ）ユーティリティと
> 衝突するためです。各コンポーネントは `var(--color-*)` 経由で参照します。

## 📮 お問い合わせフォーム（Netlify Forms）

`src/components/ContactForm.astro` の静的 HTML フォーム（`data-netlify="true"` + hidden
`form-name` + ハニーポット `bot-field`）を Netlify がビルド時に自動検出します。送信後は各言語の
`/…/contact/thanks` へリダイレクトされます。

## ☁️ デプロイ

### Netlify（現行）

`netlify.toml`:

```toml
[build]
  command = "pnpm build"
  publish = "dist"
```

Netlify は `pnpm-lock.yaml` を検出して pnpm を有効化し、`packageManager` のバージョンを
Corepack 経由で使用します。

環境変数（任意）:

| 変数名 | 説明 |
| --- | --- |
| `SITE_URL` | サイトのベース URL。sitemap / canonical / OG に利用（既定: `https://www.growhub.com.hk`） |
| `PUBLIC_GA_ID` | Google Analytics 4 の測定 ID（`G-XXXXXXXXXX`）。設定時のみ、かつ本番ビルドで `gtag.js` を読み込みます。未設定ならタグは出力されません |

### Cloudflare Pages への移行メモ

静的サイトのため、ホスティング依存は **`netlify.toml`** と **お問い合わせフォームのバックエンド** に限定されます。

1. Cloudflare Pages でビルドコマンド `pnpm build` / 出力ディレクトリ `dist` を設定
2. お問い合わせフォームは Netlify Forms が使えなくなるため、
   [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/) か
   外部フォームサービス（Formspree 等）へ差し替え（`ContactForm.astro` の `action` / 属性を変更）
3. `_redirects` / `_headers` が必要な場合は `public/` に配置

## License

MIT
