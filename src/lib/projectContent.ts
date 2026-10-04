import type { MDXContent } from "mdx/types";

// Long-form write-ups live in /projects/<slug>/index.mdx, separate from the UI.
const modules = import.meta.glob<{ default: MDXContent }>(
  "../../projects/*/index.mdx",
  { eager: true },
);

export function getProjectContent(slug: string): MDXContent | undefined {
  return modules[`../../projects/${slug}/index.mdx`]?.default;
}
