import { EMAIL } from "@/lib/constants";

export const SITE_URL = "https://timb.dev";
export const PAGE_PATH = "/lineguard";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
export const OG_IMAGE_URL = `${PAGE_URL}/opengraph-image`;
export const TWITTER_IMAGE_URL = `${PAGE_URL}/twitter-image`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT =
  "Lineguard: Every carrier invoice, checked line by line. Carrier invoice audit for freight brokers.";

export const TITLE = "Lineguard — Carrier invoice audit for freight brokers";
export const DESCRIPTION =
  "Every carrier invoice, checked line by line. An AI agent that matches invoices to rate cons and PODs, flags unapproved accessorials, duplicates and missed rebills, and drafts the disputes — before you pay.";

export const PHONE_DISPLAY = "+44 7448094797";
export const PHONE_TEL = "+447448094797";
export const THEME_COLOR = "#0B1F33";

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", name: "Tim Borovkov", url: SITE_URL },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: OG_IMAGE_URL,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
      },
      about: { "@id": `${PAGE_URL}#app` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${PAGE_URL}#app`,
      name: "Lineguard",
      url: PAGE_URL,
      email: EMAIL,
      telephone: PHONE_TEL,
      description: DESCRIPTION,
      image: OG_IMAGE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      audience: {
        "@type": "Audience",
        audienceType: "Freight brokerage finance and AP teams",
      },
      creator: {
        "@type": "Person",
        name: "Tim Borovkov",
        url: SITE_URL,
        email: EMAIL,
        telephone: PHONE_TEL,
      },
      sameAs: [SITE_URL],
    },
  ],
} as const;
