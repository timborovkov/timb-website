"use client";

import { BIO_LEAD, BIO_SECTIONS, INTERESTS } from "@/lib/constants";
import { SectionWrapper } from "./section-wrapper";

export function About() {
  return (
    <SectionWrapper id="about" className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">About</h2>

      <p className="mt-8 text-xl leading-relaxed text-foreground">{BIO_LEAD}</p>

      <details className="group mt-8">
        <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">Read the full story</span>
          <span className="hidden group-open:inline">Show less</span>
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden
            className="size-4 text-muted transition-transform group-open:rotate-180 group-hover:text-accent"
          >
            <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" />
          </svg>
        </summary>

        {BIO_SECTIONS.map((section) => (
          <div key={section.heading} className="mt-10">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-muted">
              {section.heading}
            </h3>
            <div className="mt-4 space-y-5">
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </details>

      <div className="mt-10">
        <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-muted">
          Interests
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {INTERESTS.map((interest) => (
            <li
              key={interest}
              className="rounded-full border border-border bg-surface/60 px-3 py-1 text-sm text-muted"
            >
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
