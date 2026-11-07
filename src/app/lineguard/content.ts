import { EMAIL } from "@/lib/constants";

export const SITE_URL = "https://timb.dev";
export const PAGE_PATH = "/lineguard";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
export const OG_IMAGE_URL = `${PAGE_URL}/opengraph-image`;
export const TWITTER_IMAGE_URL = `${PAGE_URL}/twitter-image`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT =
  "Lineguard: Every carrier invoice, checked line by line. An early project by Tim Borovkov.";

export const TITLE = "Lineguard: how brokers check carrier invoices";
export const DESCRIPTION =
  "I'm a software engineer and business student looking into how freight brokers check carrier invoices against the rate con and POD before paying. There's nothing to buy. I'm looking for a few people in broker AP and finance to talk to.";

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
      author: { "@id": `${SITE_URL}#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: "Tim Borovkov",
      url: SITE_URL,
      email: EMAIL,
      telephone: PHONE_TEL,
      jobTitle: "Software engineer",
    },
  ],
} as const;
