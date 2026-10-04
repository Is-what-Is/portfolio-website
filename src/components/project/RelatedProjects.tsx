import { Link } from "react-router";
import type { Project } from "../../data/projects";

export function RelatedProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <ul className="list-none pl-0">
      {projects.map((project) => (
        <li key={project.slug} className="border-b border-line last:border-b-0">
          <Link
            to={`/projects/${project.slug}`}
            className="group block py-4 no-underline"
          >
            <span className="label-caps block text-ink-muted">
              {project.category}
            </span>
            <span className="text-lg font-bold group-hover:text-accent">
              {project.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
