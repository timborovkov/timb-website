"use client";

import { CORE_COMPETENCY, SKILLS } from "@/lib/constants";
import { SectionWrapper } from "./section-wrapper";

const LEVEL_LABEL: Record<1 | 2 | 3 | 4 | 5, string> = {
  1: "Familiar",
  2: "Proficient",
  3: "Solid",
  4: "Advanced",
  5: "Expert",
};

function Dots({ level }: { level: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${level} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`block size-1.5 rounded-full ${
            i <= level ? "bg-accent" : "bg-border"
          }`}
        />
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <SectionWrapper id="skills" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>
      <p className="mt-4 max-w-2xl text-muted">
        Started coding in Java at 12, went through Swift, and today build full-stack in TypeScript
        and Go — from infra to UI. Ten-plus years of shipping, mostly as a founder rather than
        inside a big engineering org — so what&apos;s here is what I&apos;ve actually put the reps
        into, not a company-scaffolded title list. Still learning; always will be.
      </p>

      <div className="mt-10 rounded-2xl border border-accent/40 bg-surface/60 p-6 backdrop-blur-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Core competency
        </p>
        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {CORE_COMPETENCY.name}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {CORE_COMPETENCY.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {CORE_COMPETENCY.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill) => (
          <li
            key={skill.name}
            className="rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold">{skill.name}</h3>
              <Dots level={skill.level} />
            </div>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent">
              {LEVEL_LABEL[skill.level]}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{skill.description}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {skill.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border/60 px-2 py-0.5 text-xs text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
