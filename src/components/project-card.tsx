"use client";

import { motion } from "framer-motion";
import type { Project, ProjectStatus } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const STATUS_META: Record<ProjectStatus, { label: string; classes: string }> = {
  live: { label: "Live", classes: "bg-emerald-500/15 text-emerald-400" },
  "coming-soon": { label: "Coming Soon", classes: "bg-amber-500/15 text-amber-400" },
  ongoing: { label: "Ongoing", classes: "bg-sky-500/15 text-sky-400" },
};

function GithubGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isClickable = project.status === "live" || project.status === "ongoing";
  const status = STATUS_META[project.status];
  const displayName = project.displayName ?? project.name;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 backdrop-blur-sm transition-colors hover:border-accent/40 sm:p-8"
    >
      {isClickable && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${displayName}`}
          className="absolute inset-0 z-10"
        />
      )}

      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl font-bold tracking-wide">{displayName}</h3>
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${status.classes}`}>
          {status.label}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-border bg-surface/60 px-2.5 py-0.5 text-xs text-muted">
          {project.category}
        </span>
        {project.openSource && project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${displayName} source on GitHub`}
            className="relative z-20 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-2.5 py-0.5 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <GithubGlyph className="size-3.5" />
            Open Source
          </a>
        )}
        {project.openSource && !project.githubUrl && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-2.5 py-0.5 text-xs text-muted">
            <GithubGlyph className="size-3.5" />
            Open Source
          </span>
        )}
      </div>

      <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

      {isClickable && (
        <div className="mt-5 flex items-center gap-2 text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
          <span>Visit</span>
          <svg viewBox="0 0 16 16" fill="currentColor" className="size-4" aria-hidden>
            <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
          </svg>
        </div>
      )}
    </motion.div>
  );
}
