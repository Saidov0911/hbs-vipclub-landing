import { ArrowRight, Sparkles, Send, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { LaptopMockup } from "./Mockups";
import tg1 from "@/assets/telegram/tg-1.png";
import tg2 from "@/assets/telegram/tg-2.png";
import tg3 from "@/assets/telegram/tg-3.png";
import tg4 from "@/assets/telegram/tg-4.png";
import tg5 from "@/assets/telegram/tg-5.png";
import tg6 from "@/assets/telegram/tg-6.png";

const GALLERY = [tg1, tg2, tg3, tg4, tg5, tg6];

export const Hero = () => {
  const { t } = useI18n();
  const mockupRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!mockupRef.current) return;
        const rect = mockupRef.current.getBoundingClientRect();
        const vh = window.innerHeight;
        // progress: 0 when mockup top is at viewport bottom, 1 when at top
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
        setOffset(progress * -120);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

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

        </div>

        {/* Laptop mockup rising from bottom — parallax on scroll */}
        <div
          ref={mockupRef}
          className="relative mt-14 md:mt-20 animate-slide-up will-change-transform"
          style={{ transform: `translate3d(0, ${offset}px, 0)`, transition: "transform 0.1s linear" }}
        >
          <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 bg-gradient-to-t from-primary/12 via-primary/5 to-transparent blur-3xl" />

          <HeroGallery />
        </div>
      </div>
    </section>
  );
};

/** Hero gallery wrapper — laptop mockup + small dot indicators below the screen. */
const HeroGallery = () => {
  // index can range 0..GALLERY.length (last is a clone of first for seamless right-loop)
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setAnimate(true);
      setIndex((i) => i + 1);
    }, 3000);
    return () => clearInterval(id);
  }, [paused]);

  // After sliding to the cloned first (index === GALLERY.length), snap back to 0 without animation
  const onTrackTransitionEnd = () => {
    if (index === GALLERY.length) {
      setAnimate(false);
      setIndex(0);
      // re-enable animation on next frame
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    }
  };

  const go = (dir: 1 | -1) => {
    setAnimate(true);
    setIndex((i) => {
      const next = i + dir;
      if (next < 0) return GALLERY.length - 1;
      if (next > GALLERY.length) return 1;
      return next;
    });
  };

  const activeDot = index % GALLERY.length;
  const remaining = GALLERY.length - 1 - activeDot;

  return (
    <div className="relative -mb-32 sm:-mb-44 md:-mb-56">
      <LaptopMockup className="px-2">
        <div
          className="relative h-full w-full overflow-hidden bg-[hsl(222_55%_5%)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {/* Sliding track — last item is a clone of the first for seamless right-loop */}
          <div
            className={`flex h-full w-full ${animate ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" : ""} will-change-transform`}
            style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
            onTransitionEnd={onTrackTransitionEnd}
          >
            {[...GALLERY, GALLERY[0]].map((src, i) => (
              <div key={i} className="relative h-full w-full shrink-0 flex items-center justify-center p-2 md:p-4">
                <img
                  src={src}
                  alt={`HBS ACADEMY Telegram ${(i % GALLERY.length) + 1}`}
                  className="h-full w-auto max-w-full object-contain block"
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Side fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[hsl(222_55%_5%)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[hsl(222_55%_5%)] to-transparent" />

          {/* Arrows */}
          <button
            type="button"
            aria-label="Previous"
            onClick={() => go(-1)}
            className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full glass-strong border border-primary/30 text-foreground hover:bg-primary/20 hover:border-primary/60 transition-all shadow-card"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => go(1)}
            className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full glass-strong border border-primary/30 text-foreground hover:bg-primary/20 hover:border-primary/60 transition-all shadow-card"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </LaptopMockup>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      {/* Dot indicators + remaining counter — below the laptop screen */}
      <div className="relative z-10 mt-4 md:mt-5 flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-1.5">
          {GALLERY.map((_, i) => {
            const isActive = i === activeDot;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Go to screenshot ${i + 1}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => {
                  setAnimate(true);
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-5 bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.7)]"
                    : "w-1.5 bg-foreground/30 hover:bg-foreground/60"
                }`}
              />
            );
          })}
        </div>
        <div className="text-[11px] md:text-xs text-muted-foreground tabular-nums">
          {activeDot + 1} / {GALLERY.length}
          {remaining > 0 && (
            <span className="ml-2 text-foreground/50">· {remaining} qoldi</span>
          )}
        </div>
      </div>
    </div>
  );
};
