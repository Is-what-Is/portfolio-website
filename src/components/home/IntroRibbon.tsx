import { site } from "../../data/site";
import { Container } from "../layout/Container";

const ribbonLink = "label-caps inline-block py-2.5 text-ink hover:text-accent";

export function IntroRibbon() {
  const links = [
    { label: "GitHub", href: site.githubUrl },
    { label: "LinkedIn", href: site.linkedinUrl },
    { label: "Email", href: site.email && `mailto:${site.email}` },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <section id="about" aria-labelledby="about-heading">
      <Container>
        <div className="flex flex-wrap border border-line">
          <div className="min-w-0 flex-[2_1_26rem] px-6 py-7 sm:px-9 sm:py-8">
            <h1
              id="about-heading"
              className="mb-2.5 text-[1.375rem] leading-tight font-extrabold uppercase"
            >
              {site.aboutHeading}
            </h1>
            <div className="max-w-prose space-y-4 text-ink-muted">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <ul className="flex flex-[1_1_13rem] list-none flex-col justify-center border-t border-line px-6 py-4 sm:px-9 md:border-t-0 md:border-l">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={ribbonLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
