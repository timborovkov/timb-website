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

const READING = [
  "Matching the rate con, invoice and POD by hand, load by load",
  "Detention, lumper and layover billed without approval, or for more hours than the POD shows",
  "Paying the carrier and then their factor for the same load",
  "An accessorial paid to the carrier that never gets rebilled to the shipper",
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

function ContactActions({ className }: { className?: string }) {
  return (
    <div className={className}>
      <a
        href={MAILTO}
        aria-label={`Email Tim Borovkov at ${EMAIL}`}
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#0B1F33] px-5 py-3 text-sm font-medium text-[#F7F7F4] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12B76A]"
      >
        Email Tim
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label={`Call Tim Borovkov at ${PHONE_DISPLAY}`}
        className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#0B1F33]/20 px-5 py-3 text-sm font-medium text-[#0B1F33] transition-colors hover:border-[#0B1F33]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12B76A]"
      >
        Call {PHONE_DISPLAY}
      </a>
    </div>
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

      <header className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-6 pt-8 sm:pt-10">
        <a href="#content" className="flex items-center gap-2.5 rounded-sm">
          <LogoMark className="h-9 w-auto" />
          <span className="text-lg font-semibold tracking-tight text-[#0B1F33]">lineguard</span>
        </a>
        <a
          href="#contact"
          className="text-sm font-medium text-[#5B6B7C] transition-colors hover:text-[#0B1F33] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12B76A]"
        >
          Contact
        </a>
      </header>

      <main id="content" className="mx-auto max-w-2xl px-6 pb-20">
        <section className="pt-10 sm:pt-14" aria-labelledby="lineguard-heading">
          <p className="text-sm font-medium text-[#5B6B7C]">An early project by Tim Borovkov</p>
          <h1
            id="lineguard-heading"
            className="mt-4 max-w-xl text-3xl font-semibold leading-snug tracking-tight text-[#0B1F33] sm:text-4xl"
          >
            Every carrier invoice, checked line by line.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#5B6B7C]">
            I&apos;m a software engineer and business student looking into how freight brokers check
            carrier invoices against the rate con and POD before paying. There&apos;s nothing to
            buy. I&apos;m looking for a few people in broker AP and finance to talk to, and to help
            shape what gets built.
          </p>
          <ContactActions className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center" />
        </section>

        <section className="mt-20 sm:mt-28" aria-labelledby="reading-heading">
          <h2
            id="reading-heading"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B6B7C]"
          >
            What I keep reading about
          </h2>
          <ul className="mt-8 space-y-5">
            {READING.map((item) => (
              <li key={item} className="flex gap-4 text-lg leading-relaxed text-[#0B1F33]">
                <span className="mt-2 size-2.5 shrink-0 rounded-full bg-[#0B1F33]/25" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg leading-relaxed text-[#0B1F33]">
            I&apos;d like to hear whether any of this matches your experience. &ldquo;That&apos;s
            not really a problem for us&rdquo; is just as useful to hear.
          </p>
        </section>

        <section className="mt-20 sm:mt-28" aria-labelledby="idea-heading">
          <h2
            id="idea-heading"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B6B7C]"
          >
            The idea
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-[#0B1F33]">
            A tool that compares a carrier invoice with its rate con and POD, line by line, and
            points out what doesn&apos;t match. It isn&apos;t built yet. I&apos;d rather build it
            with a few brokerages than guess.
          </p>
        </section>

        <section className="mt-20 sm:mt-28" id="contact" aria-labelledby="help-heading">
          <h2
            id="help-heading"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B6B7C]"
          >
            How to help
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-[#0B1F33]">
            Tell me how your team checks carrier invoices today, by{" "}
            <a
              href={MAILTO}
              className="font-medium text-[#0B1F33] underline decoration-[#12B76A] decoration-2 underline-offset-4 transition-colors hover:text-[#12B76A]"
            >
              email
            </a>{" "}
            or on a{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              className="font-medium text-[#0B1F33] underline decoration-[#12B76A] decoration-2 underline-offset-4 transition-colors hover:text-[#12B76A]"
            >
              20-minute call
            </a>
            . If it&apos;s interesting, I&apos;d come back later with an early version for your
            feedback.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[#0B1F33]">
            Who I&apos;d like to hear from: owners, controllers and AP or settlement staff at US
            freight brokerages.
          </p>
          <ContactActions className="mt-8 flex flex-wrap gap-3" />
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
          .{" "}
          <a
            href={MAILTO}
            className="font-medium text-[#0B1F33] underline decoration-[#0B1F33]/25 underline-offset-4 transition-colors hover:decoration-[#12B76A] hover:text-[#12B76A]"
          >
            {EMAIL}
          </a>{" "}
          ·{" "}
          <a
            href={`tel:${PHONE_TEL}`}
            className="font-medium text-[#0B1F33] underline decoration-[#0B1F33]/25 underline-offset-4 transition-colors hover:decoration-[#12B76A] hover:text-[#12B76A]"
          >
            {PHONE_DISPLAY}
          </a>
        </p>
      </footer>
    </>
  );
}
