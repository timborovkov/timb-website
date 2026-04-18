"use client";

import { motion } from "framer-motion";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import { SocialIcon } from "./social-icon";

export function Hero() {
  const words = SITE.name.split(" ");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="inline-block"
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-lg text-lg text-muted sm:text-xl"
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-3 pt-4"
        >
          {SOCIAL_LINKS.map((link) => (
            <SocialIcon key={link.label} icon={link.icon} href={link.href} label={link.label} />
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="size-6"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
