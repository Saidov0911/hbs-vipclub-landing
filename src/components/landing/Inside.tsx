import {
  BookOpen,
  Briefcase,
  Coins,
  ShieldCheck,
  Users,
  Wallet,
  Target,
  Trophy,
  Radio,
} from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type Item = {
  icon: React.ElementType;
  key: string;
  /** Tailwind classes that control bento span at md+. */
  span: string;
  variant?: "default" | "highlight" | "accent";
};

// 9 items arranged as a structured bento (md: 6-col grid, lg: 6-col grid).
// Sum per row = 6.
const items: Item[] = [
  { icon: BookOpen, key: "inside.1", span: "md:col-span-3", variant: "accent" },
  { icon: Briefcase, key: "inside.2", span: "md:col-span-3" },
  { icon: Coins, key: "inside.3", span: "md:col-span-2" },
  { icon: Target, key: "inside.7", span: "md:col-span-2", variant: "highlight" },
  { icon: ShieldCheck, key: "inside.4", span: "md:col-span-2" },
  { icon: Users, key: "inside.5", span: "md:col-span-2" },
  { icon: Wallet, key: "inside.6", span: "md:col-span-2" },
  { icon: Trophy, key: "inside.8", span: "md:col-span-2" },
  { icon: Radio, key: "inside.9", span: "md:col-span-4", variant: "accent" },
];

export const Inside = () => {
  const { t } = useI18n();
  return (
    <Section
      id="inside"
      eyebrow="Bo‘limlar"
      title={t("inside.title")}
      subtitle={t("inside.subtitle")}
    >
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
        {items.map((item, i) => (
          <FeatureCard key={item.key} item={item} index={i} t={t} />
        ))}
      </div>
    </Section>
  );
};

const FeatureCard = ({
  item,
  index,
  t,
}: {
  item: Item;
  index: number;
  t: (k: string) => string;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Icon = item.icon;
  const variant = item.variant ?? "default";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 50}ms` }}
      className={cn(
        "reveal h-full",
        item.span,
        inView && "is-visible"
      )}
    >
      <div
        className={cn(
          "group relative h-full overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5",
          variant === "highlight" &&
            "bg-gradient-gold-soft border border-primary/40 shadow-gold",
          variant === "accent" &&
            "p-px bg-gradient-to-br from-primary/40 via-primary/15 to-border",
          variant === "default" && "glass hover:border-primary/40"
        )}
      >
        <div
          className={cn(
            "relative h-full p-6 md:p-7 flex flex-col",
            variant === "accent" && "rounded-2xl bg-card/85 backdrop-blur-md"
          )}
        >
          {/* Decorative number for highlight + accent */}
          {variant !== "default" && (
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute -top-3 -right-2 select-none font-display font-black leading-none tracking-tighter text-[88px]",
                variant === "highlight"
                  ? "text-primary/25"
                  : "text-primary/[0.08] group-hover:text-primary/15 transition-colors"
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
          )}

          {/* Top shimmer line on hover */}
          <div className="pointer-events-none absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative flex items-start gap-4 mb-4">
            <div
              className={cn(
                "h-12 w-12 shrink-0 rounded-xl flex items-center justify-center border transition-all duration-500",
                variant === "highlight"
                  ? "bg-gradient-gold border-transparent text-primary-foreground shadow-gold"
                  : variant === "accent"
                  ? "bg-primary/10 border-primary/30 text-primary-glow group-hover:bg-primary/20"
                  : "bg-secondary/60 border-primary/20 icon-gold group-hover:bg-primary/10 group-hover:border-primary/50"
              )}
            >
              <Icon className="h-5 w-5" />
            </div>

            {variant === "highlight" && (
              <span className="ml-auto text-[10px] uppercase tracking-[0.2em] font-bold text-primary px-2 py-1 rounded-full border border-primary/40 bg-background/40">
                Hit
              </span>
            )}
          </div>

          <h3
            className={cn(
              "relative font-display font-semibold mb-2 leading-tight",
              variant === "accent" ? "text-xl md:text-[22px]" : "text-lg"
            )}
          >
            {t(`${item.key}.title`)}
          </h3>
          <p className="relative text-sm text-muted-foreground leading-relaxed">
            {t(`${item.key}.desc`)}
          </p>
        </div>
      </div>
    </div>
  );
};
