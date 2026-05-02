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

          <div className="relative -mb-32 sm:-mb-44 md:-mb-56">
            <LaptopMockup className="px-2">
              <ScrollGallery />
            </LaptopMockup>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

/** Smooth auto-scrolling feedback gallery with gradient scroll progress bar. */
const ScrollGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-scroll loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();
    const SPEED = 28; // px per second

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused) {
        const max = el.scrollHeight - el.clientHeight;
        if (max > 0) {
          let next = el.scrollTop + SPEED * dt;
          if (next >= max) next = 0; // loop
          el.scrollTop = next;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  // Track scroll progress
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="relative h-full w-full bg-[hsl(222_55%_5%)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="h-full w-full overflow-y-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="columns-2 md:columns-3 gap-2 md:gap-3 p-2 md:p-3 [column-fill:_balance]">
          {GALLERY.map((src, i) => (
            <div
              key={i}
              className="mb-2 md:mb-3 break-inside-avoid rounded-md md:rounded-lg overflow-hidden border border-border/50 bg-card/30"
            >
              <img
                src={src}
                alt={`HBS VIP Club feedback ${i + 1}`}
                className="w-full h-auto block"
                loading={i < 4 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[hsl(222_55%_5%)] to-transparent" />
      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[hsl(222_55%_5%)] to-transparent" />

      {/* Gradient scroll progress bar (right edge) */}
      <div className="pointer-events-none absolute right-1.5 top-3 bottom-3 w-1 rounded-full bg-foreground/5 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-gold via-primary to-primary-glow shadow-[0_0_10px_hsl(var(--primary)/0.6)] transition-[height] duration-150 ease-linear"
          style={{ height: `${Math.max(8, progress)}%` }}
        />
      </div>
    </div>
  );
};
