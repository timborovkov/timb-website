export const SITE_URL = "https://timb.dev";
export const PAGE_PATH = "/workdelta";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
export const OG_IMAGE_URL = `${PAGE_URL}/opengraph-image`;
export const TWITTER_IMAGE_URL = `${PAGE_URL}/twitter-image`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT =
  "workdelta: Less repetitive admin. More time for your business. AI automation for SMEs with 10–50 staff.";

export const TITLE = "workdelta — AI automation for SMEs with 10–50 staff";
export const DESCRIPTION =
  "Workdelta is an AI automation service for SMEs with 10–50 staff. I'm researching which repetitive tasks cost teams time or lose them revenue, before deciding what to automate.";

export const RESEARCH_EMAIL = "tim@timb.dev";
export const CAL_URL = "https://cal.com/timbo";
export const PHONE_TEL = "+447448094797";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  "@id": `${PAGE_URL}#org`,
  name: "workdelta",
  url: PAGE_URL,
  email: RESEARCH_EMAIL,
  telephone: PHONE_TEL,
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
    email: RESEARCH_EMAIL,
    telephone: PHONE_TEL,
    jobTitle: "Engineering lead",
  },
  sameAs: [SITE_URL],
} as const;
