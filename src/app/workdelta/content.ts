export const SITE_URL = "https://timb.dev";
export const PAGE_PATH = "/workdelta";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
export const OG_IMAGE_URL = `${PAGE_URL}/opengraph-image`;

export const TITLE = "workdelta — AI automation for SMEs and back-office work";
export const DESCRIPTION =
  "AI automation for SMEs: I automate repetitive back-office work; you pay a share of the value it delivers. Book a 20-minute exploratory call with me.";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  "@id": `${PAGE_URL}#org`,
  name: "workdelta",
  url: PAGE_URL,
  email: "me@timb.dev",
  telephone: "+447448094797",
  description: DESCRIPTION,
  image: OG_IMAGE_URL,
  areaServed: [
    { "@type": "Place", name: "Europe" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Place", name: "Nordics" },
  ],
  serviceType: ["AI automation", "back-office automation"],
  founder: {
    "@type": "Person",
    name: "Tim Borovkov",
    url: SITE_URL,
    email: "me@timb.dev",
    telephone: "+447448094797",
    jobTitle: "Engineering lead",
  },
  sameAs: [SITE_URL],
} as const;
