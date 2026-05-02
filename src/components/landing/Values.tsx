import { ShieldCheck, HeartHandshake, BookOpen, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import halalCoin from "@/assets/halal-crypto-coin.png";

type Variant = "emerald" | "gold" | "navy" | "ember";

const items: { key: string; icon: React.ElementType; variant: Variant; image?: string }[] = [
  { key: "values.1", icon: ShieldCheck, variant: "emerald", image: halalCoin },
  { key: "values.2", icon: HeartHandshake, variant: "gold" },
  { key: "values.3", icon: BookOpen, variant: "navy" },
  { key: "values.4", icon: Sparkles, variant: "ember" },
];

export const Values = () => {
  const { t } = useI18n();
  return (
    <Section id="values" eyebrow={t("values.eyebrow")} title={t("values.title")} subtitle={t("values.subtitle")}>
      <div className="flex flex-col gap-5 md:gap-6 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <ValueCard
            key={item.key}
            index={i}
            delay={i * 80}
            Icon={item.icon}
            variant={item.variant}
            title={t(`${item.key}.title`)}
            desc={t(`${item.key}.desc`)}
            image={item.image}
          />
        ))}
      </div>
    </Section>
  );
};

const variantStyles: Record<Variant, { bg: string; glow: string; icon: string }> = {
  emerald: {
    bg: "bg-[radial-gradient(ellipse_at_right,hsl(152_70%_38%)_0%,hsl(152_75%_18%)_55%,hsl(222_45%_6%)_100%)]",
    glow: "shadow-[0_30px_80px_-30px_hsl(152_80%_45%/0.55)]",
    icon: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  },
  gold: {
    bg: "bg-[radial-gradient(ellipse_at_left,hsl(43_75%_45%)_0%,hsl(38_60%_18%)_55%,hsl(222_45%_6%)_100%)]",
    glow: "shadow-[0_30px_80px_-30px_hsl(43_85%_55%/0.55)]",
    icon: "bg-primary/20 text-primary-glow border-primary/30",
  },
  navy: {
    bg: "bg-[radial-gradient(ellipse_at_right,hsl(212_70%_38%)_0%,hsl(220_60%_14%)_55%,hsl(222_45%_6%)_100%)]",
    glow: "shadow-[0_30px_80px_-30px_hsl(212_80%_50%/0.45)]",
    icon: "bg-sky-500/20 text-sky-300 border-sky-400/30",
  },
  ember: {
    bg: "bg-[radial-gradient(ellipse_at_left,hsl(18_75%_45%)_0%,hsl(15_60%_18%)_55%,hsl(222_45%_6%)_100%)]",
    glow: "shadow-[0_30px_80px_-30px_hsl(18_85%_55%/0.5)]",
    icon: "bg-orange-500/20 text-orange-300 border-orange-400/30",
  },
};

const ValueCard = ({
  Icon,
  title,
  desc,
  delay,
  index,
  variant,
  image,
}: {
  Icon: React.ElementType;
  title: string;
  desc: string;
  delay: number;
  index: number;
  variant: Variant;
  image?: string;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reverse = index % 2 === 1;
  const styles = variantStyles[variant];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "reveal relative overflow-hidden rounded-3xl border border-white/10",
        "transition-all duration-500 hover:-translate-y-1",
        styles.bg,
        styles.glow,
        inView && "is-visible"
      )}
    >
      {/* Inner glass overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      <div
        className={cn(
          "relative flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-10",
          reverse && "md:flex-row-reverse"
        )}
      >
        {/* Visual side */}
        <div className="shrink-0 flex items-center justify-center">
          {image ? (
            <div className="relative h-32 w-32 md:h-44 md:w-44">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl" />
              <img
                src={image}
                alt={title}
                loading="lazy"
                width={1024}
                height={1024}
                className="relative h-full w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              />
            </div>
          ) : (
            <div
              className={cn(
                "h-24 w-24 md:h-32 md:w-32 rounded-2xl border flex items-center justify-center backdrop-blur-sm",
                styles.icon
              )}
            >
              <Icon className="h-10 w-10 md:h-14 md:w-14" strokeWidth={1.5} />
            </div>
          )}
        </div>

        {/* Text side */}
        <div className={cn("flex-1 text-center", reverse ? "md:text-right" : "md:text-left")}>
          <h3 className="font-display font-bold uppercase tracking-tight text-2xl md:text-3xl text-foreground leading-tight">
            {title}
          </h3>
          <p className="mt-3 text-sm md:text-base text-foreground/75 leading-relaxed max-w-xl mx-auto md:mx-0 md:inline-block">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};
