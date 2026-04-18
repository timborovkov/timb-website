"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";
import { SectionWrapper } from "./section-wrapper";
import { SocialIcon } from "./social-icon";

export function Contact() {
  return (
    <SectionWrapper id="contact" className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Let&apos;s connect
      </h2>
      <p className="mt-4 max-w-lg text-lg text-muted">
        Always happy to hear from founders, collaborators, and anyone curious about tech, startups,
        or European politics. Email is fastest.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        {SOCIAL_LINKS.map((link) => (
          <SocialIcon key={link.label} icon={link.icon} href={link.href} label={link.label} />
        ))}
      </div>

      <motion.a
        href="https://cal.com/timbo"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-neutral-950 transition-colors hover:bg-accent/80"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Schedule a call
        <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
          <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
        </svg>
      </motion.a>
    </SectionWrapper>
  );
}
