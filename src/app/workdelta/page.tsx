import type { Metadata } from "next";
import Link from "next/link";
import {
  CAL_URL,
  DESCRIPTION,
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
  PAGE_URL,
  RESEARCH_EMAIL,
  TITLE,
  TWITTER_IMAGE_URL,
} from "./content";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["workdelta", "AI automation", "SMEs", "back-office automation", "Tim Borovkov"],
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
    siteName: "workdelta",
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
};

const EXAMPLES = [
  "Enter orders and prepare draft quotes.",
  "Match invoices and chase missing paperwork.",
  "Update schedules and flag stock shortages.",
  "Handle routine enquiries and compile reports.",
];

const PROCESS = [
  "Understand the workflow and how you handle it today.",
  "Agree what is worth automating and how to measure it.",
  "Build, run and review the agreed automation.",
];

const TECCI_URL = "https://www.tecci.fi/";

const PORTFOLIO = [
  { name: "The Timeline", href: "https://thetimeline.cc" },
  { name: "Vernix", href: "https://github.com/timborovkov/Vernix" },
  { name: "IRMIN", href: "https://irmin.co" },
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
          Less repetitive admin. More time for your business.
        </h1>

        <p className="mt-5 text-[1.05rem] leading-relaxed text-[#F6F5F0]/80 text-pretty">
          Workdelta is an AI automation service for SMEs with 10–50 staff. I&apos;m researching
          which repetitive tasks cost teams time or lose them revenue, before deciding what to
          automate.
        </p>

        <section className="mt-10" aria-labelledby="examples-heading">
          <h2
            id="examples-heading"
            className="text-xs font-medium tracking-[0.14em] text-[#75ABA6] uppercase"
          >
            Where automation might help
          </h2>
          <ul role="list" className="mt-3 list-none space-y-1.5 text-[1.05rem] leading-relaxed">
            {EXAMPLES.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span
                  className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-[#C6F432]"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-[#F6F5F0]/80 text-pretty">
            These are examples. The starting point depends on your business.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="process-heading">
          <h2
            id="process-heading"
            className="text-xs font-medium tracking-[0.14em] text-[#75ABA6] uppercase"
          >
            Process
          </h2>
          <ol role="list" className="mt-3 list-none space-y-2.5 text-[1.05rem] leading-relaxed">
            {PROCESS.map((item, i) => (
              <li key={item} className="flex gap-3">
                <span className="w-4 shrink-0 tabular-nums text-[#C6F432]" aria-hidden>
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10" aria-labelledby="research-heading">
          <h2
            id="research-heading"
            className="text-xs font-medium tracking-[0.14em] text-[#75ABA6] uppercase"
          >
            Research
          </h2>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-[#F6F5F0]/80 text-pretty">
            I&apos;m looking for a 20-minute research conversation about one repetitive task: what
            happens today, where it gets stuck and what you&apos;ve already tried. I&apos;m not
            asking you to buy anything on this call.
          </p>
        </section>

        <nav
          aria-label="Contact"
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Talk through one workflow with Tim Borovkov (opens in a new tab)"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#C6F432] px-5 py-2.5 text-sm font-medium text-[#0F2A2E] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6F432]"
          >
            Talk through one workflow
          </a>
          <a
            href={`mailto:${RESEARCH_EMAIL}`}
            aria-label={`Prefer email? ${RESEARCH_EMAIL}`}
            className="inline-flex min-h-11 items-center justify-center text-sm text-[#75ABA6] transition-colors hover:text-[#C6F432] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6F432]"
          >
            Prefer email? {RESEARCH_EMAIL}
          </a>
        </nav>

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
            I&apos;m Tim Borovkov. I&apos;ve been an engineering lead since 2019, building
            enterprise web apps, commerce systems and integrations. I also co-run{" "}
            <a
              href={TECCI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#75ABA6] transition-colors hover:text-[#C6F432] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6F432]"
            >
              Tecci
            </a>
            {
              ", a software agency working with large enterprises on their software needs. Workdelta is my exploration of how that experience can help SMEs."
            }
          </p>
          <nav aria-label="Portfolio" className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            {PORTFOLIO.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#75ABA6] transition-colors hover:text-[#C6F432] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6F432]"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </section>
      </main>

      <footer className="mt-10 pt-2">
        <Link
          href="https://timb.dev"
          aria-label="Tim Borovkov's website, timb.dev"
          className="text-sm text-[#75ABA6] transition-colors hover:text-[#C6F432] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6F432]"
        >
          timb.dev
        </Link>
      </footer>
    </div>
  );
}
