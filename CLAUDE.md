# Portfolio Website

Data science portfolio. Read `PROJECT_SPEC.md` before substantial changes.

## Commands

- `npm run dev` - local dev server
- `npm run typecheck` - route typegen and TypeScript check
- `npm run build` - static build to `build/client` (every route prerendered)
- `BASE_PATH=/portfolio-website/ npm run build` - build as served on GitHub Pages

## Architecture

- React Router (framework mode, `ssr: false`, prerendered), Vite, Tailwind v4, TypeScript.
- `src/data/projects.ts` is the project registry. Adding a record adds the card, the route and the prerendered page. Never hard-code card positions.
- `src/data/site.ts` holds site-wide copy and profile links.
- `src/styles/global.css` holds every design token (`@theme`). Components use tokens only.
- The frontend is static. Interactive applications are hosted elsewhere and linked through `applicationUrl`.

## Design (Direction B, "Slab and Hairline")

- Dark page, light square-cornered cards with a hard offset shadow, one green accent, Archivo for text, Courier New for the hero only.
- The accent green is never used as text on a light card (it fails contrast there).
- The project grid runs right to left so the newest project is top-right.
- The hero loop has no pause control (owner's decision). It must still collapse to the static version under `prefers-reduced-motion`.
- Reference images: `docs/design-references/`. Skills: `.claude/skills/`.

## Content rules

- Values in [square brackets] are placeholders. Do not invent biography, results, dates or URLs.

## Git

- Work on feature branches, conventional commit messages, pull requests into `main`.
- The owner is practising Git: explain the commands and let them commit and push.
