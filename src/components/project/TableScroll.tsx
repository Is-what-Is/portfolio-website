import { useId, type ReactNode } from "react";

/**
 * A captioned table that scrolls sideways on narrow screens instead of
 * widening the page. The caption sits outside the scroll area so it always
 * wraps at the column width. The region is focusable so keyboard users can
 * scroll it, and it takes its accessible name from the caption.
 */
export function TableScroll({
  label,
  caption,
  children,
}: {
  /** e.g. "Table 1" */
  label: string;
  caption: string;
  /** A single <table>. */
  children: ReactNode;
}) {
  const id = useId();
  return (
    <div className="table-block">
      <p id={id} className="table-title">
        <strong>{label}.</strong> {caption}
      </p>
      <div
        role="region"
        aria-labelledby={id}
        tabIndex={0}
        className="table-scroll"
      >
        {children}
      </div>
    </div>
  );
}
