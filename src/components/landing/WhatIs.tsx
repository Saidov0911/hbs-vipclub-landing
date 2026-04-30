import { GraduationCap, LineChart, Lock, Users } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const items = [
  { icon: Lock, key: "what.1" },
  { icon: LineChart, key: "what.2" },
  { icon: Users, key: "what.3" },
  { icon: GraduationCap, key: "what.4" },
];

export const WhatIs = () => {
  const { t } = useI18n();
  return (
    <Section id="what" eyebrow="VIP Club" title={t("what.title")} subtitle={t("what.subtitle")}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {items.map(({ icon: Icon, key }, i) => (
          <Card key={key} delay={i * 80}>
            <div className="h-11 w-11 rounded-xl bg-gradient-gold-soft border border-primary/25 flex items-center justify-center mb-5">
              <Icon className="h-5 w-5 text-gold" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">{t(`${key}.title`)}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t(`${key}.desc`)}</p>
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
        "group relative glass rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-500 reveal",
        inView && "is-visible"
      )}
    >
      <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      {children}
    </div>
  );
};
