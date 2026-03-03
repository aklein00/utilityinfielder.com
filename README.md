# utilityinfielder.com — Planning Doc

**Purpose:** Sister site to artkleinart.com. A playground for presentable vibecoded projects — playable game prototypes, tools, and experiments that don't belong in the professional portfolio but are worth sharing.

**Concept:** Where artkleinart.com shows the career, utilityinfielder.com shows the curiosity. The two sites link to each other.

---

## Hub Architecture

**This repository is the Main Root Site only.**

utilityinfielder.com acts as a hub that links out to each project on its own subdomain. Future projects live in separate repositories and are deployed independently to Vercel.

```
utilityinfielder.com/               ← this repo (hub homepage, project grid)
  hellowhirled.utilityinfielder.com ← separate repo, separate Vercel project
  ultraviolet.utilityinfielder.com  ← separate repo, separate Vercel project
  datelight.utilityinfielder.com    ← separate repo, separate Vercel project
  [project].utilityinfielder.com    ← pattern for all future projects
```

### Rules for AI agents working in this repo:
- Do NOT build game or tool code here. This repo is the hub only.
- Each new project gets its own subdomain repo.
- To surface a new project on the homepage, add its metadata to `src/lib/projects/index.ts`.
- The `subdomain` field in that file is null until the project is deployed — then set it to the full URL.
- Status values: `live` | `coming-soon` | `wip`

---

## Stack

- **Framework:** Next.js 15 (App Router), TypeScript
- **Styles:** Tailwind CSS + CSS custom properties (dark palette)
- **Version control:** Git + GitHub
- **Hosting:** Vercel (auto-deploys on push, HTTPS)
- **Domain:** `utilityinfielder.com`

See `artkleinart.com/GIT_AND_VERCEL_GUIDE.md` for the full deployment walkthrough — same steps apply.

---

## Folder Structure

