import { Link } from "react-router";
import type { Project } from "../../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="flex h-full touch-manipulation flex-col bg-card text-card-ink no-underline shadow-slab transition-[translate,box-shadow] duration-150 ease-out-expo hover:-translate-0.75 hover:shadow-slab-hover focus-visible:-translate-0.75 focus-visible:shadow-slab-hover active:translate-0 active:shadow-slab motion-reduce:transition-none"
    >
      {project.thumbnail ? (
        <img
          src={`${import.meta.env.BASE_URL}${project.thumbnail}`}
          alt={project.thumbnailAlt ?? ""}
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          className={`aspect-16/10 w-full ${
            project.thumbnailFit === "contain"
              ? "bg-white object-contain"
              : "bg-card-media object-cover"
          }`}
        />
      ) : (
        <div className="flex aspect-16/10 w-full items-center justify-center bg-card-media text-[0.8125rem] text-card-ink-muted">
          [Thumbnail to be supplied]
        </div>
      )}
      <div className="grow border-t-2 border-card-ink px-5 pt-4.5 pb-5.5">
        <p className="label-caps mb-2 text-card-ink-muted">{project.category}</p>
        <h3 className="text-xl leading-tight font-bold tracking-tight break-words">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
