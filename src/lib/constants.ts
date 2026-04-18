export const SITE = {
  name: "Tim Borovkov",
  tagline:
    "Software engineer by craft, classical liberal and European federalist 🇪🇺 by conviction. Shipping code since I was 12 - building products and companies that solve real problems ever since.",
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
      "AI meeting assistant that joins your video calls on Zoom, Meet, Teams, and Webex. Automatic transcripts, summaries, and action items, connected to 25+ tools.",
  },
  {
    name: "UpCharge",
    url: "https://upcharge.eu",
    status: "live",
    category: "Sharing Economy",
    description:
      "Power bank sharing network across Finland and Spain (Málaga, Barcelona). Rent portable chargers at public locations via QR scan, return them anywhere.",
  },
  {
    name: "Tecci",
    url: "https://www.tecci.fi/",
    status: "live",
    category: "Agency",
    description:
      "Helsinki-area software agency building enterprise web apps, commerce platforms, and integrations for clients like Puumerkki, Faba, and Cushman & Wakefield. With the company since 2019; I lead engineering.",
  },
  {
    name: "RaccoonNest",
    displayName: "Raccoon Nest",
    url: "https://github.com/timborovkov/raccoon-nest",
    status: "ongoing",
    category: "Homelab",
    openSource: true,
    githubUrl: "https://github.com/timborovkov/raccoon-nest",
    description:
      "A multi-purpose home cloud - two always-on boxes running Immich, Syncthing, Forgejo, Cal.com, local LLMs (Ollama, ComfyUI, Whisper), and more. Fully bootstrap-from-USB recoverable. Plan, configs, and runbooks all open source.",
  },
];

export interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  description: string;
  tags: string[];
}

export const CORE_COMPETENCY: Skill = {
  name: "Zero to Users",
  level: 4,
  description:
    "Turning ideas into reality with users, fast. UpCharge, dozens of Tecci agency projects, my own products and projects, and 20+ hackathons (won some, lost some, placed top in others) - all built by picking the right stack, skipping the wrong complexity, and iterating until something real existed. Shipping matters more than polishing.",
  tags: ["agentic development", "prototyping", "rapid iteration", "MVP delivery", "scope-cutting"],
};

export const SKILLS: Skill[] = [
  {
    name: "Software Architecture",
    level: 4,
    description:
      "Designing systems from scratch - data models, service boundaries, and deployment topology for products that actually need to scale.",
    tags: [
      "API design",
      "data modeling",
      "service boundaries",
      "event-driven",
      "scaling",
      "performance",
      "concurrency",
      "reliability",
    ],
  },
  {
    name: "Web Application Development",
    level: 4,
    description:
      "Full-stack web apps end-to-end - from database to pixel, shipped to production. Cross-platform mobile via React Native when a product needs it.",
    tags: [
      "TypeScript",
      "Next.js",
      "React",
      "React Native",
      "TanStack Query",
      "Go",
      "Postgres",
      "Tailwind",
    ],
  },
  {
    name: "Product Development",
    level: 4,
    description:
      "Scoping, prioritizing, and taking features from a rough idea to something real people use. Opinions on what to cut, what to ship, what to polish.",
    tags: ["roadmapping", "sprint planning", "UX & feature planning", "user research"],
  },
  {
    name: "E-commerce & Enterprise Integrations",
    level: 4,
    description:
      "B2B portals, commerce, and integrations into the systems enterprises actually run on. Tecci work for clients across manufacturing, agri-coops, real estate, and services.",
    tags: ["SSO", "enterprise integrations", "checkout & payments", "product search", "SEO"],
  },
  {
    name: "AI Systems",
    level: 3,
    description:
      "Two years deep into agents, retrieval, and fine-tuning. The LLM layer that increasingly sits on top of everything else.",
    tags: [
      "LangChain",
      "LangGraph",
      "MCP",
      "agents",
      "RAG",
      "fine-tuning",
      "Qdrant",
      "HuggingFace",
      "TensorFlow",
    ],
  },
  {
    name: "Data Engineering",
    level: 3,
    description:
      "Pipelines, warehouses, and ETL - moving data between systems, validating it, and making sure it's clean when it lands.",
    tags: ["Kafka", "Python", "data warehouses", "data lakes", "ETL", "event streams"],
  },
  {
    name: "Entrepreneurship",
    level: 3,
    description:
      "Co-founded UpCharge (served as founding CEO) and still running Tecci with my partners. Still sharpening this - learning the craft of getting products to market, finding their growth loops, and running real companies. Reps over credentials.",
    tags: ["startups", "go-to-market", "growth hacking", "fundraising", "operations"],
  },
  {
    name: "Engineering & Project Leadership",
    level: 2,
    description:
      "Product- and result-driven. I take a vision or goal and turn it into something shipped - bouncing between clients, partners, engineers, and my own code to make it all work.",
    tags: ["vision to delivery", "product-driven", "cross-functional", "stakeholder bridging"],
  },
  {
    name: "DevOps & Infrastructure",
    level: 2,
    description:
      "Self-hosted and cloud. Containers, orchestration, CI/CD, monitoring, backups, and the full production-readiness stack - enough to ship and keep things running.",
    tags: [
      "Docker",
      "Kubernetes",
      "AWS",
      "VPS management",
      "CI/CD",
      "observability",
      "caching",
      "load balancing",
      "serverless",
    ],
  },
];

