"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isLive = project.status === "live";

  return (
    <motion.a
      href={isLive ? project.url : undefined}
      target={isLive ? "_blank" : undefined}
      rel={isLive ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      whileHover={{ scale: 1.02 }}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-surface p-6 backdrop-blur-sm transition-colors hover:border-accent/40 sm:p-8"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl font-bold tracking-wide">
          {project.displayName ?? project.name}
        </h3>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            isLive ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"
          }`}
        >
          {isLive ? "Live" : "Coming Soon"}
        </span>
      </div>
      <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
      {isLive && (
        <div className="mt-5 flex items-center gap-2 text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
          <span>Visit</span>
          <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
          </svg>
        </div>
      )}
    </motion.a>
  );
}
