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

const items = [
  { icon: BookOpen, key: "inside.1" },
  { icon: Briefcase, key: "inside.2" },
  { icon: Coins, key: "inside.3" },
  { icon: ShieldCheck, key: "inside.4" },
  { icon: Users, key: "inside.5" },
  { icon: Wallet, key: "inside.6" },
  { icon: Target, key: "inside.7" },
  { icon: Trophy, key: "inside.8" },
  { icon: Radio, key: "inside.9" },
];

export const Inside = () => {
  const { t } = useI18n();
  return (
    <Section id="inside" eyebrow="Bo‘limlar" title={t("inside.title")} subtitle={t("inside.subtitle")}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {items.map(({ icon: Icon, key }, i) => (
          <FeatureCard key={key} delay={i * 60} Icon={Icon} title={t(`${key}.title`)} desc={t(`${key}.desc`)} highlight={i === 6} />
        ))}
      </div>
    </Section>
  );
};

const FeatureCard = ({
  Icon,
  title,
  desc,
  delay,
  highlight,
}: {
  Icon: React.ElementType;
  title: string;
  desc: string;
  delay: number;
  highlight?: boolean;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "group relative rounded-2xl p-6 reveal transition-all duration-500 hover:-translate-y-1.5",
        highlight
          ? "bg-gradient-gold-soft border border-primary/40 shadow-gold"
          : "glass hover:border-primary/30",
        inView && "is-visible"
      )}
    >
      <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div
        className={cn(
          "h-12 w-12 rounded-xl flex items-center justify-center mb-5 border",
          highlight
            ? "bg-gradient-gold border-transparent text-primary-foreground"
            : "bg-secondary/60 border-primary/20 icon-gold"
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-display font-semibold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
};
