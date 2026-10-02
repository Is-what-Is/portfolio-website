# Data Science Portfolio - Initial Project Specification

## 1. Project intent

Build a professional, technically credible personal portfolio website centred on data science projects.

The site should feel like a data scientist / quantitative researcher / technical builder's portfolio rather than a generic developer template. It should combine:
- project writing and technical explanation;
- links to source repositories;
- embedded YouTube explanations;
- interactive web applications derived from selected projects;
- a structure that can grow as new projects are added.

The first implementation should prioritise a polished, fast, accessible static portfolio. Interactive Python applications must be architected so they can be added without forcing the whole portfolio onto a Python server.

## 2. Non-negotiable design direction

### Design references

The project root will contain five visual reference images:

- `design1`
- `design2`
- `design3`
- `design4`
- `project_box_thumbnail_example`

Treat these as visual references, not assets to copy blindly.

Before implementing the UI:
1. Inspect all five references.
2. Extract recurring visual characteristics:
   - layout/composition;
   - typography;
   - colour relationships;
   - borders;
   - shadows/elevation;
   - spacing;
   - card proportions;
   - image treatment;
   - hover states;
   - motion;
   - density;
   - navigation/header treatment.
3. Produce a short design-read before coding.
4. Reconcile the references with the written brief below.
5. Do not simply average the references. Identify a coherent design language.

Use the Taste skill as the design-direction authority and the Web Design Guidelines skill as the quality/accessibility/performance review authority.

Do not default to generic AI aesthetics, purple gradients, excessive glassmorphism, generic three-card layouts, or a template that could belong to any portfolio.

## 3. Homepage

### Hero / animated coding statement

At the top of the homepage create a prominent animated text area.

Use `Courier New` or a visually equivalent monospace fallback.

The animation should simulate someone typing and deleting code-like text.

Sequence:

1. Type:
   `Is-what-Is`
2. Backspace/delete it.
3. Type:
   `Hypothesise · Discover · Design`
4. Backspace/delete it.
5. Type:
   `Test · Tune · Improve`
6. Backspace/delete it.
7. Type:
   `Deploy · Observe · Act`
8. Backspace/delete it.
9. Loop.

The typed text should be green.

Animation requirements:
- smooth typing/deleting cadence;
- visible cursor treatment;
- no layout jumping;
- responsive behaviour on narrow screens;
- respect `prefers-reduced-motion`;
- reduced-motion mode should display a static meaningful version rather than running an infinite animation.

Do not make the animation dominate the site's usability.

## 4. Introduction ribbon

Immediately below the hero, create a horizontal ribbon / rectangular introduction panel.

Purpose:
- introduce the portfolio owner;
- explain what the website is;
- establish that this is a collection of data science projects, technical writing and interactive applications.

The final personal wording can be supplied later. Use temporary content clearly marked as placeholder content rather than inventing biographical facts.

## 5. Project grid

Create a responsive project grid.

Desktop:
- 3 columns.

Tablet:
- 2 columns.

Mobile:
- 1 column.

Project cards should:
- contain a project thumbnail;
- contain the project title;
- optionally contain a short category/tag line;
- link to a dedicated project page;
- visually lift from the page background;
- use deliberate shadow/elevation;
- have polished hover/focus states;
- maintain consistent image aspect ratio;
- have accessible keyboard focus;
- preserve readable titles at all viewport sizes.

The cards should feel like physical/raised objects emerging from the page background rather than flat rectangles.

### Ordering rule

New projects are inserted at the top of the portfolio.

The desired desktop visual ordering is:

older ... | older | newest
older ... | older | ...
...

Therefore, the newest project occupies the top-right position, with older projects moving left and then down as additional projects are added.

Do not hard-code individual card positions. Model project ordering as data so that adding a new project automatically changes the layout.

The exact CSS grid direction should be tested visually to ensure the newest item lands top-right.

## 6. Initial projects

Create the following three project records:

1. `My first project: BSc Economics and Finance - Data Science module`
2. `MSc Data Science (module): Credit Classification`
3. `MSc Data Science (dissertation): Reinforcement Learning in Supply Chain Management`

Each project should have:
- slug;
- title;
- thumbnail;
- short description placeholder;
- category;
- date/order field;
- repository URL placeholder;
- project page route.

Do not invent repository URLs.

## 7. Project detail pages

Every project card should open a dedicated project page.

A project page should support:

1. Title
2. Short project summary
3. Background / motivation
4. Problem statement
5. Data
6. Methodology
7. Theoretical foundations
8. Technical implementation
9. Results
10. Visualisations
11. Discussion / limitations
12. Lessons learned
13. GitHub repository link
14. YouTube explanation
15. Interactive application, when one exists
16. Related projects

