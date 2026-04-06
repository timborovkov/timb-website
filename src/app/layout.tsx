import type { Metadata } from "next";
import { inter, spaceGrotesk } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tim Borovkov — Founder & Software Engineer",
  description:
    "Tech, startups, AI, politics, Europe and more. Building the future with TypeScript, Next.js, and Go.",
  metadataBase: new URL("https://timb.dev"),
  openGraph: {
    title: "Tim Borovkov",
    description:
      "Founder & Software Engineer — Tech, startups, AI, politics, Europe and more.",
    url: "https://timb.dev",
    siteName: "Tim Borovkov",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tim Borovkov",
    description:
      "Founder & Software Engineer — Tech, startups, AI, politics, Europe and more.",
    creator: "@timborovkov",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://timb.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
