import type { ReactNode } from "react";

/**
 * A captioned figure for project write-ups. Width and height reserve space
 * before the image loads. Detailed charts link to the full-size file so they
 * stay readable on small screens.
 */
export function Figure({
  src,
  alt,
  width,
  height,
  label,
  narrow = false,
  children,
}: {
  /** Imported image URL, e.g. `import chart from "./figures/chart.png"`. */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** e.g. "Figure 1" */
  label: string;
  /** Keep tall figures to the text width instead of the full column. */
  narrow?: boolean;
  children: ReactNode;
}) {
  return (
    <figure className={narrow ? "max-w-prose" : undefined}>
      <div className="border border-line bg-figure p-2 sm:p-3">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          // Never wider than the file itself, so small diagrams stay sharp.
          style={{ maxWidth: width }}
          className="mx-auto block h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 text-sm text-ink-muted [&>p]:inline">
        <span className="font-bold text-ink">{label}.</span> {children}{" "}
        <a href={src} className="whitespace-nowrap text-accent underline underline-offset-[0.2em]">
          Open full size
        </a>
      </figcaption>
    </figure>
  );
}
