# growhub-mailer

Standalone Cloudflare Worker that emails the contact-form submission via Email
Routing. The site's Pages Function (`/api/contact`) calls it through a `MAILER`
Service binding — the Worker needs no public route.

## Per-directory Cloudflare account

`wrangler deploy` targets whatever account it is authenticated to, so this
folder pins its own account to avoid deploying to the wrong one:

1. **`wrangler.toml` → `account_id`** pins the target account (the Growhub
   account that owns `growhub.com.hk`, Email Routing and the Pages project).
2. **`.env` → `CLOUDFLARE_API_TOKEN`** authenticates as that account. wrangler
   auto-loads `.env` from this directory, so deploys from here always use this
   token — independent of `wrangler login`. Copy `.env.example` → `.env` and
   paste a token scoped to the Growhub account.

Together they mean: `cd worker/mailer && npx wrangler deploy` always deploys to
the Growhub account, while other projects can pin their own account elsewhere.

> If your single `wrangler login` already has access to the Growhub account, the
> `account_id` pin alone is enough (the token step is optional but makes the
> account explicit and login-independent).

## Deploy

```sh
cd worker/mailer
npx wrangler whoami          # confirm access to the pinned account
npx wrangler deploy
```

After deploying, **disable the public `workers.dev` route**
(Workers & Pages → growhub-mailer → Settings → Domains & Routes) so the Worker
is only reachable through the Pages `MAILER` Service binding.

## Configuration

- `[[send_email]] SEND_EMAIL` → `destination_address` must be a **verified**
  Email Routing destination.
- `[vars] CONTACT_FROM / CONTACT_TO` → sender (on the zone) / recipient.

The Pages side needs a Service binding `MAILER → growhub-mailer` and a redeploy.
