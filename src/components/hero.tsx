import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[92svh] max-w-6xl items-end px-6 pb-16 pt-32 sm:pb-24"
    >
      <div className="w-full">
        <p className="mb-6 flex items-center gap-3 text-sm font-medium text-accent">
          <span className="size-2 rounded-full bg-accent shadow-[0_0_0_5px_color-mix(in_oklab,var(--color-accent)_12%,transparent)]" />
          Building from Helsinki · working across Europe
        </p>
        <h1 className="max-w-5xl font-display text-[clamp(4.5rem,12vw,10rem)] font-semibold leading-[0.78] tracking-[-0.04em]">
          Tim
          <br />
          Borovkov<span className="text-accent">.</span>
        </h1>

        <div className="mt-10 grid gap-8 border-t border-border pt-7 md:grid-cols-[1fr_2fr] md:gap-16">
          <p className="font-display text-lg font-medium text-foreground">
            Founder &amp; software engineer
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{SITE.tagline}</p>
        </div>
      </div>
    </section>
  );
}