```
utilityinfielder/
├── public/
│   └── assets/images/           ← project screenshots, hero images
├── src/
│   ├── app/
│   │   ├── layout.tsx            ← root layout, metadata, fonts
│   │   ├── page.tsx              ← homepage (project card grid)
│   │   └── globals.css           ← Tailwind + CSS vars (dark palette)
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Badge.tsx         ← Live / Coming Soon / WIP status pill
│   │   │   └── ProjectCard.tsx   ← project tile with image, tags, status
│   │   └── layout/
│   │       ├── SiteHeader.tsx    ← site nav
│   │       └── SiteFooter.tsx    ← cross-link to artkleinart.com
│   └── lib/
│       ├── utils.ts              ← cn() and shared helpers
│       └── projects/
│           └── index.ts          ← ALL project metadata lives here
├── README.md
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Why a Separate Site

artkleinart.com is a professional portfolio — it needs to stay clean and focused on the work that gets you hired. But the vibecoded games (BizzyDad, Dirtbagz, Gateaux, RoboRuphio, and future projects) are real work worth showing. They tell a story about what you can build solo with an AI workflow.

The separation lets you say: "Here's my craft portfolio. Here's my playground." Both are real. Neither undermines the other.

---

## Projects to House

| Project | Status | Notes |
|---------|--------|-------|
| **Hello Whirled** | Playable — needs deployment | Interactive 3D planet game w/ basketball physics. React + Vite + TypeScript + Venus SDK. Path: `~/Documents/Work/Side/HelloWhirled` |
| **Ultraviolet** | Playable — needs deployment | 3D endless runner, purple blob spreads color through grey city. Three.js + Venus SDK. Path: `~/Documents/Work/Side/Ultraviolet` |
| **DateLight** | In Progress | AI-powered date spot finder. Decide on a date location in under 60 seconds. Venue search + AI curation (Gemini) + Mapbox. Phase 1 prototype. Path: `~/Documents/Work/Feb2026/DateLight` |
| **BizzyDad** | Art done, no playable build yet | Life management game |
| **Dirtbagz** | Art done, no playable build yet | Card-collecting game |
| **Gateaux** | Art done, no playable build yet | Bakery management game |
| **RoboRuphio** | Character only | Robot character study |
| **artartvibes mini-games** | Brainstorm only | Career mini-games project — see section below |
| **Future vibecoded games** | — | Add here as built |

---

## Completed Projects — How to Show Them

Both Hello Whirled and Ultraviolet are fully playable. Neither is currently deployed anywhere publicly visible. Here are the options:

### Primary Path: run.game (Venus platform)

Both projects already have Venus SDK integrated and are built for the Venus/run.game mobile platform. This is the most complete deployment path.

**Hello Whirled:**
```bash
cd ~/Documents/Work/Side/HelloWhirled
npm install
npm run build         # TypeScript + Vite build → dist/
venus login           # If not already authenticated
venus publish         # Deploy to run.game (unlisted)
venus publish --public  # Make discoverable on Explore tab
```

**Ultraviolet:**
```bash
cd ~/Documents/Work/Side/Ultraviolet
venus login
venus publish         # No build step required — deploys directly
venus publish --public
```

Full Venus CLI reference: `~/Documents/Work/Side/Ultraviolet/claude.md` (has deployment checklist, monetization options, API docs).

### Secondary Path: Vercel (self-hosted, always-on link)

Vercel gives you a permanent shareable URL that works in any browser — useful for sending to employers, embedding on utilityinfielder.com, or linking from artkleinart.com.

**Hello Whirled (Vite project):**
1. `npm run build` → creates `dist/` folder
2. Push project to a GitHub repo (`hello-whirled`)
3. Import repo in Vercel dashboard → auto-detects Vite → deploys
4. The Venus SDK will run in mock mode when not inside the Venus app — game should still function

**Ultraviolet (no build step):**
1. Push the project folder to GitHub (`ultraviolet-game`)
2. Set Vercel root directory to project root, output directory to `.` (or wherever index.html lives)
3. Done — Three.js games run fine as static files

### Tertiary Path: itch.io

Good for discoverability and community play. Upload the built HTML5 game as a `.zip`, set to "HTML" game type, embed on utilityinfielder.com via iframe. Free.

### Recommendation

**Do this when you have 2 hours:**
1. Deploy Ultraviolet to Vercel first (simplest — no build step, already polished)
2. Then Hello Whirled to Vercel
3. Add both to utilityinfielder.com project grid with screenshots
4. Link from artkleinart.com prototypes section

**Do this when you're employed and have breathing room:**
- Publish both to run.game publicly
- Add Venus monetization (rewarded ads on Ultraviolet)

---

## artartvibes — Career Mini-Games Project

**Concept:** One small 3D browser mini-game for each major game on Art's career list. A fun project for the job search period that also demonstrates technical range with vibe-coding tools.

**Brainstorm file:** `/Users/arthurklein/Documents/Work/Side/Feb2026/artartvibes/MiniGamesBrainstorm.md`

**Games planned (from brainstorm):**

| Game | Mini-Game Concept |
|------|-------------------|
| **NFL Clash** | "The 2-Option Drive" — Run or Pass buttons, swipe to dodge/time throws |
| **NBA Clash** | "The 1v1 Duel" — Shot release meter, swipe-to-drive mechanic |
| **Horizon Worlds** | "The Interactive Diorama" — Explore mode, click hotspots for shader effects + lore |
| **The Sims 4** | "Quick-Swap Studio" — Rotating character, click to cycle hair/shirt/pants variations |
| **Episode** | "Choice & Reaction" — Single narrative beat, two choices trigger 3D animation |
| **Pictionary** | "3D Silhouette Guess" — Rotating silhouette gains texture over 10s, 3-choice guess |
| **Gods & Heroes** | "The Arena Deflector" — Click incoming arrows to trigger Block animations |
| **High School Musical** | "Radial Rhythm" — Circular rhythm game, expanding rings hit corner zones |

**Why this matters:**
- Fun during the job search — builds momentum without pressure
- Real reps with three.js/React/vibe-coding workflow
- Each mini-game is a self-contained portfolio piece
- Natural content for artartvibes.com or as utilityinfielder.com sub-pages

**Priority:** Low for now. Job search first. But a great "active project" to mention in interviews.

**When to start:** After artkleinart.com Phase 1 is live and you've got 5+ applications in. Start with whichever game you're most excited about — probably NFL Clash or NBA Clash since those have the most familiar rules.

---

## Link Between Sites

**artkleinart.com → utilityinfielder.com:**
In `prototypes.html`, each project section will eventually include a "Try it →" or "Play it →" button linking to the live game on utilityinfielder.com.

**utilityinfielder.com → artkleinart.com:**
Footer + nav link: "Full portfolio at artkleinart.com"

---

## Hosting Playable Games

For HTML5 games (built in Cursor/Godot/etc.), two options:

1. **Self-hosted on Vercel:** Drop the game's build output into the project folder, push to GitHub, done. Free and simple.
2. **itch.io embed:** Upload to itch.io (free), embed with an `<iframe>` on utilityinfielder.com. Best for games that need a leaderboard or download option.

Recommendation: **itch.io for games that are shareable, Vercel directly for prototypes/tools**.

---

## Domain Registration

1. Go to [Namecheap](https://www.namecheap.com) or [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)
2. Search `utilityinfielder.com`
3. Register (~$10–12/yr)
4. Follow the same DNS → Vercel flow in `artkleinart.com/GIT_AND_VERCEL_GUIDE.md`

---

## When to Do This

**Now active.** Hub site initialized with Next.js + Tailwind. Coming Soon homepage is live locally.

**Next steps:**
1. Deploy the hub to Vercel (`utilityinfielder.com`)
2. Deploy Ultraviolet + Hello Whirled to their subdomains
3. Add screenshots to `public/assets/images/` and wire into project cards

---

## Change Log

| Date | Note |
|------|------|
| 2026-03-03 | Initialized as Next.js 15 (App Router) project. Hub architecture established. Coming Soon homepage with project card grid. DateLight added. |
| 2026-02-26 | Planning doc created |
| 2026-02-21 | Added Hello Whirled + Ultraviolet to project table with deployment advice; added artartvibes mini-games section |
