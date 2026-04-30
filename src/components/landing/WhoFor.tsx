import { Briefcase, GraduationCap, TrendingUp, UserPlus } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const items = [
  { icon: GraduationCap, key: "who.1" },
  { icon: Briefcase, key: "who.2" },
  { icon: TrendingUp, key: "who.3" },
  { icon: UserPlus, key: "who.4" },
];

export const WhoFor = () => {
  const { t } = useI18n();
  return (
    <Section id="who" eyebrow="Auditoriya" title={t("who.title")} subtitle={t("who.subtitle")}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {items.map(({ icon: Icon, key }, i) => (
          <Card key={key} delay={i * 80}>
            <div className="relative h-14 w-14 mb-5 mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-gold-soft border border-primary/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon className="h-6 w-6 text-gold" />
              </div>
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground text-center mb-2">
              {t(`${key}.title`)}
            </h3>
            <p className="text-sm text-muted-foreground text-center leading-relaxed">{t(`${key}.desc`)}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

const Card = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "glass rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-500 reveal",
        inView && "is-visible"
      )}
    >
      {children}
    </div>
  );
};
