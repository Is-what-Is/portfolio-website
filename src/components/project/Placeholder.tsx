import type { ReactNode } from "react";

/** Visibly marks content that has not been written yet. */
export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <p className="border border-dashed border-line px-4 py-3 text-ink-muted">
      [Placeholder] {children}
    </p>
  );
}
