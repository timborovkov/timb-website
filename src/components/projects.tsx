"use client";

import { ARCHIVED_PROJECTS, CURRENT_PROJECTS } from "@/lib/constants";
import { SectionWrapper } from "./section-wrapper";
import { ProjectCard } from "./project-card";

export function Projects() {
  const archivedNames = ARCHIVED_PROJECTS.map((project) => project.displayName ?? project.name);

  return (
    <SectionWrapper id="projects" className="section-rule mx-auto max-w-6xl px-6 py-24 sm:py-36">
      <div className="mb-14 grid gap-5 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 className="section-title">Selected work</h2>
        <p className="max-w-xl self-end text-lg leading-relaxed text-muted">
          Products, companies, and open-source systems I&apos;ve helped move from an idea to
          something real.
        </p>
      </div>
      <div>
        {CURRENT_PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <details className="group mt-14 border-t border-border pt-8">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight">Earlier work</h3>
            <p className="mt-1 text-sm text-muted">{archivedNames.join(" · ")}</p>
          </div>
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden
            className="size-5 shrink-0 text-muted transition-transform group-open:rotate-180"
          >
            <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" />
          </svg>
        </summary>
        <div className="mt-6">
          {ARCHIVED_PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </details>
    </SectionWrapper>
  );
}
