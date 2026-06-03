import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`section-paint mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 py-12 sm:py-20 md:py-28 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className="mx-auto mb-10 sm:mb-16 max-w-2xl text-center">
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-primary">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-4 sm:mt-6 font-display text-3xl sm:text-4xl md:text-5xl font-black leading-[1.04] tracking-tight text-foreground">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
