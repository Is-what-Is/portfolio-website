import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-content px-[max(1.25rem,env(safe-area-inset-left))] sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
