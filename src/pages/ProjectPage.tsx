import "katex/dist/katex.min.css";
import { Link, useParams } from "react-router";
import { Container } from "../components/layout/Container";
import { ClassificationReport } from "../components/project/ClassificationReport";
import { Figure } from "../components/project/Figure";
import { Placeholder } from "../components/project/Placeholder";
import { ProjectSection } from "../components/project/ProjectSection";
import { RelatedProjects } from "../components/project/RelatedProjects";
import { TableScroll } from "../components/project/TableScroll";
import { YouTubeEmbed } from "../components/project/YouTubeEmbed";
import { getProject, getProjectsNewestFirst } from "../data/projects";
import { site } from "../data/site";
import { getApplicationContent, getProjectContent } from "../lib/projectContent";
import NotFoundPage from "./NotFoundPage";

export function meta({ params }: { params: { slug?: string } }) {
  const project = getProject(params.slug);
  return [
    { title: `${project?.title ?? "Project Not Found"} | ${site.brand}` },
    ...(project ? [{ name: "description", content: project.summary }] : []),
  ];
}

// "2024-11" or "2024-11-05" -> "November 2024". UTC, so the prerendered
// text does not depend on the build machine's time zone.
function formatMonthYear(isoDate: string) {
  const [year, month] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year, (month || 1) - 1)).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

const actionLink =
  "label-caps inline-block border border-line px-5 py-3.5 no-underline hover:border-accent hover:text-accent";

// Components available inside every projects/<slug>/index.mdx file.
const mdxComponents = {
  Section: ProjectSection,
  Placeholder,
  Figure,
  TableScroll,
  ClassificationReport,
};

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <NotFoundPage />;

  const Content = getProjectContent(project.slug);
  const ApplicationContent = getApplicationContent(project.slug);
  const related = getProjectsNewestFirst().filter(
    (other) => other.slug !== project.slug,
  );

  return (
    <article>
      <Container className="pt-16 pb-24 sm:pt-22">
        <header className="pb-12">
          <p className="label-caps mb-4 text-ink-muted">{project.category}</p>
          <h1 className="max-w-[22ch] text-[clamp(2rem,5vw,3.75rem)] leading-none font-extrabold tracking-[-0.02em] break-words uppercase">
            {project.title}
          </h1>
          {project.date && (
            <p className="label-caps mt-5 text-ink-muted">
              <time dateTime={project.date}>{formatMonthYear(project.date)}</time>
              {project.dateEnd && (
                <>
                  {" – "}
                  <time dateTime={project.dateEnd}>
                    {formatMonthYear(project.dateEnd)}
                  </time>
                </>
              )}
            </p>
          )}
          <div className="mt-8 max-w-prose space-y-4 text-lg text-ink-muted">
            {project.summary.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {(project.repositoryUrl || project.applicationUrl) && (
            <ul className="mt-8 flex list-none flex-wrap gap-4">
              {project.applicationUrl && (
                <li>
                  <a href={project.applicationUrl} className={actionLink}>
                    Open the Application
                  </a>
                </li>
              )}
              {project.repositoryUrl && (
                <li>
                  <a href={project.repositoryUrl} className={actionLink}>
                    Source Repository
                  </a>
                </li>
              )}
            </ul>
          )}
        </header>

        {Content ? (
          <Content components={mdxComponents} />
        ) : (
          <Placeholder>The write-up for this project has not been added yet.</Placeholder>
        )}

        {!project.writeUpOnly && (
          <>
            <ProjectSection title="Video Explanation" kind="context">
              {project.youtubeVideoId ? (
                <YouTubeEmbed
                  video={project.youtubeVideoId}
                  title={`Video explanation: ${project.title}`}
                />
              ) : (
                <Placeholder>A video explanation will be embedded here.</Placeholder>
              )}
            </ProjectSection>

            <ProjectSection title="Interactive Application" kind="interactive">
              {project.applicationUrl ? (
                <>
                  {ApplicationContent ? (
                    <ApplicationContent components={mdxComponents} />
                  ) : (
                    <p>
                      This project has a working application, hosted separately
                      from this site.
                    </p>
                  )}
                  <p>
                    <a href={project.applicationUrl} className={actionLink}>
                      Open the Application
                    </a>
                  </p>
                </>
              ) : (
                <Placeholder>
                  No application is linked yet. When one exists, its link appears
                  here.
                </Placeholder>
              )}
            </ProjectSection>

            <ProjectSection title="Source Code" kind="implementation">
              {project.repositoryUrl ? (
                <p>
                  <a href={project.repositoryUrl} className={actionLink}>
                    {project.repositoryLabel ?? "Source Repository"}
                  </a>
                </p>
              ) : (
                <Placeholder>The repository link has not been added yet.</Placeholder>
              )}
            </ProjectSection>
          </>
        )}

        <ProjectSection title="Related Projects" kind="context">
          <RelatedProjects projects={related} />
        </ProjectSection>

        <Link
          to="/#projects"
          className="label-caps mt-6 inline-block py-2.5 hover:text-accent"
        >
          All Projects
        </Link>
      </Container>
    </article>
  );
}
