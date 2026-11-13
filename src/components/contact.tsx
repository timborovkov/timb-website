"use client";

import { motion } from "framer-motion";
import { trackOutboundClick } from "@/lib/analytics";
import { SOCIAL_LINKS } from "@/lib/constants";
import { SectionWrapper } from "./section-wrapper";
import { SocialIcon } from "./social-icon";

export function Contact() {
  return (
    <SectionWrapper id="contact" className="section-rule mx-auto max-w-6xl px-6 py-24 sm:py-36">
      <h2 className="section-title max-w-4xl">Have something worth building?</h2>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
        Always happy to hear from founders, builders, collaborators, and anyone curious about tech,
        startups, or European politics. Email is fastest.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        {SOCIAL_LINKS.map((link) => (
          <SocialIcon key={link.label} icon={link.icon} href={link.href} label={link.label} />
        ))}
      </div>

      <motion.a
        href="https://cal.com/timbo"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackOutboundClick("Schedule a call (CTA)", "https://cal.com/timbo", "cal")}
        className="mt-10 inline-flex min-h-12 items-center gap-3 bg-accent px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-foreground"
      >
        Schedule a call
        <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
          <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
        </svg>
      </motion.a>
    </SectionWrapper>
  );
}
