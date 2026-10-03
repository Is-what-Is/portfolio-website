import { IntroRibbon } from "../components/home/IntroRibbon";
import { ProjectGrid } from "../components/home/ProjectGrid";
import { TypingHero } from "../components/home/TypingHero";
import { getProjectsNewestFirst } from "../data/projects";
import { site } from "../data/site";

export function meta() {
  return [
    { title: `${site.title} | ${site.name}` },
    {
      name: "description",
      content:
        "Data science projects, technical writing and interactive applications.",
    },
  ];
}

export default function HomePage() {
  return (
    <>
      <TypingHero />
      <IntroRibbon />
      <ProjectGrid projects={getProjectsNewestFirst()} />
    </>
  );
}
