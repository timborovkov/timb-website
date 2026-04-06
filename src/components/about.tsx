"use client";

import { BIO } from "@/lib/constants";
import { SectionWrapper } from "./section-wrapper";

export function About() {
  return (
    <SectionWrapper id="about" className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">About</h2>
      <div className="mt-8 space-y-5">
        {BIO.map((paragraph, i) => (
          <p key={i} className="text-lg leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
}
