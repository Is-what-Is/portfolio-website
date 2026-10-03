import { Link, useParams } from "react-router";
import { Container } from "../components/layout/Container";
import { getProject } from "../data/projects";
import { site } from "../data/site";
import NotFoundPage from "./NotFoundPage";

export function meta({ params }: { params: { slug?: string } }) {
  const project = getProject(params.slug);
  return [
    { title: `${project?.title ?? "Project Not Found"} | ${site.name}` },
  ];
}

// Minimal shell so every card has a destination. The full section system
// (background, data, methodology, results and so on) arrives in Phase 3.
export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <NotFoundPage />;

  const links = [
    { label: "Source Repository", href: project.repositoryUrl },
    { label: "Open the Application", href: project.applicationUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <article>
      <Container className="pt-16 pb-24 sm:pt-22">
        <p className="label-caps mb-4 text-ink-muted">{project.category}</p>
        <h1 className="max-w-[22ch] text-[clamp(2rem,5vw,3.75rem)] leading-none font-extrabold tracking-[-0.02em] uppercase">
          {project.title}
        </h1>
        <p className="mt-8 max-w-prose text-ink-muted">{project.summary}</p>
        <p className="mt-4 max-w-prose text-ink-muted">
          [Placeholder] The full write-up for this project has not been added
          yet.
        </p>
        {links.length > 0 && (
          <ul className="mt-8 flex list-none flex-wrap gap-x-8 gap-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="label-caps inline-block py-2.5 hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        <Link
          to="/#projects"
          className="label-caps mt-12 inline-block py-2.5 hover:text-accent"
        >
          All Projects
        </Link>
      </Container>
    </article>
  );
}
