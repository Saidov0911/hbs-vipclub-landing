import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { BOT_URL } from "@/i18n/strings";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export const FinalCTA = () => {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <div
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-3xl px-6 sm:px-12 md:px-16 py-16 md:py-24 text-center reveal",
            "bg-gradient-card border border-primary/40",
            inView && "is-visible"
          )}
        >
          <div className="absolute inset-0 bg-grid grid-radial-mask opacity-50" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/25 blur-[120px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[280px] w-[600px] rounded-full bg-accent/15 blur-[100px]" />

          <div className="relative">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-6xl tracking-tight">
              <span className="text-gold">{t("final.title")}</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              {t("final.subtitle")}
            </p>
            <a
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-9 inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold"
            >
              {t("final.cta")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
