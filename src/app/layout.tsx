import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { inter, spaceGrotesk } from "@/lib/fonts";
import { SITE, EMAIL } from "@/lib/constants";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://timb.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tim Borovkov - Founder & Software Engineer",
    template: "%s | Tim Borovkov",
  },
  description:
    "Tim Borovkov - software engineer and European federalist 🇪🇺. 10+ years shipping products and companies; running Tecci since 2019, founded UpCharge, now building in AI and data.",
  applicationName: "Tim Borovkov",
  authors: [{ name: "Tim Borovkov", url: SITE_URL }],
  creator: "Tim Borovkov",
  publisher: "Tim Borovkov",
  keywords: [
    "Tim Borovkov",
    "timb.dev",
    "Borovkov",
    "founder",
    "software engineer",
    "European federalist",
    "classical liberal",
    "Tecci",
    "Vernix",
    "IRMIN",
    "Helsinki",
    "Tallinn",
    "Estonia",
    "Finland",
    "Europe",
    "TypeScript",
    "Next.js",
    "Go",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Tim Borovkov",
    title: "Tim Borovkov - Founder & Software Engineer",
    description:
      "Software engineer by craft, European federalist by conviction. Shipping code since I was 12 - products and companies ever since. Running Tecci, founded UpCharge, now building in AI and data.",
    locale: "en_US",
    firstName: "Tim",
    lastName: "Borovkov",
    username: "timborovkov",
  },
  twitter: {
    card: "summary_large_image",
    site: "@timborovkov",
    creator: "@timborovkov",
    title: "Tim Borovkov - Founder & Software Engineer",
    description:
      "Software engineer by craft, European federalist by conviction. Shipping code since I was 12 - products and companies ever since. Running Tecci, founded UpCharge, now building in AI and data.",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE_URL,
  image: `${SITE_URL}/fella.png`,
  email: `mailto:${EMAIL}`,
  jobTitle: "Founder & Software Engineer",
  worksFor: [
    { "@type": "Organization", name: "Tecci", url: "https://www.tecci.fi/" },
    { "@type": "Organization", name: "IRMIN", url: "https://irmin.co" },
  ],
  sameAs: [
    "https://x.com/timborovkov",
    "https://www.linkedin.com/in/timborovkov",
    "https://github.com/timborovkov",
    "https://www.instagram.com/theborovkov",
    "https://borovkov.me",
  ],
  birthPlace: "Tallinn, Estonia",
  homeLocation: { "@type": "Place", name: "Helsinki, Finland" },
  knowsAbout: [
    "TypeScript",
    "Next.js",
    "Go",
    "AI",
    "Startups",
    "Europe",
    "European federalism",
    "Classical liberalism",
    "Politics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body>
        {GA_ID && (
          <Script id="ga-consent-default" strategy="beforeInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'granted'
});`}
          </Script>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
