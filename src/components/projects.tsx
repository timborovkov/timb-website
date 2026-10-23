"use client";

import { ARCHIVED_PROJECTS, CURRENT_PROJECTS } from "@/lib/constants";
import { SectionWrapper } from "./section-wrapper";
import { ProjectCard } from "./project-card";

export function Projects() {
  const archivedNames = ARCHIVED_PROJECTS.map((project) => project.displayName ?? project.name);

  return (
    <SectionWrapper id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {CURRENT_PROJECTS.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>

      <details className="group mt-16">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-6 py-5 transition-colors hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight">Archive</h3>
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
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {ARCHIVED_PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </details>
    </SectionWrapper>
  );
}
