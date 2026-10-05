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
  /** "contain" shows the whole image (for diagrams); the default "cover" fills the frame. */
  thumbnailFit?: "cover" | "contain";
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
    thumbnail: "project-thumbnails/bsc-data-science.jpg",
    thumbnailAlt:
      "Data Science Homepage title card over a background of falling green code.",
    summary: PLACEHOLDER_SUMMARY,
  },
  {
    slug: "credit-classification",
    title: "Credit Classification",
    category: "MSc Data Science / Module",
    order: 2,
    thumbnail: "project-thumbnails/credit-classification.jpg",
    thumbnailAlt:
      "Credit classification with machine learning: panels for logistic regression, perceptron and decision tree.",
    youtubeVideoId: "BdGzb_iidic",
    summary: PLACEHOLDER_SUMMARY,
  },
  {
    slug: "reinforcement-learning-supply-chain",
    title: "Reinforcement Learning in Supply Chain Management",
    category: "MSc Data Science / Dissertation",
    order: 3,
    thumbnail: "project-thumbnails/reinforcement-learning-supply-chain.png",
    thumbnailAlt:
      "Supply chain model diagram: two suppliers, two delivery routes and a warehouse, with the demand, order and inventory equations.",
    thumbnailFit: "contain",
    summary: PLACEHOLDER_SUMMARY,
  },
];

export function getProjectsNewestFirst(): Project[] {
  return [...projects].sort((a, b) => b.order - a.order);
}

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
