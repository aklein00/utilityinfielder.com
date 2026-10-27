# Project Ocean launch plan

Prepared 26 October 2026 for Art Klein.

## Architecture

Deploy `aklein00/Project-Ocean` as its own Vercel project. Keep the existing Utility Infielder hub deployment separate. Cloudflare continues to manage DNS for `utilityinfielder.com`.

| Public URL | Contents |
| --- | --- |
| `https://projectocean.utilityinfielder.com/` | New public welcome page |
| `/current/` | Current character foundry |
| `/current/proportions/` | Proportion Lab |
| `/river/` | River wardrobe studio |
| `/river/materials/` | Material Lab |

Keep all tools on this one origin so their links and browser storage work together. No database, API keys, or server environment variables are needed by the current public build.

## Prepared locally

- `Project-Ocean/public-site/`: responsive welcome page, alpha notice, tool links, and the new marketing artwork.
- `Project-Ocean/scripts/stage-public.mjs`: assembles only public content in root `dist/`, excluding the private dashboard and internal docs. Publishes the existing export compatibility guide because the app links to it; removes its links to unpublished planning documents. Excludes local exported character files.
- `Project-Ocean/package.json`: `build:public` builds both Vite workspaces and stages the public output.
- `Project-Ocean/vercel.json`: static deployment, `npm ci`, `npm run build:public`, output `dist`, and directory-style URLs.
- Hub carousel: new 1920 × 720 WebP, with matching alt text and center mobile crop. The current v6 artwork retains six connected figures with distinct outfits and long, narrow proportions, adds a blonde ponytail to the ivory-knit figure, and removes the wireframe study's hair. Earlier artwork is retained.
- Hub project grid: Project Ocean entry, currently WIP with no public link until the domain works.
- Hub project card wrapper: moved outside render to resolve an existing ESLint error encountered during verification.

No Git commits, GitHub pushes, Vercel deployments, or Cloudflare DNS changes have been made by this preparation.

## 1. Review and push the Ocean source

Ocean is at `/Users/arthurklein/Documents/Work/Project-Ocean`, with origin `https://github.com/aklein00/Project-Ocean.git`.

There were already uncommitted material integration edits when this work began. The public build uses that local source. Review those edits with their owning work before committing; this task does not certify or publish them. A Git-connected Vercel deployment sees only the committed source pushed to GitHub.

From the Ocean repository:

```sh
npm test
npm run build:public
git status --short
git diff
```

Commit the reviewed release source, including `public-site/`, `scripts/stage-public.mjs`, `vercel.json`, the package script and this guide. Push the intended production branch. Do not commit `dist/`, `.vercel/`, `node_modules/`, or credentials.

## 2. Create the Vercel project

1. Open Vercel → **Add New → Project** and import **aklein00/Project-Ocean**. If it is absent, grant the Vercel GitHub integration access to that repository.
2. Name the Vercel project `project-ocean` (or another available name).
3. Set **Root Directory** to the repository root (`./`). Both workspaces and the shared packages must be available to the build.
4. Use these settings; the committed `vercel.json` supplies the commands and output:

| Setting | Value |
| --- | --- |
| Framework preset | Other |
| Node.js version | 24.x |
| Install command | `npm ci` |
| Build command | `npm run build:public` |
| Output directory | `dist` |
| Environment variables | None required |
| Production branch | The reviewed release branch you pushed |

5. Deploy and open the assigned `*.vercel.app` URL. Confirm the welcome page, both tools, and both labs work before assigning the domain.
6. For a publicly accessible launch, check that Production deployment protection permits visitors without a Vercel login. Preview deployments can remain restricted.
7. In this **Ocean** project's **Settings → Domains**, add **projectocean.utilityinfielder.com**, assigned to Production. Copy the exact CNAME target Vercel displays for this hostname. It is project-specific; do not assume an older generic target or copy the hub's target.

