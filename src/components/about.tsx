"use client";

import { BIO_LEAD, BIO_SECTIONS, INTERESTS } from "@/lib/constants";
import { SectionWrapper } from "./section-wrapper";

export function About() {
  return (
    <SectionWrapper id="about" className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">About</h2>

      <p className="mt-8 text-xl leading-relaxed text-foreground">{BIO_LEAD}</p>

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
