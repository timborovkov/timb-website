export const SITE = {
  name: "Tim Borovkov",
  tagline: "Software engineer, born founder, classical liberal & European federalist 🇪🇺. Coding since age 12, on a journey to change the world.",
  domains: ["timb.dev", "borovkov.me"],
} as const;

export const EMAIL = "me@timb.dev";

export const SOCIAL_LINKS = [
  { label: "Email", href: `mailto:${EMAIL}`, icon: "mail" },
  { label: "X", href: "https://x.com/timborovkov", icon: "x" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/timborovkov", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/theborovkov", icon: "instagram" },
  { label: "GitHub", href: "https://github.com/timborovkov", icon: "github" },
  { label: "Schedule a call", href: "https://cal.com/timbo", icon: "calendar" },
] as const;

export type ProjectStatus = "live" | "coming-soon" | "ongoing";

export interface Project {
  name: string;
  displayName?: string;
  url: string;
  status: ProjectStatus;
  description: string;
  category: string;
  openSource?: boolean;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "IRMIN",
    displayName: "IRMIN",
    url: "https://irmin.co",
    status: "coming-soon",
    category: "Data Infrastructure",
    openSource: true,
    githubUrl: "https://github.com/IrminData",
    description:
      "The trusted data layer for your AI agents. Ingest from any source, version every change, and serve relevant, versioned context to your agents in minutes, not months.",
  },
  {
    name: "Vernix",
    url: "https://vernix.app",
    status: "live",
    category: "AI SaaS",
    openSource: true,
    githubUrl: "https://github.com/timborovkov/Vernix",
    description:
      "AI meeting assistant that joins your video calls on Zoom, Meet, Teams & Webex. Automatic transcripts, summaries, and action items — connected to 25+ tools.",
  },
  {
    name: "UpCharge",
    url: "https://upcharge.eu",
    status: "live",
    category: "Sharing Economy",
    description:
      "Power bank sharing service across Finland. Rent portable chargers at public locations via QR scan, return them anywhere.",
  },
  {
    name: "Tecci",
    url: "https://www.tecci.fi/",
    status: "live",
    category: "Agency",
    description:
      "Helsinki-area software agency building enterprise web apps, commerce platforms, and integrations for clients like Puumerkki, Faba, and Cushman & Wakefield. Co-founded in 2019; I lead engineering.",
  },
  {
    name: "CoonNest",
    url: "https://github.com/timborovkov/CoonNest",
    status: "ongoing",
    category: "Homelab",
    openSource: true,
    githubUrl: "https://github.com/timborovkov/CoonNest",
    description:
      "A multi-purpose home cloud — two always-on boxes running Immich, Syncthing, Forgejo, Cal.com, local LLMs (Ollama, ComfyUI, Whisper), and more. Fully bootstrap-from-USB recoverable. Plan, configs, and runbooks all open source.",
  },
];

export const INTERESTS = [
  "Tech",
  "Startups",
  "AI",
  "LLMs",
  "AI agents",
  "Dev tools",
  "System architecture",
  "Workflow automation",
  "Data engineering",
  "Big data",
  "Open source",
  "Homelabbing",
  "Politics",
  "Europe 🇪🇺",
  "Classical liberalism",
  "European federalism",
  "Economics",
  "Finance",
  "VC",
  "Parliamentary procedure",
  "Legislation",
  "Debates",
  "History",
  "City planning",
  "Public infrastructure",
  "Cycling",
  "Grand strategy games",
  "Craft beer",
  "Karaoke",
  "Techno",
] as const;

export const BIO = [
  "I'm Tim Borovkov, a founder and software engineer drawn to the hard problems at the intersection of tech, politics, and Europe's future. Born in Tallinn, raised in Helsinki — I've been shipping code since I was 12 and haven't stopped since.",
  "I'm self-taught, and I've built most of what I know from the ground up. My main stack is TypeScript, Next.js, and Go. Today I co-run Tecci, a software consultancy building enterprise web apps, commerce, and integrations for Nordic companies.",
  "About nine months out of the year, I work remotely while traveling the world — coding from cafés, beaches, and anywhere else with decent wifi. When I'm not on the road, I split time between Helsinki and Tallinn — Helsinki is home, Tallinn is where I retreat to focus.",
  "When I'm not coding, you'll find me in political discussions. I'm a classical liberal and a European federalist 🇪🇺 — I advocate for free-market liberalism, open societies, and a more united, sovereign Europe. Tech is one of our most underused levers: the fastest way to build the scale and productivity Europe needs to stand on its own.",
];