Reference: [Vercel domain setup](https://vercel.com/docs/domains/working-with-domains/add-a-domain), [Vercel project configuration](https://vercel.com/docs/project-configuration).

## 3. Add the Cloudflare DNS record

Open Cloudflare → **utilityinfielder.com → DNS → Records → Add record**:

| Field | Value |
| --- | --- |
| Type | CNAME |
| Name | `projectocean` |
| Target | Exact CNAME target from the Ocean Vercel project's Domains screen |
| Proxy status | **DNS only** / gray cloud |
| TTL | Auto |

If that exact hostname already has an A, AAAA, or CNAME record, inspect it first and update the conflicting record rather than creating duplicates. Add any ownership-verification TXT record only if Vercel explicitly requests it, using the exact name and value shown.

Keep the existing nameservers, root domain records, email records, and other project subdomains as they are. A single explicit subdomain does not require a wildcard, a new Cloudflare zone, a Worker, Pages, or a nameserver transfer. Vercel serves the app and provisions HTTPS after verification; Cloudflare supplies DNS for this record.

Return to Vercel Domains and wait for **Valid Configuration** and a valid certificate. DNS updates may need time to propagate.

References: [Vercel with Cloudflare DNS-only](https://vercel.com/kb/guide/can-i-use-a-proxy-on-top-of-my-vercel-deployment), [Cloudflare DNS record instructions](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/).

## 4. Verify the public hostname

- Open the domain in a private browser window; confirm HTTPS works without a Vercel login.
- Visit `/`, `/current/`, `/current/proportions/`, `/river/`, `/river/materials/` directly and refresh each. There is intentionally no catch-all SPA rewrite.
- In Current, change a character name/body and use **Dress in River**. Confirm the same name and body arrive. Change clothing and return to Current.
- Export and re-import a JSON preset. Download a character file and confirm the export notes link works. Native import support remains subject to the existing compatibility matrix.
- Confirm `/docs/STATUS.md`, `/docs/WORKFLOW_REVIEW.md`, and `/app.js` return 404; the private dashboard is not published.
- Check the welcome page on a phone and the 3D tools on a desktop with WebGL.

Browser storage is scoped to each origin. Drafts saved at the old private `chatgpt.site` address or the temporary `vercel.app` address do not automatically move to the custom domain. Export JSON at the old address and import it at the new one.

## 5. Activate the hub links and publish its artwork

Once the custom domain is verified, update the **Project Ocean** entry in `utilityinfielder/src/lib/projects/index.ts`:

```ts
status: "live",
href: "https://projectocean.utilityinfielder.com",
isExternal: true,
isBeta: true,
```

In `utilityinfielder/src/components/carousel/deckSlides.ts`, add to the Ocean slide:

```ts
label: "Web alpha",
href: "https://projectocean.utilityinfielder.com",
```

Use the existing Beta badge for a live but unfinished tool; the carousel explicitly calls it a web alpha. Run `npm run lint` and `npm run build` in the hub, review/commit/push the hub changes, and verify its existing Vercel project deploys the new header and working links.

## Validation from this preparation

- Ocean: all 52 existing tests passed in both the temporary preview copy and the actual Ocean repository.
- Ocean: both Vite builds and public staging passed in the preview copy and the actual Ocean repository; output includes all five entry pages.
- Public packaging: all five HTML pages reference existing local assets. Verified that internal docs, dashboard scripts, and a sample local character export are excluded.
- Browser: welcome page, Current rendering, and both lab entry points checked; a named character was passed from Current to River successfully.
- Hub: lint has no errors after the project-card wrapper fix; four pre-existing Game Manager unused-variable warnings remain.
- Hub: production build and TypeScript checks passed. Existing metadata-base and edge-runtime notices remain.
- Preview: `homepage-preview.png` records the earlier v2 artwork in its homepage layout; the active image is now v6.
- Account configuration, DNS verification, production HTTPS and production visitor access must be checked after the manual deployment steps above.

## Artwork

See [ARTWORK.md](ARTWORK.md) for the full generation prompt and saved asset paths. Artwork was generated with the built-in image generation tool using Current and River screenshots as references.
