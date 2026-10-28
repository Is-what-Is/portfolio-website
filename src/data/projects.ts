export type Project = {
  slug: string;
  title: string;
  /** Short line shown above the title, e.g. the course the project belongs to. */
  category: string;
  /** Position in the portfolio timeline: higher is newer. */
  order: number;
  /** ISO date or year-month ("2024-11"), once known. Shown below the page title. */
  date?: string;
  /** End of the project, same format as `date`. Shown as "date – dateEnd". */
  dateEnd?: string;
  /** Path under /public, 16:10, e.g. "project-thumbnails/credit-classification.webp". */
  thumbnail?: string;
  thumbnailAlt?: string;
  /** "contain" shows the whole image (for diagrams); the default "cover" fills the frame. */
  thumbnailFit?: "cover" | "contain";
  /** Separate paragraphs with a blank line ("\n\n"). */
  summary: string;
  repositoryUrl?: string;
  /** Link text for the repository in the Source Code section. */
  repositoryLabel?: string;
  youtubeVideoId?: string;
  /** Link to the separately hosted web application, when one exists. */
  applicationUrl?: string;
  /**
   * The write-up holds all of the page content: the standard Video,
   * Interactive Application and Source Code sections are left out.
   */
  writeUpOnly?: boolean;
};

// To add a project, append a record with the next `order` value.
// The grid, routes and prerendered pages all follow from this list.
export const projects: Project[] = [
  {
    slug: "bsc-data-science",
    title: "My First Project: Data Science Module",
    category: "BSc Economics and Finance",
    order: 1,
    date: "2022-11",
    dateEnd: "2023-01",
    thumbnail: "project-thumbnails/bsc-data-science.jpg",
    thumbnailAlt:
      "Data Science Homepage title card over a background of falling green code.",
    writeUpOnly: true,
    summary:
      "As part of my BSc Economics and Finance at the University of Bristol, I chose to take a Data Science module where I developed a portfolio and a topical project showcasing visualisations through a website.\n\n" +
      "At the time, the UK Conservative Party was facing the end of its time in government, having been in power for 12 years. I chose to investigate and attempt to audit and measure the party's impact on the country over that period.",
  },
  {
    slug: "credit-classification",
    title: "Credit Classification",
    category: "MSc Data Science / Module",
    order: 2,
    date: "2024-11",
    thumbnail: "project-thumbnails/credit-classification.jpg",
    thumbnailAlt:
      "Credit classification with machine learning: panels for logistic regression, perceptron and decision tree.",
    youtubeVideoId: "BdGzb_iidic",
    repositoryUrl: "https://github.com/Is-what-Is/credit-classification/tree/main",
    repositoryLabel: "View Source Code",
    summary:
      "The project compared three machine learning classification methods for credit rating prediction: logistic regression, a perceptron and a decision tree. Logistic regression had the highest reported accuracy. The perceptron was second and the decision tree was third. The next stage of the project adds a random forest model and a Python web application for credit score classification.",
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
    youtubeVideoId: "3rEmRgLgxs0",
    repositoryUrl: "https://github.com/Is-what-Is/RL-in-SupplyChains",
    applicationUrl: "https://supply-chain-simulation.streamlit.app",
    repositoryLabel: "View the Research Code and Documentation",
    summary:
      "MSc dissertation investigating whether a Deep Q-Network agent can learn to adapt supplier allocation, delivery routing and safety stock decisions in a simulated supply chain exposed to disruptions.",
  },
];

export function getProjectsNewestFirst(): Project[] {
  return [...projects].sort((a, b) => b.order - a.order);
}

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
