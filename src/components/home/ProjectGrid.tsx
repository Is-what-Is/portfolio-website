import type { Project } from "../../data/projects";
import { Container } from "../layout/Container";
import { ProjectCard } from "./ProjectCard";

/**
 * Expects projects sorted newest first. The grid runs right to left, so the
 * newest project lands top-right and older ones flow left, then down.
 * Keyboard and screen-reader order follow the same newest-to-oldest sequence.
 */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <Container className="pt-20 pb-24 sm:pt-26 sm:pb-28">
        <h2
          id="projects-heading"
          className="mb-10 text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95] font-extrabold tracking-[-0.03em] uppercase"
        >
          Projects
        </h2>
        {projects.length === 0 ? (
          <p className="text-ink-muted">Projects will appear here.</p>
        ) : (
          <ul
            dir="rtl"
            className="grid list-none grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <li key={project.slug} dir="ltr">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
