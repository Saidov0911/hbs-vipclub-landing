import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export const Section = ({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <section id={id} className={cn("relative py-20 md:py-28", className)}>
      <div className="container">
        {(eyebrow || title || subtitle) && (
          <div
            ref={ref}
            className={cn("max-w-3xl mx-auto text-center mb-12 md:mb-16 reveal", inView && "is-visible")}
          >
            {eyebrow && (
              <div className="inline-block uppercase tracking-[0.25em] text-gold font-semibold mb-3 text-xl">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-foreground">
                {title.split(" — ").map((p, i, arr) =>
                  i === arr.length - 1 && arr.length > 1 ? (
                    <span key={i} className="text-gold"> — {p}</span>
                  ) : (
                    <span key={i}>{p}</span>
                  )
                )}
              </h2>
            )}
            {subtitle && <p className="mt-4 text-muted-foreground text-base md:text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
