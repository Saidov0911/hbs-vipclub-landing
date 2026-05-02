import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { LaptopMockup, PhoneMockup } from "./Mockups";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import phoneTelegram from "@/assets/phone-telegram.png";
import joizBot from "@/assets/joiz-bot.png";
import vipChat from "@/assets/vip-chat.png";

type Slide = {
  id: string;
  labelKey: string;
  icon: React.ElementType;
  device: "laptop" | "phone";
  render: () => React.ReactNode;
  caption?: string;
};

export const Results = () => {
  const { t } = useI18n();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const slides: Slide[] = [
    {
      id: "lessons",
      labelKey: "results.label.2",
      icon: GraduationCap,
      device: "laptop",
      render: () => (
        <img
          src={vipChat}
          alt="HBS VIP Club Darslar va Materiallar"
          className="w-full h-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      ),
      caption: "Darslar, materiallar va hamjamiyat bir joyda",
    },
    {
      id: "joiz",
      labelKey: "results.label.4",
      icon: ShieldCheck,
      device: "laptop",
      render: () => (
        <img
          src={joizBot}
          alt="Joiz kripto tekshiruv bot"
          className="w-full h-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      ),
      caption: "Har bir loyihani halollik va xavfsizlikka tekshiramiz",
    },
    {
      id: "signals",
      labelKey: "results.label.1",
      icon: CheckCircle2,
      device: "phone",
      render: () => (
        <img
          src={phoneTelegram}
          alt="HBS VIP Club signal natijalari"
          className="w-full h-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      ),
      caption: "Telegramda jonli signallar va natijalar",
    },
  ];

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Section id="results" eyebrow="Pruflar" title={t("results.title")} subtitle={t("results.subtitle")}>
      <Reveal>
        <div className="relative">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -inset-x-10 -top-10 -bottom-10 -z-10 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.10),transparent_70%)] blur-3xl" />

          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {slides.map((slide, i) => (
                <CarouselItem key={slide.id} className="pl-2 md:pl-4 basis-full">
                  <SlideCard slide={slide} active={i === current} t={t} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Desktop arrows positioned outside the frame */}
            <CarouselPrevious
              className="hidden md:flex -left-4 lg:-left-6 h-12 w-12 bg-background/70 backdrop-blur-md border-primary/30 hover:bg-primary/15 hover:border-primary/60"
            />
            <CarouselNext
              className="hidden md:flex -right-4 lg:-right-6 h-12 w-12 bg-background/70 backdrop-blur-md border-primary/30 hover:bg-primary/15 hover:border-primary/60"
            />
          </Carousel>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === current
                    ? "w-8 bg-gradient-gold shadow-[0_0_15px_hsl(var(--primary)/0.6)]"
                    : "w-2 bg-foreground/20 hover:bg-foreground/40"
                )}
              />
            ))}
          </div>

          {/* Mobile arrows under dots */}
          <div className="md:hidden mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              aria-label="Previous"
              className="h-10 w-10 rounded-full glass-strong border border-primary/30 flex items-center justify-center text-foreground hover:bg-primary/15"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              aria-label="Next"
              className="h-10 w-10 rounded-full glass-strong border border-primary/30 flex items-center justify-center text-foreground hover:bg-primary/15"
            >
              ›
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

const SlideCard = ({
  slide,
  active,
  t,
}: {
  slide: Slide;
  active: boolean;
  t: (k: string) => string;
}) => {
  const Icon = slide.icon;
  return (
    <div
      className={cn(
        "relative mx-auto max-w-[1100px] transition-all duration-500",
        active ? "opacity-100 scale-100" : "opacity-60 scale-[0.97]"
      )}
    >
      {/* Top label */}
      <div className="flex items-center justify-center mb-5 md:mb-6">
        <div className="inline-flex items-center gap-2 rounded-full glass-strong px-4 py-2 text-xs md:text-sm font-semibold text-foreground border border-primary/25">
          <Icon className="h-4 w-4 text-gold" />
          <span>{t(slide.labelKey)}</span>
        </div>
      </div>

      {/* Device frame — phones get a centered, laptop-sized container */}
      {slide.device === "laptop" ? (
        <LaptopMockup>{slide.render()}</LaptopMockup>
      ) : (
        <div className="flex justify-center py-2">
          <div className="scale-110 md:scale-125 origin-center">
            <PhoneMockup>{slide.render()}</PhoneMockup>
          </div>
        </div>
      )}

      {/* Caption */}
      {slide.caption && (
        <p className="mt-6 md:mt-8 text-center text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {slide.caption}
        </p>
      )}
    </div>
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
