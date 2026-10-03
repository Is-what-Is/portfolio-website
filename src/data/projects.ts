export type Project = {
  slug: string;
  title: string;
  /** Short line shown above the title, e.g. the course the project belongs to. */
  category: string;
  /** Position in the portfolio timeline: higher is newer. */
  order: number;
  /** ISO date, once known. */
  date?: string;
  /** Path under /public, 16:10, e.g. "project-thumbnails/credit-classification.webp". */
  thumbnail?: string;
  thumbnailAlt?: string;
  summary: string;
  repositoryUrl?: string;
  youtubeVideoId?: string;
  /** Link to the separately hosted web application, when one exists. */
  applicationUrl?: string;
};

const PLACEHOLDER_SUMMARY = "[Placeholder summary] To be supplied.";

// To add a project, append a record with the next `order` value.
// The grid, routes and prerendered pages all follow from this list.
export const projects: Project[] = [
  {
    slug: "bsc-data-science",
    title: "My First Project: Data Science Module",
    category: "BSc Economics and Finance",
    order: 1,
    summary: PLACEHOLDER_SUMMARY,
  },
  {
    slug: "credit-classification",
    title: "Credit Classification",
    category: "MSc Data Science / Module",
    order: 2,
    summary: PLACEHOLDER_SUMMARY,
  },
  {
    slug: "reinforcement-learning-supply-chain",
    title: "Reinforcement Learning in Supply Chain Management",
    category: "MSc Data Science / Dissertation",
    order: 3,
    summary: PLACEHOLDER_SUMMARY,
  },
];

export function getProjectsNewestFirst(): Project[] {
  return [...projects].sort((a, b) => b.order - a.order);
}

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
