import { Check, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { useInView } from "@/hooks/useInView";
import { BOT_URL } from "@/i18n/strings";
import { cn } from "@/lib/utils";

export const Pricing = () => {
  const { t } = useI18n();
  const features = ["price.feature.1", "price.feature.2", "price.feature.3", "price.feature.4", "price.feature.5"];

  return (
    <Section id="pricing" eyebrow="Narx" title={t("price.title")} subtitle={t("price.subtitle")}>
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-accent/10 text-accent border border-accent/40 text-sm font-semibold animate-glow-pulse">
          <Sparkles className="h-4 w-4" />
          {t("price.trial")}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto items-stretch">
        <PriceCard
          label={t("price.monthly")}
          amount={t("price.monthly.amount")}
          unit={t("price.monthly.unit")}
          features={features.map((k) => t(k))}
        />
        <PriceCard
          badge={t("price.halfyear.badge")}
          label={t("price.halfyear")}
          amount={t("price.halfyear.amount")}
          original={t("price.halfyear.original")}
          unit={t("price.halfyear.unit")}
          features={features.map((k) => t(k))}
        />
        <PriceCard
          highlight
          badge={t("price.yearly.badge")}
          label={t("price.yearly")}
          amount={t("price.yearly.amount")}
          original={t("price.yearly.original")}
          unit={t("price.yearly.unit")}
          features={features.map((k) => t(k))}
        />
      </div>

      <div className="mt-8 text-center">
        <a
          href={BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-flex items-center px-7 py-3.5 rounded-full text-sm md:text-base font-semibold"
        >
          {t("price.cta")}
        </a>
      </div>
    </Section>
  );
};

const PriceCard = ({
  label,
  amount,
  original,
  unit,
  features,
  highlight,
  badge,
}: {
  label: string;
  amount: string;
  original?: string;
  unit: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
}) => {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-2xl p-7 md:p-8 reveal transition-all duration-500",
        highlight
          ? "bg-gradient-card border border-primary/50 shadow-gold"
          : "glass hover:border-primary/30",
        inView && "is-visible"
      )}
    >
      {badge && (
        <div
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-wider rounded-full px-3 py-1",
            highlight
              ? "bg-gradient-gold text-primary-foreground shadow-gold"
              : "bg-secondary text-foreground border border-border"
          )}
        >
          {badge}
        </div>
      )}
      {highlight && (
        <div className="absolute -inset-px rounded-2xl bg-gradient-gold opacity-25 blur-xl -z-10" />
      )}
      <div className="text-sm font-semibold text-muted-foreground mb-3">{label}</div>
      <div className="flex items-baseline gap-2 mb-5">
        <span className={cn("font-display font-extrabold text-4xl md:text-5xl tracking-tight", highlight ? "text-gold" : "text-foreground")}>
          {amount}
        </span>
        <span className="text-muted-foreground text-sm">{unit}</span>
      </div>
      <div className="h-px bg-border/70 mb-5" />
      <ul className="space-y-3 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
            <span
              className={cn(
                "h-5 w-5 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                highlight ? "bg-primary/25 text-gold" : "bg-secondary text-foreground/80"
              )}
            >
              <Check className="h-3 w-3" />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href={BOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "block text-center px-5 py-3 rounded-xl text-sm font-semibold w-full",
          highlight ? "btn-gold" : "btn-ghost-gold"
        )}
      >
        {t("price.cta")}
      </a>
    </div>
  );
};
