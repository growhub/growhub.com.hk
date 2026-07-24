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

- 対応言語: `en`（デフォルト・URL プレフィックス無し）/ `zh-hk`（`/zh-hk/…`）/ `ja`（`/ja/…`）
- 表示テキストはすべて `src/i18n/ui.ts` の辞書に集約。文言の追加・修正はこのファイルで行います。
- 各言語のルートは `src/pages/`, `src/pages/zh-hk/`, `src/pages/ja/` の薄いラッパで、本体は
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

## 🔎 SEO / AEO / GEO / LLMO

検索エンジンと生成AI・LLM の双方に向けた最適化を実装しています（いずれも実在の会社情報のみ）。

- **構造化データ (JSON-LD)**: 全ページに `ProfessionalService`（会社情報・所在地・設立・代表者・
  サービスの `OfferCatalog`）と `WebSite` を出力。`src/components/ui/structured-data`
  （`hooks.ts` にビルダー、`hooks.test.ts` でテスト）。
- **メタ**: 各ページ固有の title / description、canonical、`hreflang` alternates、
  `robots`、Open Graph（`og:image` 1200×630 バナー `public/og.png`、`og:locale` + alternates）、
  Twitter カード。
- **`llms.txt`** (`public/llms.txt`): LLM 向けにサイト概要・会社情報・サービス・技術スタックを
  Markdown で提供（[llmstxt.org](https://llmstxt.org/) 準拠）。
- **サイトマップ / robots**: `@astrojs/sitemap`（hreflang 付き）+ `public/robots.txt`。

> 次の一手（任意）: FAQ セクション + `FAQPage` 構造化データを追加すると、AEO（Answer Engine）/
> GEO でさらに効果的です。Q&A の内容が決まれば追加できます。

## 📮 お問い合わせフォーム（Pages Function → Worker → Email Routing）

`src/components/feature/contact-form` で実装。表示フォームは **React island**（`form.tsx`）で、
**[Zod](https://zod.dev) によるフロントエンドのバリデーション**（Name 必須 / Company 任意 /
E-mail 形式チェック / Message 必須）を行い、エラーは各言語のメッセージで表示します。
送信は **Cloudflare Pages Function**（`functions/api/contact.ts`）への AJAX（`fetch` で
`/api/contact` へ POST）で行い、成功後は各言語の `/…/contact/thanks` へ遷移します。
ボット対策として、見えない **ハニーポット**（`company_url`）と後述の **Turnstile サーバー検証** を備えます。

### メール送信（Worker + Email Routing）

**Cloudflare Pages Function は Email Routing の `send_email` バインディングを使えない**
（ビルドが `Configuration file for Pages projects does not support "send_email"` で失敗する）ため、
送信は独立した **`growhub-mailer` Worker**（`worker/mailer/`）が担当します。

```
フォーム → /api/contact (Pages Function) → [Service binding: MAILER] → growhub-mailer (Worker) → Email Routing → 受信箱
```

- Pages Function: 入力検証 + Turnstile サーバー検証 → `MAILER` サービスバインディング経由で Worker を呼ぶ。
- Worker (`worker/mailer/src/index.ts`): `[[send_email]]` バインディングで検証済み宛先へメール送信。
  送信元・宛先は `worker/mailer/wrangler.toml` の `[vars]` / `[[send_email]]` に定義。
- 送信メールは `Reply-To` に問い合わせ者のメールを設定するため、受信箱から**そのまま返信**できます。

Cloudflare 側の設定手順:

1. **Email Routing を有効化**（ゾーンを Cloudflare に載せ、競合する旧 MX/SPF を削除 → Activate）
2. **Destination Addresses** に受信用メール（例: Gmail）を追加し、確認メールで **検証**
3. Worker をデプロイ（宛先は `worker/mailer/wrangler.toml` を編集）:
   ```sh
   cd worker/mailer && npx wrangler deploy
   ```
   デプロイ後、`growhub-mailer` の **workers.dev ルートは無効化**（サービスバインディング専用にする）
4. Pages プロジェクトの **Settings → Bindings** で **Service binding** を追加:
   `MAILER` → `growhub-mailer`
5. （任意）`TURNSTILE_SECRET_KEY`（Secret）を設定するとサーバー側で Turnstile を検証
6. Pages を **Retry deployment** で再デプロイ

| 設定 | 場所 | 説明 |
| --- | --- | --- |
| `MAILER`（Service binding） | Pages | `growhub-mailer` Worker を指す |
| `[[send_email]] SEND_EMAIL` | Worker `wrangler.toml` | `destination_address` = 検証済み宛先 |
| `CONTACT_FROM` / `CONTACT_TO` | Worker `wrangler.toml` `[vars]` | 送信元 / 送信先 |
| `TURNSTILE_SECRET_KEY` | Pages（Secret・任意） | 設定時のみサーバー検証 |

### Cloudflare Turnstile（ボット対策）

`PUBLIC_TURNSTILE_SITE_KEY` を設定すると、送信ボタンの手前に
[Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) のウィジェットが表示され、
認証トークンが取得できるまで送信できません（トークンは `cf-turnstile-response` として
POST ペイロードに含めます）。**未設定の場合はウィジェットを描画せず、フォームは通常どおり動作**
します（ローカル開発ではキー無しでOK）。

Pages Function 側では、`TURNSTILE_SECRET_KEY` が設定されていれば
[Siteverify API](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)
で `cf-turnstile-response` を**サーバー検証**します。これによりフロントの抑止だけでなく、
サーバー側でも確実にボットを弾けます。

## 🤖 AI プロトタイプ・デモ（Workers AI）

トップの「TRY IT NOW」セクション（`src/components/feature/prototype-demo`）は、訪問者が
アイデアを入力すると **AI がその場でプロトタイプ構成案**（機能・画面・技術スタック・最初の一歩）
を返す、"動く証拠" のデモです。フロントは React island、生成は Pages Function
`functions/api/prototype.ts` が **Cloudflare Workers AI**（`@cf/meta/llama-3.1-8b-instruct`）で
行います。応答は防御的に正規化（`hooks.ts` / `hooks.test.ts`）してから描画します。

Cloudflare 側の設定:

1. Pages → **Settings → Bindings → Add → Workers AI**、Variable name = **`AI`**
2. **Retry deployment** で再デプロイ
3. （推奨）悪用・コスト対策として `/api/prototype` に **Rate Limiting ルール**を追加
   （例: 5 req/min/IP）。入力長は 500 文字、`max_tokens` は 900 に制限済み。

`AI` バインディング未設定時は Function が `503 not_configured` を返し、UI は
「デモは未有効化」を表示します（サイトの他機能には影響しません）。

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
| `SITE_URL` | サイトのベース URL。sitemap / canonical / OG に利用（既定: `https://growhub.com.hk`） |
| `PUBLIC_GA_ID` | Google Analytics 4 の測定 ID（`G-XXXXXXXXXX`）。設定時のみ、かつ本番ビルドで `gtag.js` を読み込みます。未設定ならタグは出力されません |
| `PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile のサイトキー。設定時のみお問い合わせフォームに Turnstile ウィジェットを表示します。未設定なら非表示（フォームは通常動作） |

### Cloudflare Pages への移行メモ

静的サイトのため、ホスティング依存は **`netlify.toml`** と **お問い合わせフォームのバックエンド** に限定されます。

1. Cloudflare Pages でビルドコマンド `pnpm build` / 出力ディレクトリ `dist` を設定
   （`functions/` ディレクトリは Cloudflare Pages が自動的に Functions として扱います）
2. お問い合わせフォームは **Pages Function → `growhub-mailer` Worker → Email Routing** で送信します。
   上記「お問い合わせフォーム」節の手順（Email Routing 有効化・宛先検証・Worker デプロイ・`MAILER`
   サービスバインディング）を設定すれば動作します。
3. **www → apex への 301 リダイレクト**（apex `growhub.com.hk` を canonical に統一）は、
   `Rules → Redirect Rules` で `Hostname equals www.growhub.com.hk` → `301`
   `concat("https://growhub.com.hk", http.request.uri.path)`（クエリ保持）を設定
4. `_redirects` / `_headers` が必要な場合は `public/` に配置

## License

MIT
