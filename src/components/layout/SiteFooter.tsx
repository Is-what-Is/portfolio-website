import { site } from "../../data/site";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <Container className="label-caps flex flex-wrap justify-between gap-x-8 gap-y-2 py-7 text-ink-muted">
        <span translate="no">{site.name}</span>
        <a href={site.repositoryUrl} className="text-ink-muted hover:text-accent">
          Site Source on GitHub
        </a>
      </Container>
    </footer>
  );
}