The page should distinguish between:
- theoretical explanation;
- implementation details;
- empirical results;
- interactive demonstrations.

Do not create fake results or claims. Use clearly marked placeholders until real project content is supplied.

## 8. YouTube integration

YouTube videos must be embedded directly on project pages rather than represented only as links.

Use responsive iframe embeds.

Requirements:
- lazy-load when appropriate;
- preserve aspect ratio;
- provide accessible title text;
- avoid causing cumulative layout shift;
- do not autoplay with sound;
- allow the video to remain usable on mobile.

The project data model should store a YouTube video ID or canonical URL rather than hard-coding embeds into individual page components.

## 9. Interactive data science applications

The portfolio should support applications that are real working tools, not screenshots or fake UI.

Initial conceptual application:

### Markowitz Portfolio Optimisation

Frontend:
- search for stock/portfolio tickers;
- allow a maximum of 20 stocks;
- show selected securities clearly;
- allow removal/editing;
- submit portfolio to backend;
- display optimisation results;
- display efficient/Markowitz frontier;
- display portfolio weights;
- present relevant risk/return statistics.

Backend:
- Python;
- retrieve market data through an appropriate Yahoo Finance-compatible mechanism;
- validate ticker input;
- calculate returns;
- calculate covariance;
- perform portfolio optimisation;
- calculate efficient frontier;
- return structured JSON to the frontend.

Important:
- never expose API credentials/secrets in frontend code;
- never trust frontend validation alone;
- implement backend input validation;
- implement reasonable request limits;
- handle unavailable/invalid tickers gracefully;
- handle insufficient historical data;
- clearly distinguish educational portfolio optimisation from financial advice;
- make the application architecture reusable for future data-science applications.

Do not implement financial calculations with fake placeholder values once the application becomes functional.

## 10. Recommended technical architecture

Use a split architecture:

### Frontend

Recommended:
- React
- TypeScript
- Vite
- Tailwind CSS
- CSS variables/design tokens
- Motion only where useful

Reason:
- GitHub Pages is static hosting;
- React gives a strong component model for interactive portfolio pages;
- Vite produces static assets suitable for GitHub Pages;
- TypeScript makes the project easier to maintain as applications become more complex.

Do not introduce Next.js server-side functionality that requires a Node server if the initial deployment target remains GitHub Pages.

### Static hosting

Deploy the portfolio frontend to GitHub Pages using GitHub Actions.

The build should run automatically after an approved push/merge to the production branch.

### Backend

Keep Python APIs separate from GitHub Pages.

Preferred conceptual boundary:

Browser
    |
    | HTTPS
    v
Static React portfolio on GitHub Pages
    |
    | REST/JSON API
    v
Python application backend
    |
    +--> market data provider
    |
    +--> optimisation/statistics code
    |
    +--> future databases / model services / LLM services

The backend can be hosted on a Python-friendly service or Cloudflare where the specific Python workload is compatible.

Cloudflare is a viable future platform for Python Workers, APIs, secrets, storage and AI-related services, but package/runtime compatibility must be checked for heavier Python data-science dependencies before committing the Markowitz backend to Workers.

## 11. Future MCP / LLM architecture

The website should not initially depend on an LLM.

Design the application boundary so future applications can add:

Frontend
    |
API/backend
    |
application/service layer
    |
MCP/LLM integration

Possible future uses:
- natural-language analysis of project datasets;
- an AI assistant explaining project methodology;
- interactive data-science tutoring;
- LLM-assisted portfolio/project exploration;
- agents that retrieve project documentation;
- controlled tools for querying application data.

MCP servers should be treated as backend/infrastructure components, not something exposed directly to anonymous browser users without authentication and authorisation.

Never place private MCP credentials or LLM API keys in browser JavaScript.

## 12. Repository structure

Use a structure similar to:

/
├── .claude/
│   └── skills/
├── .github/
│   └── workflows/
├── public/
│   ├── images/
│   │   └── design-references/
│   └── project-thumbnails/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── styles/
│   ├── lib/
│   └── main.tsx
├── projects/
│   ├── bsc-data-science/
│   ├── credit-classification/
│   └── reinforcement-learning-supply-chain/
├── backend/
│   └── README.md
├── tests/
├── CLAUDE.md
├── README.md
└── PROJECT_SPEC.md

Keep project content/data separate from UI components wherever practical.

## 13. Project data model

Prefer a data-driven project registry.

Conceptual example:

```ts
type Project = {
  slug: string;
  title: string;
  category: string;
  date: string;
  thumbnail: string;
  summary: string;
  repositoryUrl?: string;
  youtubeVideoId?: string;
  applicationUrl?: string;
};
```

