import { jsonLd } from "./content";

export default function WorkdeltaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0F2A2E] font-display text-[#F6F5F0] antialiased selection:bg-[#C6F432] selection:text-[#0F2A2E]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  );
}
