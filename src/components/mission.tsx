"use client";

import { MISSION } from "@/lib/constants";
import { SectionWrapper } from "./section-wrapper";

export function Mission() {
  return (
    <SectionWrapper id="mission" className="section-rule mx-auto max-w-6xl px-6 py-24 sm:py-36">
      <h2 className="section-title max-w-4xl text-balance">What I want technology to do</h2>

      <blockquote className="mt-14 grid gap-8 md:grid-cols-[1.25fr_1fr] md:gap-20">
        <p className="font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-5xl">
          {MISSION.lead}
        </p>
        <div className="space-y-5 md:pt-2">
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
