import type { Config } from "@react-router/dev/config";
import { projects } from "./src/data/projects";

// Static output only: every route is prerendered to HTML for GitHub Pages.
export default {
  appDirectory: "src",
  ssr: false,
  basename: process.env.BASE_PATH ?? "/",
  prerender: ["/", ...projects.map((project) => `/projects/${project.slug}`)],
} satisfies Config;
