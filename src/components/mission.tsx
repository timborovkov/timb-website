"use client";

import { MISSION } from "@/lib/constants";
import { SectionWrapper } from "./section-wrapper";

export function Mission() {
  return (
    <SectionWrapper id="mission" className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Mission</h2>

      <blockquote className="mt-10 border-l-2 border-accent pl-6">
        <p className="font-display text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
          {MISSION.lead}
        </p>
        <div className="mt-6 space-y-5">
          {MISSION.body.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </blockquote>
    </SectionWrapper>
  );
}
