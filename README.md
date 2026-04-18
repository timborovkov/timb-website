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

### No cookie banner — how

The site uses [Google Consent Mode v2](https://developers.google.com/tag-platform/security/guides/consent) with all storage denied by default:

```js
gtag("consent", "default", {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
});
```

With `analytics_storage` denied, GA4 sends **cookieless pings** — no `_ga*` cookies, no persistent client-side identifiers, IPs truncated. Under GDPR/ePrivacy this is generally treated as not requiring prior consent, so no banner is needed.

The trade-off: data is aggregated rather than per-user. You lose session stitching and user journeys but keep visit counts, referrers, geo, device, and custom events.

### What's tracked

- **Pageviews** — automatic, including client-side route changes (via GA4 Enhanced Measurement).
- **Referrers, country, device** — automatic via GA4.
- **`outbound_click`** — custom event fired on every social icon click and the cal.com CTA. Parameters:
  - `link_label` — human-readable name (e.g. `X`, `LinkedIn`, `Schedule a call (CTA)`)
  - `link_url` — destination URL
  - `link_type` — one of `email`, `social`, `cal`

### Verifying it works

1. Open the site in a fresh Incognito window with DevTools open.
2. **Application → Cookies**: there should be no `_ga*` cookies (confirms cookieless mode).
3. **Network → filter `collect`**: a request fires on page load. Click a social icon or the cal.com CTA and a second request fires — expand the payload to see `en=outbound_click` and the `link_label`.
4. In GA4 → Reports → Realtime, your visit appears within ~30s. The Events tab lists `outbound_click` with a breakdown by `link_label`.

### If you outgrow cookieless mode

Cookieless gives aggregates, not per-user journeys. When that starts to hurt, options in order of least intrusive:

- Switch to a privacy-first alternative that doesn't need consent: [Plausible](https://plausible.io), [Vercel Analytics](https://vercel.com/analytics), or [Fathom](https://usefathom.com).
- Add a real consent banner and flip consent mode to granted after opt-in.
