# timb.dev

Personal website for Tim Borovkov — entrepreneur & software engineer.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4
- [Framer Motion](https://www.framer.com/motion)

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Create a `.env.local` with:

```
NEXT_PUBLIC_SITE_URL=https://timb.dev
```

`NEXT_PUBLIC_SITE_URL` is the canonical home URL. It's used in two places:

- **Metadata** (`src/app/layout.tsx`) — drives `metadataBase`, `og:url`, `canonical`, and JSON-LD `url`.
- **Proxy** (`src/proxy.ts`) — any request whose host doesn't match this URL's host is 308-redirected to the same path/query on the canonical host.

Set the same variable in the production deploy env (e.g. Vercel project settings).

## Canonical domain redirects

The site is reachable via multiple domains (e.g. `timb.dev`, `www.timb.dev`, `borovkov.me`, `www.borovkov.me`). `src/proxy.ts` enforces a single canonical host — anything other than the host in `NEXT_PUBLIC_SITE_URL` is 308-redirected to the equivalent path on the canonical host.

Example: `https://www.borovkov.me/about-me?x=1` → `https://timb.dev/about-me?x=1`

To change the canonical domain, update `NEXT_PUBLIC_SITE_URL` in the deploy env — no code change needed. To add a new alias domain, just point its DNS at the deployment; the proxy will redirect it automatically.

> Next.js 16 renamed `middleware.ts` to `proxy.ts` (same API).

## Build

```bash
pnpm build
```

## Linting & Formatting

```bash
pnpm lint
pnpm format
pnpm format:check
```

## Analytics

Wired up via [`@next/third-parties`](https://nextjs.org/docs/app/guides/third-party-libraries#google-analytics) — the Next.js-blessed way to load `gtag.js`. The loader lives in [`src/app/layout.tsx`](src/app/layout.tsx); outbound-click events fire from [`src/components/social-icon.tsx`](src/components/social-icon.tsx) and the cal.com CTA in [`src/components/contact.tsx`](src/components/contact.tsx).

### Setup

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_GA_ID` to your GA4 measurement ID (starts with `G-`). Leave blank to disable analytics locally.
3. Set the same variable in your hosting dashboard (Vercel → Project → Settings → Environment Variables) for production.

If `NEXT_PUBLIC_GA_ID` is unset, no analytics scripts are loaded at all.

### Consent mode

The site uses [Google Consent Mode v2](https://developers.google.com/tag-platform/security/guides/consent) with analytics granted and ad storage denied by default:

```js
gtag("consent", "default", {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "granted",
});
```

This sets `_ga*` cookies and populates GA4 Realtime normally. Under GDPR/ePrivacy, analytics cookies technically require prior consent — so this setup is pragmatic, not strictly compliant. If that matters, add a banner and flip `analytics_storage` to `denied` until the user opts in, or switch to a privacy-first alternative: [Plausible](https://plausible.io), [Vercel Analytics](https://vercel.com/analytics), or [Fathom](https://usefathom.com).

### What's tracked

- **Pageviews** — automatic, including client-side route changes (via GA4 Enhanced Measurement).
- **Referrers, country, device** — automatic via GA4.
- **`outbound_click`** — custom event fired on every social icon click and the cal.com CTA. Parameters:
  - `link_label` — human-readable name (e.g. `X`, `LinkedIn`, `Schedule a call (CTA)`)
  - `link_url` — destination URL
  - `link_type` — one of `email`, `social`, `cal`

### Verifying it works

1. Open the site in a fresh Incognito window with DevTools open.
2. **Network → filter `collect`**: a request fires on page load. Click a social icon or the cal.com CTA and a second request fires — expand the payload to see `en=outbound_click` and the `link_label`.
3. In GA4 → Reports → Realtime, your visit appears within ~30s. The Events tab lists `outbound_click` with a breakdown by `link_label`.
