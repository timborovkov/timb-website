import Image from "next/image";
import { MISSION } from "@/lib/constants";
import { SectionWrapper } from "./section-wrapper";

export function Mission() {
  return (
    <SectionWrapper id="mission" className="section-rule mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-12">
        <div>
          <h2 className="mb-5 flex items-center gap-3 text-sm font-medium text-muted sm:mb-7">
            <span aria-hidden="true" className="h-px w-6 shrink-0 bg-accent" />
            What I want technology to do
          </h2>
          <p className="max-w-[19ch] font-display text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08] font-semibold tracking-[-0.035em] text-pretty">
            {MISSION.lead}{" "}
            <span className="block text-balance text-accent">{MISSION.emphasis}</span>
          </p>
        </div>
        <Image
          src="/mission-steel-sculpture.webp"
          alt=""
          width={1056}
          height={1056}
          className="aspect-square w-full rounded-sm border border-border bg-surface object-cover"
          unoptimized
        />
      </div>

      <div className="mt-9 grid gap-6 border-t border-border pt-7 lg:grid-cols-3 lg:gap-0 lg:pt-9">
        {MISSION.body.map((paragraph) => (
          <p
            key={paragraph}
            className="max-w-prose leading-relaxed text-muted lg:px-7 lg:first:pl-0 lg:last:pr-0 lg:not-first:border-l lg:not-first:border-border"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
}
