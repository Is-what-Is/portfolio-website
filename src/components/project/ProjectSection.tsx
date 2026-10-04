import type { ReactNode } from "react";

export type SectionKind =
  | "context"
  | "theory"
  | "implementation"
  | "results"
  | "interactive";

const KIND_LABELS: Record<SectionKind, string> = {
  context: "Context",
  theory: "Theory",
  implementation: "Implementation",
  results: "Results",
  interactive: "Interactive",
};

function toId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * One section of a project write-up. `kind` tells the reader whether they are
 * looking at explanation, implementation detail, empirical results or a demo.
 */
export function ProjectSection({
  title,
  kind,
  children,
}: {
  title: string;
  kind: SectionKind;
  children: ReactNode;
}) {
  const id = toId(title);
  return (
    <section
      aria-labelledby={id}
      className="grid gap-x-12 gap-y-4 border-t border-line py-10 lg:grid-cols-[15rem_minmax(0,1fr)]"
    >
      <div>
        <p className="label-caps mb-2 text-accent">{KIND_LABELS[kind]}</p>
        <h2 id={id} className="text-2xl leading-tight font-bold tracking-tight">
          {title}
        </h2>
      </div>
      <div className="prose max-w-prose min-w-0">{children}</div>
    </section>
  );
}