export const MISSION = {
  lead: "My personal mission is to help fully automate as many jobs as I can, so humans are free to pursue their true passions.",
  body: [
    "Most people in the workforce today are unmotivated - there for the paycheck, not the work. The result is not just low productivity, but in my view a net-negative effect on value produced, as unmotivated individuals drag on their more efficient and driven colleagues.",
    "It's absurd that we still have \"generic office jobs\" whose daily work mostly consists of summarizing things, answering emails, sitting in meetings for the sake of meetings, or copy-pasting between systems. Humans aren't needed for this. We have the tech - let's fix it.",
    "Freed from these jobs, people could pour themselves into what actually matters to them: areas where they'd work day and night to make a real impact - in music, art, technology, games, business, or wherever else their spark lies.",
  ],
};

export const INTERESTS = [
  "Tech",
  "Startups",
  "LLMs",
  "AI agents",
  "Dev tools",
  "System architecture",
  "Workflow automation",
  "Data engineering",
  "Big data",
  "Open source",
  "Hackathons",
  "Homelabbing",
  "Politics",
  "Europe 🇪🇺",
  "Classical liberalism",
  "European federalism",
  "Economics",
  "Finance",
  "VC",
  "Personal freedom",
  "Parliamentary procedure",
  "Debates",
  "History",
  "Futurism",
  "City planning",
  "Public infrastructure",
  "Cycling",
  "Grand strategy games",
  "Craft beer",
  "Karaoke",
  "Techno",
] as const;

export const BIO_LEAD =
  "I'm Tim Borovkov, a founder and software engineer drawn to the hard problems at the intersection of tech, politics, and Europe's future. Born in Tallinn, raised in Helsinki - I've been shipping code since I was 12 and haven't stopped since. Started in Java, later Swift, today mainly TypeScript and Go.";

export const BIO_SECTIONS: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "Craft",
    paragraphs: [
      "I'm self-taught, and I've built most of what I know from the ground up. These days I work end-to-end - architecture, DevOps, data pipelines, backend, frontend, and the LLM and agent layer that's reshaping all of it. I also lead engineering teams, drive product development, and run projects from scope to ship.",
    ],
  },
  {
    heading: "Companies",
    paragraphs: [
      "Tecci is the software consultancy I've been running with my partners since 2019 - we build enterprise web apps, commerce, and integrations for Nordic companies. It takes roughly 30% of my hours.",
      "I also co-founded UpCharge, a power bank sharing network across Finland and Spain - once Finland's largest, today its second-biggest. As founding CEO I ran operations, growth, investor relations, and product, and led development of the mobile app, PWA, backend, and admin tools serving thousands of users across hundreds of venues. In early 2025 I stepped back from the active business role to go deeper on the AI wave - building new products like IRMIN, and spending two months in San Francisco to see firsthand what the industry's leaders are working on. I came back more determined to build than ever.",
    ],
  },
  {
    heading: "Life",
    paragraphs: [
      "The rest of my time goes into side projects - commercial and not, open and closed source, mostly in agentic AI and data engineering. The past couple of years have been defined by deep learning and growth: AI, LLMs, data, and leveling up as an engineer, architect, and founder. I work seven days a week, 80+ hours, and try never to end a day without shipping something - a feature, a fix, anything. No matter the jetlag, flight schedule, or hangover.",
      "About nine months out of the year, I work remotely while traveling the world - coding from cafés, beaches, and anywhere else with decent wifi. When I'm not on the road, I split time between Helsinki and Tallinn - Helsinki is home, Tallinn is where I retreat to focus.",
    ],
  },
  {
    heading: "Beliefs",
    paragraphs: [
      "When I'm not coding, you'll find me in political discussions. I'm a classical liberal and a European federalist 🇪🇺 - I advocate for free-market liberalism, open societies, and a more united, sovereign Europe. Tech is one of our most underused levers: the fastest way to build the scale and productivity Europe needs to stand on its own.",
    ],
  },
];
