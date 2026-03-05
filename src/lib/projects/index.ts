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
  /** Path to thumbnail image in /public, e.g. "/assets/images/projects/foo.png". null = show placeholder */
  image?: string | null;
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
    id: "datelight",
    name: "DateLight",
    description:
      "Decide on a date location in under 60 seconds. AI-curated venue picks based on vibe and radius.",
    status: "live",
    href: "https://datelight.utilityinfielder.com",
    isExternal: true,
    tags: ["tool", "AI", "maps"],
    image: "/assets/images/projects/datelight.png",
  },
  {
    id: "jobbybobby",
    name: "JobbyBobby",
    description:
      "A custom multi-agent AI job search system. JobbyBobby, Lois, and the Architect work together inside Cursor to organize the job search, scout for leads, advise on strategy, and build the application materials.",
    status: "live",
    href: "/jobbybobby",
    isExternal: false,
    tags: ["tool", "AI", "agents", "Cursor"],
    image: "/assets/images/projects/jobbybobby.png",
  },
  // {
  //   id: "game-manager",
  //   name: "Game Manager",
  //   description:
  //     "Tracks the status and progress of every project on this site. Filter, search, and inspect milestones, dependencies, and build status.",
  //   status: "live",
  //   href: "/game-manager",
  //   isExternal: false,
  //   tags: ["tool", "dashboard"],
  // },
  {
    id: "hello-whirled",
    name: "Hello Whirled",
    description:
      "A simple interactive 3D Planet Toy. Built with React, Vite, and TypeScript.",
    status: "coming-soon",
    href: null,
    isExternal: true,
    tags: ["3D", "game", "React", "TypeScript"],
    image: "/assets/images/projects/hellowhirled.png",
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
    image: "/assets/images/projects/ultraviolet.png",
  },
  {
    id: "bizzydad",
    name: "BizzyDad",
    description: "A life management app — balance work, family, and chaos.",
    status: "wip",
    href: null,
    isExternal: true,
    tags: ["game", "art"],
    image: "/assets/images/projects/bizzydad.png",
  },
  {
    id: "dirtbagz",
    name: "Dirtbagz",
    description: "A retro-futuristic robot card-collecting baseball game. Build a team of junkyard robots and play NES-style baseball.",
    status: "wip",
    href: null,
    isExternal: true,
    tags: ["game", "art", "cards"],
    image: "/assets/images/projects/dirtbagz.png",
  },
  {
    id: "gateaux",
    name: "Gateaux",
    description: "Bakery management game. Build, bake, and grow your empire.",
    status: "wip",
    href: null,
    isExternal: true,
    tags: ["game", "art"],
    image: "/assets/images/projects/gateaux.jpg",
  },
  {
    id: "roboruphio",
    name: "RoboRuphio",
    description: "A robot punk built with AI generation and traditional 3D modeling. Rigged, animated, and tested in character video clips.",
    status: "wip",
    href: null,
    isExternal: true,
    tags: ["character", "3D", "art"],
    image: "/assets/images/projects/roboruphio.jpg",
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
    image: "/assets/images/projects/artartvibes.png",
  },
];
