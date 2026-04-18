import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_URL = process.env.NEXT_PUBLIC_SITE_URL;

export function proxy(request: NextRequest) {
  if (!CANONICAL_URL) return NextResponse.next();

  const canonical = new URL(CANONICAL_URL);
  const incomingHost = request.headers.get("host") || request.nextUrl.host;

  if (incomingHost === canonical.host) return NextResponse.next();

  // Build the target by mutating a canonical URL clone. Avoids the
  // `new URL(pathname, base)` form, which treats a pathname starting
  // with `//` as a protocol-relative reference and would switch hosts.
  const target = new URL(canonical.href);
  target.pathname = request.nextUrl.pathname;
  target.search = request.nextUrl.search;
  return NextResponse.redirect(target, 308);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|favicon-16.png|favicon-32.png|apple-touch-icon.png|robots.txt|sitemap.xml).*)",
  ],
};
