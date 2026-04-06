export const SITE = {
  name: "Tim Borovkov",
  tagline: "Tech, startups, AI, politics, Europe and more.",
  domains: ["timb.dev", "borovkov.me"],
} as const;

export const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/timborovkov", icon: "x" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/timborovkov", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/theborovkov", icon: "instagram" },
  { label: "GitHub", href: "https://github.com/timborovkov", icon: "github" },
  { label: "Schedule a call", href: "https://cal.com/timbo", icon: "calendar" },
] as const;

export type ProjectStatus = "live" | "coming-soon";

export interface Project {
  name: string;
  displayName?: string;
  url: string;
  status: ProjectStatus;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    name: "IRMIN",
    displayName: "IRMIN",
    url: "https://irmin.co",
    status: "coming-soon",
    description:
      "The trusted data layer for your AI agents. Ingest from any source, version every change, and serve trusted context to your agents in minutes, not months.",
  },
  {
    name: "Vernix",
    url: "https://vernix.app",
    status: "live",
    description:
      "AI meeting assistant that joins your video calls on Zoom, Meet, Teams & Webex. Automatic transcripts, summaries, and action items — connected to 25+ tools.",
  },
  {
    name: "UpCharge",
    url: "https://upcharge.eu",
    status: "live",
    description:
      "Power bank sharing service across Finland. Rent portable chargers at public locations via QR scan, return them anywhere.",
  },
];

export const BIO = [
  "I'm a founder and software engineer with a passion for technology, innovation, and the future of Europe. Born in Tallinn, raised in Helsinki — I've spent my life exploring how modern technology can solve real-world challenges.",
  "As a self-taught programmer, I've built a strong foundation in creating things from the ground up. My main stack revolves around TypeScript, Next.js, and Go. Today, I co-run Tecci, a software consultancy delivering cutting-edge solutions to businesses.",
  "When I'm not coding, you'll find me in political discussions, advocating for free-market liberalism and a more united Europe. I believe technology is a driver of economic growth and a key to fostering deeper collaboration across borders.",
];
