import type { Viewport } from "next";
import { jsonLd, THEME_COLOR } from "./content";
import "./lineguard.css";

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
};

export default function LineguardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lineguard-root font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  );
}
