import type { ReactNode } from "react";
import { cn } from "../lib/utils";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  centered?: boolean;
};

export function Section({ id, eyebrow, title, subtitle, className, containerClassName, children, centered }: Props) {
  return (
    <section id={id} className={cn("py-20 sm:py-24", className)}>
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", containerClassName)}>
        {(eyebrow || title || subtitle) && (
          <div className={cn("mb-12 max-w-3xl", centered && "mx-auto text-center")}>
            {eyebrow && (
              <div className={cn("mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary")}>
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
