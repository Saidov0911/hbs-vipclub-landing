import { Briefcase, GraduationCap, TrendingUp, UserPlus, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type Item = {
  icon: React.ElementType;
  key: string;
  tags: string[];
  featured?: boolean;
};

const items: Item[] = [
  {
    icon: GraduationCap,
    key: "who.1",
    tags: ["0 → 1", "Asoslar", "Mentor yordami"],
  },
  {
    icon: Briefcase,
    key: "who.2",
    tags: ["Uzoq muddat", "Portfel", "Passiv daromad"],
    featured: true,
  },
  {
    icon: TrendingUp,
    key: "who.3",
    tags: ["G‘oyalar", "Tahlillar", "Network"],
  },
  {
    icon: UserPlus,
    key: "who.4",
    tags: ["Kashfiyot", "Sinov", "Hamjamiyat"],
  },
];

export const WhoFor = () => {
  const { t } = useI18n();
  return (
    <Section
      id="who"
      eyebrow="Auditoriya"
      title={t("who.title")}
      subtitle={t("who.subtitle")}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {items.map((item, i) => (
          <PersonaCard
            key={item.key}
            index={i + 1}
            item={item}
            t={t}
            delay={i * 80}
          />
        ))}
      </div>
    </Section>
  );
};

const PersonaCard = ({
  item,
  index,
  delay,
  t,
}: {
  item: Item;
  index: number;
  delay: number;
  t: (k: string) => string;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Icon = item.icon;
  const featured = item.featured;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "group relative reveal h-full",
        inView && "is-visible"
      )}
    >
      {/* Gradient border wrapper */}
      <div
        className={cn(
          "relative h-full rounded-2xl p-px transition-all duration-500",
          featured
            ? "bg-gradient-to-br from-primary/70 via-primary/30 to-primary/10 shadow-gold"
            : "bg-gradient-to-br from-primary/30 via-border to-border group-hover:from-primary/60 group-hover:via-primary/20"
        )}
      >
        <div
          className={cn(
            "relative h-full rounded-2xl p-6 md:p-7 overflow-hidden flex flex-col",
            "bg-card/80 backdrop-blur-md transition-all duration-500",
            "group-hover:-translate-y-1.5"
          )}
        >
          {/* Decorative oversized index number */}
          <div
            className={cn(
              "pointer-events-none absolute -top-4 -right-2 select-none font-display font-black leading-none",
              "text-[120px] tracking-tighter transition-all duration-500",
              featured
                ? "text-primary/15"
                : "text-primary/[0.07] group-hover:text-primary/15"
            )}
            aria-hidden="true"
          >
            0{index}
          </div>

          {/* Top row: icon + arrow */}
          <div className="relative flex items-start justify-between mb-6">
            <div
              className={cn(
                "h-12 w-12 rounded-xl flex items-center justify-center border transition-all duration-500",
                featured
                  ? "bg-gradient-gold border-transparent text-primary-foreground shadow-gold"
                  : "bg-secondary/60 border-primary/20 icon-gold group-hover:border-primary/50 group-hover:bg-primary/10"
              )}
            >
              <Icon className="h-5 w-5" />
            </div>

            <div
              className={cn(
                "h-9 w-9 rounded-full border flex items-center justify-center transition-all duration-500",
                "border-border/60 text-muted-foreground",
                "group-hover:border-primary/60 group-hover:text-primary group-hover:rotate-45"
              )}
            >
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          {/* Title + description */}
          <div className="relative flex-1">
            <h3
              className={cn(
                "font-display font-bold text-xl md:text-[22px] leading-tight mb-2.5",
                featured ? "text-foreground" : "text-foreground"
              )}
            >
              {t(`${item.key}.title`)}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(`${item.key}.desc`)}
            </p>
          </div>

          {/* Tags */}
          <div className="relative mt-6 pt-5 border-t border-border/50 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "text-[11px] font-medium px-2.5 py-1 rounded-full border transition-colors",
                  featured
                    ? "border-primary/40 bg-primary/10 text-primary-glow"
                    : "border-border/70 bg-secondary/40 text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground/80"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
