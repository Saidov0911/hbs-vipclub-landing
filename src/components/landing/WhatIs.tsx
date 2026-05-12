import { GraduationCap, LineChart, Lock, Users, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type Item = { icon: React.ElementType; key: string };

const items: Item[] = [
  { icon: Lock, key: "what.1" },
  { icon: LineChart, key: "what.2" },
  { icon: Users, key: "what.3" },
  { icon: GraduationCap, key: "what.4" },
];

export const WhatIs = () => {
  const { t } = useI18n();
  const [featured, ...rest] = items;
  const FeaturedIcon = featured.icon;

  return (
    <Section id="what" eyebrow="VIP Club" title={t("what.title")} subtitle={t("what.subtitle")}>
      <div className="grid lg:grid-cols-12 gap-4 md:gap-5">
        {/* Featured card — spans 5 cols */}
        <Reveal className="lg:col-span-5">
          <div className="group relative h-full overflow-hidden rounded-3xl p-px bg-gradient-to-br from-primary/70 via-primary/30 to-primary/5 shadow-gold">
            <div className="relative h-full rounded-3xl p-7 md:p-9 bg-card/85 backdrop-blur-md flex flex-col">
              {/* Ambient orbs */}
              <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />

              {/* Sparkle badge */}
              <div className="relative inline-flex self-start items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary-glow uppercase tracking-wider mb-6">
                <Sparkles className="h-3 w-3" />
                Asosiy farq
              </div>

              <div className="relative h-14 w-14 rounded-2xl bg-gradient-gold border border-primary/40 flex items-center justify-center mb-6 shadow-gold">
                <FeaturedIcon className="h-6 w-6 text-primary-foreground" />
              </div>

              <h3 className="relative font-display font-bold text-2xl md:text-3xl text-foreground leading-tight mb-3">
                {t(`${featured.key}.title`)}
              </h3>
              <p className="relative text-base text-muted-foreground leading-relaxed flex-1">
                {t(`${featured.key}.desc`)}
              </p>

              {/* Member badges */}
              <div className="relative mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-card"
                      style={{
                        background: `linear-gradient(140deg, hsl(${(i * 50 + 30) % 360} 50% 35%), hsl(${(i * 50 + 70) % 360} 50% 22%))`,
                      }}
                    />
                  ))}
                </div>
                <div className="text-xs">
                  <div className="text-foreground font-semibold">400+ a’zo</div>
                  <div className="text-muted-foreground">Faqat ishonchli treyderlar</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3 stacked cards — span 7 cols */}
        <div className="lg:col-span-7 grid sm:grid-cols-1 gap-4 md:gap-5">
          {rest.map(({ icon: Icon, key }, i) => (
            <Reveal key={key} delay={(i + 1) * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass hover:border-primary/40 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-5 p-6">
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-secondary/60 border border-primary/20 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/50 transition-colors">
                    <Icon className="h-5 w-5 icon-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1.5">
                      {t(`${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`${key}.desc`)}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Reveal = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>(0.08);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("relative reveal", inView && "is-visible", className)}
    >
      {children}
    </div>
  );
};
