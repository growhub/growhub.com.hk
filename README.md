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
| ホスティング | Netlify（`netlify.toml` / Netlify Forms） |

## 🚀 開発

```sh
npm install      # 依存関係のインストール
npm run dev      # 開発サーバー起動 (http://localhost:4321)
npm run build    # 本番ビルド (dist/ に出力)
npm run preview  # ビルド結果のプレビュー
```

## 🌐 多言語 (i18n)

- 対応言語: `zh-hk`（デフォルト・URL プレフィックス無し）/ `en`（`/en/…`）/ `ja`（`/ja/…`）
- 表示テキストはすべて `src/i18n/ui.ts` の辞書に集約。文言の追加・修正はこのファイルで行います。
- 各言語のルートは `src/pages/`, `src/pages/en/`, `src/pages/ja/` の薄いラッパで、本体は
  `src/components/pages/*.astro`（`lang` prop を受け取る共有コンポーネント）に集約しています。

### ページ構成（1 ページ LP + 補助ページ）

- `/` … トップ（Hero / Services / AI開発 / 開発フロー / 会社概要 / News / Contact CTA）
- `/contact` … お問い合わせ（Netlify Forms）
- `/contact/thanks` … 送信完了
- `/policy/privacy` … プライバシーポリシー
- `/404`

## 🎨 デザイン

明るく先進的な **Aurora**（白ベース＋紫〜シアン〜ピンクのソフトグラデーション）を採用しています。

配色は `src/styles/global.css` の CSS カスタムプロパティで管理し、`:root[data-theme='…']`
として **light / aurora / dusk / dark** の 4 パレットを用意しています。現在の適用テーマは
`src/layouts/BaseLayout.astro` の `THEME` 定数（既定: `'aurora'`）で切り替えられます。将来的に
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
  command = "npm run build"
  publish = "dist"
```

環境変数（任意）:

| 変数名 | 説明 |
| --- | --- |
| `SITE_URL` | サイトのベース URL。sitemap / canonical / OG に利用（既定: `https://www.growhub.com.hk`） |

### Cloudflare Pages への移行メモ

静的サイトのため、ホスティング依存は **`netlify.toml`** と **お問い合わせフォームのバックエンド** に限定されます。

1. Cloudflare Pages でビルドコマンド `npm run build` / 出力ディレクトリ `dist` を設定
2. お問い合わせフォームは Netlify Forms が使えなくなるため、
   [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/) か
   外部フォームサービス（Formspree 等）へ差し替え（`ContactForm.astro` の `action` / 属性を変更）
3. `_redirects` / `_headers` が必要な場合は `public/` に配置

## License

MIT
