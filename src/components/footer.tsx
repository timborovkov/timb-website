import Image from "next/image";
import { SITE, EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src="/fella.png"
            alt="Tim Borovkov avatar"
            width={32}
            height={32}
            className="size-8 rounded-full object-cover"
          />
          <p>
            &copy; {new Date().getFullYear()} {SITE.name} 🇪🇺
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 sm:items-end">
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-accent">
            {EMAIL}
          </a>
          <p className="flex gap-2">
            {SITE.domains.map((domain, i) => (
              <span key={domain}>
                {domain}
                {i < SITE.domains.length - 1 && <span className="ml-2">&middot;</span>}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
