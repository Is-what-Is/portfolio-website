import { Link } from "react-router";
import { site } from "../../data/site";
import { Container } from "./Container";

const navLink = "label-caps py-3 text-ink no-underline hover:text-accent";

export function SiteHeader() {
  return (
    <header>
      <Container className="flex min-h-18 flex-wrap items-center justify-between gap-x-8 gap-y-1">
        <Link
          to="/"
          translate="no"
          className="py-2.5 text-xl font-extrabold tracking-tight text-ink uppercase no-underline hover:text-accent"
        >
          {site.name}
        </Link>
        <nav aria-label="Main" className="flex gap-9">
          <Link to="/#projects" className={navLink}>
            Projects
          </Link>
          <Link to="/#about" className={navLink}>
            About
          </Link>
          <a href={site.githubUrl} className={navLink}>
            GitHub
          </a>
        </nav>
      </Container>
    </header>
  );
}
