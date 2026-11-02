import type { Metadata } from "next";
import Image from "next/image";
import { EMAIL } from "@/lib/constants";
import {
  DESCRIPTION,
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
  PAGE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  TITLE,
  TWITTER_IMAGE_URL,
} from "./content";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "Lineguard",
    "freight broker",
    "carrier invoice",
    "rate confirmation",
    "accessorials",
    "invoice audit",
    "accounts payable",
    "freight AP",
    "Tim Borovkov",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Lineguard",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE_URL,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: OG_IMAGE_ALT,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@timborovkov",
    creator: "@timborovkov",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: TWITTER_IMAGE_URL,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  alternates: {
    canonical: PAGE_URL,
  },
  icons: {
    icon: [{ url: "/lineguard/icon", type: "image/png" }],
    apple: [{ url: "/lineguard/apple-icon", sizes: "180x180", type: "image/png" }],
  },
};

const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Lineguard")}`;

const PROBLEMS = [
  "AP teams compare rate con, invoice and POD by hand — about 75 invoices per person per day.",
  "Detention, lumper and layover charges slip through.",
  "Small mismatches get waved through and leak margin, and accessorials paid to carriers often never get rebilled to shippers.",
];

const STEPS = [
  "Reads the carrier-invoice inbox.",
  "Matches each invoice to the load and rate con.",
  "Checks every line.",
  "Approves clean invoices, drafts disputes and rebills for your team to send.",
];

function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/lineguard/logo-mark.svg"
      alt=""
      width={64}
      height={72}
      unoptimized
      className={className}
    />
  );
}

export default function LineguardPage() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#0B1F33] focus:px-3 focus:py-2 focus:text-sm focus:text-[#F7F7F4]"
      >
        Skip to content
      </a>

      <header className="mx-auto flex max-w-2xl items-center px-6 pt-8 sm:pt-10">
        <a href="#content" className="flex items-center gap-2.5 rounded-sm">
          <LogoMark className="h-9 w-auto" />
          <span className="text-lg font-semibold tracking-tight text-[#0B1F33]">lineguard</span>
        </a>
      </header>

      <main id="content" className="mx-auto max-w-2xl px-6 pb-20">
        <section className="pt-16 sm:pt-24" aria-labelledby="lineguard-heading">
          <div className="flex items-center gap-3">
            <LogoMark className="h-12 w-auto sm:h-14" />
            <h1
              id="lineguard-heading"
              className="text-4xl font-semibold tracking-tight text-[#0B1F33] sm:text-5xl"
            >
              lineguard
            </h1>
          </div>

          <p className="mt-8 max-w-xl text-2xl font-medium leading-snug tracking-tight text-[#0B1F33] sm:text-3xl">
            Every carrier invoice, checked line by line.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#5B6B7C]">
            An AI agent that matches carrier invoices to rate confirmations and PODs, flags
            unapproved accessorials, duplicates and missed rebills, and drafts the disputes — before
            you pay.
          </p>
        </section>

        <section className="mt-20 sm:mt-28" aria-labelledby="problem-heading">
          <h2
            id="problem-heading"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B6B7C]"
          >
            The problem
          </h2>
          <ul className="mt-8 space-y-5">
            {PROBLEMS.map((item, i) => (
              <li key={item} className="flex gap-4 text-lg leading-relaxed text-[#0B1F33]">
                {i === 1 ? (
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-[#F5A524]" aria-hidden />
                ) : (
                  <span
                    className="mt-2 size-2.5 shrink-0 rounded-full bg-[#0B1F33]/25"
                    aria-hidden
                  />
                )}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20 sm:mt-28" aria-labelledby="how-heading">
          <h2
            id="how-heading"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B6B7C]"
          >
            How it works
          </h2>
          <ol className="mt-8 space-y-6">
            {STEPS.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#12B76A]/15 text-sm font-semibold text-[#12B76A]"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <p className="pt-1 text-lg leading-relaxed text-[#0B1F33]">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20 sm:mt-28" aria-labelledby="who-heading">
          <h2
            id="who-heading"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B6B7C]"
          >
            Who it&apos;s for
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-[#0B1F33]">
            Mid-size freight brokerages ($10–150M gross) — controllers, CFOs, carrier settlement/AP
            teams.
          </p>
        </section>

        <section
          className="mt-20 rounded-2xl border border-[#0B1F33]/10 bg-white/70 p-6 sm:mt-28 sm:p-8"
          aria-labelledby="exploring-heading"
        >
          <h2
            id="exploring-heading"
            className="text-xl font-semibold tracking-tight text-[#0B1F33]"
          >
            We&apos;re exploring, not selling
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5B6B7C]">
            I&apos;m talking to brokerage finance and AP teams to understand how you audit carrier
            invoices today. If this sounds familiar, I&apos;d love 20 minutes — and I&apos;m looking
            for a few design partners to build it with. Free retro-audit of your past loads, under
            NDA.
          </p>
        </section>

        <section className="mt-20 sm:mt-28" aria-labelledby="contact-heading">
          <h2
            id="contact-heading"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B6B7C]"
          >
            Talk to Tim
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-[#0B1F33]">
            Email{" "}
            <a
              href={MAILTO}
              className="font-medium text-[#0B1F33] underline decoration-[#12B76A] decoration-2 underline-offset-4 transition-colors hover:text-[#12B76A]"
            >
              {EMAIL}
            </a>{" "}
            or call{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              className="font-medium text-[#0B1F33] underline decoration-[#12B76A] decoration-2 underline-offset-4 transition-colors hover:text-[#12B76A]"
            >
              {PHONE_DISPLAY}
            </a>
            .
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={MAILTO}
              className="inline-flex items-center justify-center rounded-full bg-[#0B1F33] px-5 py-3 text-sm font-medium text-[#F7F7F4] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12B76A]"
            >
              Email Tim
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center rounded-full border border-[#0B1F33]/20 px-5 py-3 text-sm font-medium text-[#0B1F33] transition-colors hover:border-[#0B1F33]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12B76A]"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-2xl border-t border-[#0B1F33]/10 px-6 py-8">
        <p className="text-sm text-[#5B6B7C]">
          Lineguard is an early project by{" "}
          <a
            href="https://timb.dev"
            className="font-medium text-[#0B1F33] underline decoration-[#0B1F33]/25 underline-offset-4 transition-colors hover:decoration-[#12B76A] hover:text-[#12B76A]"
          >
            Tim Borovkov
          </a>
        </p>
      </footer>
    </>
  );
}
