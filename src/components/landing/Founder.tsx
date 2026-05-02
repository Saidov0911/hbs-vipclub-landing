import { Award, Briefcase, Building2, TrendingUp, Quote, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import founderPhoto from "@/assets/founder-mushlihiddin.png";

const BADGES: { key: string; icon: React.ElementType }[] = [
  { key: "founder.badge.1", icon: Building2 },
  { key: "founder.badge.2", icon: Sparkles },
  { key: "founder.badge.3", icon: TrendingUp },
  { key: "founder.badge.4", icon: Briefcase },
];

export const Founder = () => {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <Section id="founder" eyebrow="Asoschi" title={t("founder.title")}>
      <div
        ref={ref}
        className={cn(
          "group relative max-w-6xl mx-auto rounded-[28px] overflow-hidden reveal",
          "bg-gradient-card border border-primary/25",
          "shadow-elegant",
          inView && "is-visible"
        )}
      >
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px] animate-glow-pulse" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/12 blur-[140px]" />
        <div className="pointer-events-none absolute inset-0 bg-grid grid-radial-mask opacity-20" />

        {/* Animated gradient border on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-primary/30 via-transparent to-primary-glow/30 blur-md" />
        </div>

        <div className="relative grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center p-8 md:p-14">
          {/* Photo column */}
          <div className="relative mx-auto md:mx-0">
            {/* Rotating gradient ring */}
            <div className="absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,hsl(var(--primary)),hsl(var(--primary-glow)),hsl(var(--primary)))] opacity-40 blur-md animate-glow-pulse" />
            <div className="absolute -inset-1 rounded-full bg-gradient-gold opacity-60 blur-xl" />

            <div className="relative h-[220px] w-[220px] md:h-[260px] md:w-[260px] rounded-full overflow-hidden ring-2 ring-primary/50 ring-offset-4 ring-offset-background bg-gradient-to-b from-secondary/60 to-background shadow-gold">
              <img
                src={founderPhoto}
                alt={t("founder.name")}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-foreground/10" />
            </div>

            {/* Floating role chip */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full glass-strong border border-primary/40 px-3.5 py-1.5 text-[11px] md:text-xs font-semibold text-foreground shadow-card whitespace-nowrap">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                CEO &amp; Founder
              </span>
            </div>
          </div>

          {/* Content column */}
          <div>
            {/* Eyebrow tag */}
            <div className="inline-flex items-center gap-2 rounded-full glass-strong border border-primary/30 px-3 py-1 text-[11px] font-semibold text-gold mb-4">
              <Sparkles className="h-3 w-3" />
              HBS VIP Club asoschisi
            </div>

            <h3 className="font-display font-extrabold text-3xl md:text-5xl tracking-[-0.02em] leading-[1.05] text-foreground">
              {t("founder.name")}
            </h3>

            {/* Bio with quote accent */}
            <div className="relative mt-5 pl-5">
              <Quote className="absolute -left-1 top-0 h-4 w-4 text-primary/60" />
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed border-l-2 border-primary/40 pl-4">
                {t("founder.bio")}
              </p>
            </div>

            {/* Badges grid */}
            <div className="mt-7 grid sm:grid-cols-2 gap-2.5">
              {BADGES.map((b, i) => {
                const BIcon = b.icon;
                return (
                  <div
                    key={b.key}
                    style={{ transitionDelay: `${i * 80}ms` }}
                    className="group/badge relative flex items-start gap-3 rounded-xl px-3.5 py-3 bg-secondary/40 border border-border/60 hover:border-primary/50 hover:bg-secondary/60 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/15 border border-primary/40 text-gold group-hover/badge:bg-primary/25 transition-colors">
                      <BIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[13px] md:text-sm leading-snug text-foreground/95">
                      {t(b.key)}
                    </span>
                    <Award className="absolute top-2 right-2 h-3 w-3 text-gold/40 opacity-0 group-hover/badge:opacity-100 transition-opacity" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
