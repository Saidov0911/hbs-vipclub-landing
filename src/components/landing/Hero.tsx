import { ArrowRight, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { LaptopMockup } from "./Mockups";
import telegramPreview from "@/assets/telegram-preview.png";

export const Hero = () => {
  const { t } = useI18n();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-0 overflow-hidden">
      {/* glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[640px] w-[940px] rounded-full bg-primary/15 blur-[140px] animate-glow-pulse" />
        <div className="absolute top-32 left-[15%] h-[280px] w-[280px] rounded-full bg-accent/15 blur-[100px]" />
        <div className="absolute top-32 right-[15%] h-[280px] w-[280px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute inset-0 bg-grid grid-radial-mask opacity-40" />
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            {t("hero.badge")}
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            <span className="text-foreground">{t("hero.title.1")}</span>
            <br />
            <span className="text-gold">{t("hero.title.2")}</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => scrollTo("#pricing")}
              className="btn-gold px-7 py-3.5 rounded-full text-sm md:text-base font-semibold inline-flex items-center gap-2"
            >
              {t("hero.cta.primary")} <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollTo("#inside")}
              className="btn-ghost-gold px-7 py-3.5 rounded-full text-sm md:text-base font-semibold"
            >
              {t("hero.cta.secondary")}
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {["hero.trust.1", "hero.trust.2", "hero.trust.3", "hero.trust.4"].map((k) => (
              <span
                key={k}
                className="text-xs text-muted-foreground glass rounded-full px-3.5 py-1.5"
              >
                {t(k)}
              </span>
            ))}
            <span className="text-xs font-semibold rounded-full px-3.5 py-1.5 bg-accent/10 text-accent border border-accent/30">
              {t("hero.trial")}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
