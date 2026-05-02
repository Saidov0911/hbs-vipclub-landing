import { ArrowRight, Sparkles, Send, Play, TrendingUp } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { LaptopMockup } from "./Mockups";
import telegramPreview from "@/assets/telegram-preview.png";

const stats = [
  { value: "1 248+", label: "Faol a’zolar" },
  { value: "+312%", label: "Eng yaxshi signal" },
  { value: "24/7", label: "Jonli muhit" },
];

export const Hero = () => {
  const { t } = useI18n();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-0 overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[720px] w-[1080px] rounded-full bg-primary/15 blur-[160px] animate-glow-pulse" />
        <div className="absolute top-32 left-[10%] h-[320px] w-[320px] rounded-full bg-primary/12 blur-[110px]" />
        <div className="absolute top-32 right-[10%] h-[320px] w-[320px] rounded-full bg-primary/10 blur-[110px]" />
        <div className="absolute inset-0 bg-grid grid-radial-mask opacity-40" />
      </div>

      <div className="container relative">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Live status badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full glass-strong border border-primary/30 px-4 py-1.5 text-xs font-medium text-foreground mb-7 shadow-card">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span>{t("hero.badge")}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-primary-glow font-semibold">Live</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-[-0.03em]">
            <span className="block text-foreground">{t("hero.title.1")}</span>
            <span className="relative inline-block mt-1 md:mt-2">
              <span className="relative z-10 text-gold">{t("hero.title.2")}</span>
              <span
                aria-hidden
                className="absolute left-0 right-0 -bottom-1 md:-bottom-2 h-[10px] md:h-[14px] bg-gradient-gold rounded-full opacity-25 blur-md"
              />
            </span>
          </h1>

          <p className="mt-7 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => scrollTo("#pricing")}
              className="btn-gold w-full sm:w-auto px-7 py-4 rounded-full text-sm md:text-base font-semibold inline-flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" />
              {t("hero.cta.primary")}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollTo("#inside")}
              className="btn-ghost-gold w-full sm:w-auto px-7 py-4 rounded-full text-sm md:text-base font-semibold inline-flex items-center justify-center gap-2"
            >
              <Play className="h-4 w-4 fill-current" />
              {t("hero.cta.secondary")}
            </button>
          </div>

          {/* Member proof + trial */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background ring-1 ring-primary/20"
                    style={{
                      background: `linear-gradient(140deg, hsl(${(i * 50 + 30) % 360} 50% 35%), hsl(${(i * 50 + 70) % 360} 50% 22%))`,
                    }}
                  />
                ))}
              </div>
              <div className="text-left text-xs">
                <div className="font-semibold text-foreground">1 248+ treyder</div>
                <div className="text-muted-foreground">allaqachon ichida</div>
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-border" />

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3.5 py-1.5 bg-primary/10 text-primary-glow border border-primary/30">
              <TrendingUp className="h-3.5 w-3.5" />
              {t("hero.trial")}
            </span>
          </div>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl px-3 py-4 sm:px-5 sm:py-5"
              >
                <div className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-gold leading-none">
                  {s.value}
                </div>
                <div className="mt-1.5 text-[11px] sm:text-xs text-muted-foreground leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Trust chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {["hero.trust.1", "hero.trust.2", "hero.trust.3", "hero.trust.4"].map((k) => (
              <span
                key={k}
                className="text-[11px] sm:text-xs text-muted-foreground glass rounded-full px-3 py-1.5"
              >
                {t(k)}
              </span>
            ))}
          </div>
        </div>

        {/* Laptop mockup rising from bottom */}
        <div className="relative mt-14 md:mt-20 animate-slide-up">
          <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 bg-gradient-to-t from-primary/12 via-primary/5 to-transparent blur-3xl" />

          {/* Floating accent badges (desktop only) */}
          <div className="hidden md:block absolute left-[6%] top-12 z-10 glass-strong rounded-2xl px-4 py-3 animate-float shadow-card">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-gold" />
              </div>
              <div>
                <div className="text-[11px] text-muted-foreground">BTC LONG</div>
                <div className="font-display font-bold text-sm text-foreground">+8.2%</div>
              </div>
            </div>
          </div>
          <div
            className="hidden md:block absolute right-[6%] top-24 z-10 glass-strong rounded-2xl px-4 py-3 animate-float shadow-card"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center">
                <Send className="h-4 w-4 text-gold" />
              </div>
              <div>
                <div className="text-[11px] text-muted-foreground">Yangi xabar</div>
                <div className="font-display font-bold text-sm text-foreground">Mentor · live</div>
              </div>
            </div>
          </div>

          <div className="relative -mb-32 sm:-mb-44 md:-mb-56">
            <LaptopMockup className="px-2">
              <img
                src={telegramPreview}
                alt="HBS VIP Club Telegram preview"
                className="w-full h-full object-contain object-top bg-background"
                loading="eager"
                decoding="async"
              />
            </LaptopMockup>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
