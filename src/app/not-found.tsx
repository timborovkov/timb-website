import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg text-muted">Page not found.</p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
      >
        Back home
      </Link>
    </main>
  );
}
