import { Award } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { PlaceholderAvatar } from "./Placeholders";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const badges = ["founder.badge.1", "founder.badge.2", "founder.badge.3", "founder.badge.4"];

export const Founder = () => {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <Section id="founder" eyebrow="Asoschi" title={t("founder.title")}>
      <div
        ref={ref}
        className={cn(
          "relative max-w-5xl mx-auto rounded-3xl p-8 md:p-12 overflow-hidden reveal",
          "bg-gradient-card border border-primary/30",
          inView && "is-visible"
        )}
      >
        <div className="absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />

        <div className="relative grid md:grid-cols-[auto_1fr] gap-8 md:gap-10 items-center">
          <div className="relative mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-full bg-gradient-gold blur-2xl opacity-40 animate-glow-pulse" />
            <PlaceholderAvatar name={t("founder.name")} size={200} ring />
          </div>

          <div>
            <h3 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight text-foreground">
              {t("founder.name")}
            </h3>
            <p className="mt-3 text-muted-foreground max-w-xl">{t("founder.bio")}</p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <div
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 bg-gradient-gold-soft border border-primary/30 text-xs md:text-sm text-foreground/95"
                >
                  <Award className="h-3.5 w-3.5 text-gold shrink-0" />
                  {t(b)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
