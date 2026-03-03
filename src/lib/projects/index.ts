export type ProjectStatus = "live" | "coming-soon" | "wip";

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  /**
   * Where the project lives when clicked.
   * - Internal routes: relative path, e.g. "/jobbybobby"
   * - External subdomains: full URL, e.g. "https://hellowhirled.utilityinfielder.com"
   * - null: not yet deployed, card is not clickable
   */
  href: string | null;
  /** true = opens in new tab (external subdomain), false = internal Next.js route */
  isExternal: boolean;
  tags: string[];
}

/**
 * Single source of truth for all projects on utilityinfielder.com.
 *
 * Two project types live here:
 *   1. Internal pages — housed in this repo under src/app/[slug]/
 *      href: "/slug", isExternal: false
 *
 *   2. Subdomain projects — separate repos, separate Vercel deployments
 *      href: "https://slug.utilityinfielder.com", isExternal: true
 *
 * To surface a new project: add an entry here. Set href to null until deployed.
 * When live, set the href and flip status to "live".
 */
export const projects: Project[] = [
  {
    id: "jobbybobby",
    name: "JobbyBobby",
    description:
      "A multi-agent AI job search system built for a 6-week runway. Bobby, Lois, and the Architect work together inside Cursor.",
    status: "live",
    href: "/jobbybobby",
    isExternal: false,
    tags: ["tool", "AI", "agents", "Cursor"],
  },
  {
    id: "game-manager",
    name: "Game Manager",
    description:
      "Tracks the status and progress of every project on this site. Built to be uploaded — content coming soon.",
    status: "coming-soon",
    href: "/game-manager",
    isExternal: false,
    tags: ["tool", "dashboard"],
  },
  {
    id: "hello-whirled",
    name: "Hello Whirled",
    description:
      "Interactive 3D planet game with basketball physics. Built with React, Vite, and TypeScript.",
    status: "coming-soon",
    href: null,
    isExternal: true,
    tags: ["3D", "game", "React", "TypeScript"],
  },
  {
    id: "ultraviolet",
    name: "Ultraviolet",
    description:
      "Endless runner where a purple blob spreads color through a grey city. Three.js.",
    status: "coming-soon",
    href: null,
    isExternal: true,
    tags: ["3D", "game", "Three.js"],
  },
  {
    id: "datelight",
    name: "DateLight",
    description:
      "Decide on a date location in under 60 seconds. AI-curated venue picks based on vibe and radius.",
    status: "wip",
    href: null,
    isExternal: true,
    tags: ["tool", "AI", "maps"],
  },
  {
    id: "bizzydad",
    name: "BizzyDad",
    description: "Life management game — balance work, family, and chaos.",
    status: "wip",
    href: null,
    isExternal: true,
    tags: ["game", "art"],
  },
  {
    id: "dirtbagz",
    name: "Dirtbagz",
    description: "Card-collecting game with hand-drawn character art.",
    status: "wip",
    href: null,
    isExternal: true,
    tags: ["game", "art", "cards"],
  },
  {
    id: "gateaux",
    name: "Gateaux",
    description: "Bakery management game. Build, bake, and grow your empire.",
    status: "wip",
    href: null,
    isExternal: true,
    tags: ["game", "art"],
  },
  {
    id: "roboruphio",
    name: "RoboRuphio",
    description: "A robot character study. Fully rigged, fully vibed.",
    status: "wip",
    href: null,
    isExternal: true,
    tags: ["character", "3D", "art"],
  },
  {
    id: "artartvibes",
    name: "artartvibes",
    description:
      "A mini-game for every major title in Art's career. One browser game per franchise.",
    status: "wip",
    href: null,
    isExternal: true,
    tags: ["game", "series", "Three.js"],
  },
];
