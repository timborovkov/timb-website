import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL } from "@/lib/constants";

const TITLE = "workdelta — AI automation for SMEs, paid on results";
const DESCRIPTION =
  "Repetitive back-office work still eats the week in most 10–50 person companies. I'm exploring how to automate it, paid on results — and I'd like to learn how it looks in your business.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "workdelta",
    "AI automation",
    "SME automation",
    "back-office automation",
    "paid on results",
    "Tim Borovkov",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/workdelta",
    siteName: "workdelta",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: {
    canonical: "/workdelta",
  },
};

const AUTOMATABLE = [
  "invoices and accounts payable",
  "order entry and quoting",
  "dispatch and scheduling",
  "inventory and reordering",
  "customer enquiries and reporting",
];

const HOW_IT_WORKS = [
  "A diagnostic to find where time and revenue leak.",
  "I build and run the automations.",
  "You pay a share of the value it verifiably delivers, with a monthly minimum.",
];

function DeltaMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="currentColor" d="M12 3.4 21.6 21H2.4L12 3.4Z" />
    </svg>
  );
}

export default function WorkdeltaPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col px-6 py-10 sm:px-8 sm:py-14">
      <header>
        <p className="inline-flex items-center gap-2 text-[15px] font-medium tracking-tight">
          <DeltaMark className="size-3.5 text-[#C6F432]" />
          workdelta
        </p>
      </header>

      <main className="mt-12 sm:mt-16">
        <h1 className="text-[1.85rem] leading-[1.15] font-medium tracking-tight text-balance sm:text-4xl">
          AI automation for SMEs, paid on results.
        </h1>

        <p className="mt-5 text-[1.05rem] leading-relaxed text-[#F6F5F0]/80 text-pretty">
          Repetitive back-office work still eats the week in most 10–50 person companies. I&apos;m
          exploring how to automate it, and I&apos;d like to learn how it looks in your business.
        </p>

        <section className="mt-10" aria-labelledby="automatable-heading">
          <h2
            id="automatable-heading"
            className="text-xs font-medium tracking-[0.14em] text-[#75ABA6] uppercase"
          >
            Work that can be automated
          </h2>
          <ul role="list" className="mt-3 list-none space-y-1.5 text-[1.05rem] leading-relaxed">
            {AUTOMATABLE.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span
                  className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-[#C6F432]"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="how-heading">
          <h2
            id="how-heading"
            className="text-xs font-medium tracking-[0.14em] text-[#75ABA6] uppercase"
          >
            How it would work
          </h2>
          <ol role="list" className="mt-3 list-none space-y-2.5 text-[1.05rem] leading-relaxed">
            {HOW_IT_WORKS.map((item, i) => (
              <li key={item} className="flex gap-3">
                <span className="w-4 shrink-0 tabular-nums text-[#C6F432]" aria-hidden>
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10" aria-labelledby="ask-heading">
          <h2
            id="ask-heading"
            className="text-xs font-medium tracking-[0.14em] text-[#75ABA6] uppercase"
          >
            What I&apos;m asking for
          </h2>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-[#F6F5F0]/80 text-pretty">
            A 20-minute call. Not selling anything yet: I want to hear what&apos;s repetitive in
            your week, how you handle it today, and whether a pilot built together would be worth
            it.
          </p>
        </section>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href="https://cal.com/timbo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#C6F432] px-5 py-2.5 text-sm font-medium text-[#0F2A2E] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6F432]"
          >
            Book a 20-min call
          </a>
          <a
            href="tel:+447448094797"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#1F7A75] px-5 py-2.5 text-sm text-[#F6F5F0] transition-colors hover:border-[#C6F432] hover:text-[#C6F432] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6F432]"
          >
            +44 7448094797
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#1F7A75] px-5 py-2.5 text-sm text-[#F6F5F0] transition-colors hover:border-[#C6F432] hover:text-[#C6F432] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6F432]"
          >
            {EMAIL}
          </a>
        </div>

        <section
          className="mt-12 border-t border-[#1F7A75]/40 pt-8"
          aria-labelledby="about-heading"
        >
          <h2
            id="about-heading"
            className="text-xs font-medium tracking-[0.14em] text-[#75ABA6] uppercase"
          >
            About
          </h2>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-[#F6F5F0]/80 text-pretty">
            Tim Borovkov. Engineering lead at a software consultancy in the Nordics since 2019
            (enterprise web apps, commerce, integrations). Builder of The Timeline, Vernix and
            IRMIN.
          </p>
        </section>
      </main>

      <footer className="mt-10 pt-2">
        <Link
          href="https://timb.dev"
          className="text-sm text-[#75ABA6] transition-colors hover:text-[#C6F432] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6F432]"
        >
          timb.dev
        </Link>
      </footer>
    </div>
  );
}