Adding a project should primarily require adding a project record and content rather than editing the grid component.

## 14. Design system

Create a small design-token layer for:
- page background;
- surface;
- elevated surface;
- primary text;
- secondary text;
- accent;
- border;
- shadow;
- radius;
- spacing;
- content width;
- animation timing.

Do not scatter arbitrary values throughout components.

The exact colours should be inferred from the reference images and the written brief, then documented.

## 15. Accessibility

Required:
- semantic HTML;
- keyboard navigation;
- visible focus states;
- appropriate heading hierarchy;
- alt text for meaningful images;
- decorative images marked appropriately;
- sufficient colour contrast;
- accessible embedded video titles;
- reduced-motion support;
- responsive text;
- controls with accessible labels.

Test keyboard navigation before considering the homepage complete.

## 16. Performance

Target:
- fast initial load;
- optimised project thumbnails;
- lazy-load below-the-fold media;
- avoid unnecessary JavaScript;
- avoid heavy animation libraries unless they materially improve the design;
- reserve dimensions for images/video embeds;
- test Lighthouse/Core Web Vitals.

Do not add visual effects that materially degrade mobile performance.

## 17. Git workflow

The purpose of this project includes practising professional Git/GitHub development.

Use:

`main`
- production-ready code.

Feature branches:
- `feature/homepage`
- `feature/project-pages`
- `feature/markowitz-app`
- etc.

Typical workflow:

```bash
git checkout -b feature/homepage
# make changes
git add .
git commit -m "feat: build portfolio homepage"
git push -u origin feature/homepage
```

Then open a pull request on GitHub.

After review/testing:
- merge feature branch into `main`;
- GitHub Actions deploys the production build.

Do not make every change directly on `main`.

Use meaningful conventional-style commit messages where practical:
- `feat:`
- `fix:`
- `docs:`
- `style:`
- `refactor:`
- `test:`
- `chore:`

## 18. Claude Code development protocol

Before making substantial changes:
1. Read `PROJECT_SPEC.md`.
2. Read `CLAUDE.md`.
3. Inspect the current repository.
4. Inspect relevant reference images.
5. Identify existing patterns before creating new ones.
6. Make the smallest coherent change.
7. Run the relevant checks.
8. Review the rendered result.
9. Check responsive behaviour.
10. Check accessibility.
11. Check reduced-motion behaviour for animated features.
12. Summarise the change and identify files changed.

Never overwrite working functionality unnecessarily.

When uncertain about a design decision, use the supplied reference images and project brief rather than inventing a generic portfolio pattern.

## 19. Skill usage

This project should use:
- Taste / `design-taste-frontend` skill for design direction;
- Web Design Guidelines skill for UI quality review;
- MarkItDown MCP for converting source documents into concise Markdown when useful.

Skills should be invoked when relevant rather than dumping their full instructions into every prompt.

Use the project's `.claude/skills/` directory for project-specific skills that should be version-controlled.

## 20. Definition of done for the first milestone

Milestone 1 is complete when:

- React/Vite project runs locally;
- Git repository is connected to GitHub;
- GitHub Actions deploys the site;
- GitHub Pages serves the production frontend;
- homepage hero animation works;
- reduced-motion behaviour works;
- introduction ribbon exists;
- three initial project cards exist;
- newest-first/rightmost ordering is implemented from data;
- cards link to project pages;
- project pages have the agreed content structure;
- YouTube embed component exists;
- repository links are data-driven;
- site is responsive;
- keyboard navigation works;
- major text/image contrast issues are resolved;
- reference designs have visibly influenced the implementation;
- no fake personal biography or project results have been invented.

## 21. Important implementation rule

Do not jump directly into building the entire website.

Work incrementally:

Phase 1:
- inspect references;
- establish design direction;
- scaffold application.

Phase 2:
- build homepage shell;
- hero;
- introduction;
- project grid.

Phase 3:
- build reusable project page system.

Phase 4:
- add YouTube embed component.

Phase 5:
- establish backend interface contract.

Phase 6:
- build Markowitz application.

Phase 7:
- production deployment, custom domain, monitoring and performance review.

At each phase, keep the site runnable.

## 22. First Claude Code task

Start by inspecting:
- this specification;
- `CLAUDE.md` if present;
- all design reference files.

Do not write application code yet.

First return:
1. the inferred design direction;
2. the proposed design-token system;
3. the proposed component architecture;
4. the proposed repository structure;
5. any important conflicts between the written brief and the reference images;
6. a concise implementation plan.

Then wait for approval before scaffolding the UI.
