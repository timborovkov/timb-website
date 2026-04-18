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
