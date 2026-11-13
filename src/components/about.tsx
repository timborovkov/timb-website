"use client";

import { BIO_LEAD, BIO_SECTIONS, INTERESTS } from "@/lib/constants";
import { SectionWrapper } from "./section-wrapper";

export function About() {
  return (
    <SectionWrapper
      id="about"
      className="section-rule mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:py-36 md:grid-cols-[1fr_2fr] md:gap-16"
    >
      <h2 className="section-title">About</h2>
      <div>
        <p className="max-w-3xl font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-foreground sm:text-3xl">
          {BIO_LEAD}
        </p>

        <details className="group mt-8">
          <summary className="text-link inline-flex cursor-pointer list-none items-center gap-1.5 py-2 text-sm font-medium text-foreground transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
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
              <h3 className="font-display text-lg font-semibold text-foreground">
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
              <li key={interest} className="border-b border-border px-1 py-1 text-sm text-muted">
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
