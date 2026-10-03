# Portfolio Website

A data science portfolio: project write-ups, theory, application designs, and links to separately hosted web applications.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is written to `build/client`.

## Add a project

Add a record to `src/data/projects.ts` with the next `order` value and, optionally, a 16:10 thumbnail in `public/project-thumbnails/`. The newest project appears at the top right of the grid.

See `PROJECT_SPEC.md` for the full specification.
