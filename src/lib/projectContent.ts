import type { MDXContent } from "mdx/types";

// Long-form write-ups live in /projects/<slug>/index.mdx, separate from the UI.
const modules = import.meta.glob<{ default: MDXContent }>(
  "../../projects/*/index.mdx",
  { eager: true },
);

export function getProjectContent(slug: string): MDXContent | undefined {
  return modules[`../../projects/${slug}/index.mdx`]?.default;
}

// Optional projects/<slug>/application.mdx describes the hosted application.
// It is rendered inside the standard Interactive Application section.
const applicationModules = import.meta.glob<{ default: MDXContent }>(
  "../../projects/*/application.mdx",
  { eager: true },
);

export function getApplicationContent(slug: string): MDXContent | undefined {
  return applicationModules[`../../projects/${slug}/application.mdx`]?.default;
}
