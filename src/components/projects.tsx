"use client";

import { PROJECTS } from "@/lib/constants";
import { SectionWrapper } from "./section-wrapper";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <SectionWrapper id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
