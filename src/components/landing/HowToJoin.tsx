import { ArrowRight, Check, Clock, Send, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { useInView } from "@/hooks/useInView";
import { BOT_URL } from "@/i18n/strings";
import { cn } from "@/lib/utils";
import step1Img from "@/assets/step-1-signup.png";
import step2Img from "@/assets/step-2-bot.png";
import step3Img from "@/assets/step-3-payment.png";
import step4Img from "@/assets/step-4-group.png";

type Step = {
  n: string;
  key: string;
  img: string;
  imgSide: "right" | "left";
  duration: string;
  badge: string;
};

const steps: Step[] = [
  { n: "01", key: "join.1", img: step2Img, imgSide: "right", duration: "10 son.", badge: "Telegram" },
  { n: "02", key: "join.2", img: step1Img, imgSide: "left", duration: "30 son.", badge: "Tezkor" },
  { n: "03", key: "join.3", img: step3Img, imgSide: "right", duration: "1 daq.", badge: "Xavfsiz to‘lov" },
  { n: "04", key: "join.4", img: step4Img, imgSide: "left", duration: "Darhol", badge: "Avtomatik" },
];

export const HowToJoin = () => {
  const { t } = useI18n();

  return (
    <Section id="join" eyebrow="Qo‘shilish" title={t("join.title")} subtitle={t("join.subtitle")}>
      <div className="max-w-5xl mx-auto">
        {/* Stepper progress (desktop) */}
        <Stepper count={steps.length} />

        <div className="relative mt-10 md:mt-14">
          {/* Animated vertical lines */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 bottom-24 w-px overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary to-transparent animate-[flow_3s_ease-in-out_infinite]" />
          </div>
          <div className="md:hidden absolute left-[31px] top-3 bottom-24 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

          <div className="space-y-12 md:space-y-20">
            {steps.map((s, i) => (
              <StepRow
                key={s.n}
                step={s}
                title={t(`${s.key}.title`)}
                desc={t(`${s.key}.desc`)}
                delay={i * 100}
              />
            ))}
          </div>

          {/* Final CTA card */}
          <FinalStep t={t} />
        </div>
      </div>
    </Section>
  );
};

const Stepper = ({ count }: { count: number }) => (
  <div className="hidden md:flex items-center justify-center gap-2 mb-2">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="flex items-center gap-2">
        <div
          className={cn(
            "h-2 rounded-full bg-gradient-gold shadow-[0_0_12px_hsl(var(--primary)/0.6)]",
            i === 0 ? "w-8" : "w-6"
          )}
        />
        {i < count - 1 && <div className="h-px w-8 bg-border" />}
      </div>
    ))}
  </div>
);

const StepRow = ({
  step,
  title,
  desc,
  delay,
}: {
  step: Step;
  title: string;
  desc: string;
  delay: number;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  const tilt =
    step.imgSide === "right"
      ? "perspective(1000px) rotateY(-14deg) rotateX(6deg) rotateZ(-2deg)"
      : "perspective(1000px) rotateY(14deg) rotateX(6deg) rotateZ(2deg)";

  const ImageBlock = (
    <div className="flex justify-center md:block [perspective:1200px]">
      <div
        className="relative w-[180px] sm:w-[200px] md:w-[230px] aspect-[9/16] transition-transform duration-700 hover:!transform-none"
        style={{ transform: tilt, transformStyle: "preserve-3d" }}
      >
        <div className="absolute -inset-3 rounded-3xl bg-gradient-gold opacity-30 blur-2xl -z-10" />
        <div className="relative h-full w-full rounded-3xl overflow-hidden border border-primary/40 bg-background/60 shadow-gold ring-1 ring-primary/20">
          <img
            src={step.img}
            alt={`${title} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent mix-blend-overlay" />
        </div>
      </div>
    </div>
  );

  const TextBlock = (
    <div
      className={cn(
        "group relative rounded-2xl p-px overflow-hidden",
        "bg-gradient-to-br from-primary/40 via-border to-border",
        "hover:from-primary/70 hover:via-primary/20 transition-colors duration-500"
      )}
    >
      <div
        className={cn(
          "relative rounded-2xl p-5 md:p-7 bg-card/85 backdrop-blur-md",
          step.imgSide === "right" ? "md:text-right" : "md:text-left"
        )}
      >
        {/* Top metadata row */}
        <div
          className={cn(
            "flex items-center gap-2 mb-3",
            step.imgSide === "right" ? "md:justify-end" : "md:justify-start"
          )}
        >
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary-glow bg-primary/10 border border-primary/30 px-2.5 py-1 rounded-full">
            <Sparkles className="h-3 w-3" />
            {step.badge}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground border border-border/70 bg-secondary/40 px-2.5 py-1 rounded-full">
            <Clock className="h-3 w-3" />
            {step.duration}
          </span>
        </div>

        <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("relative reveal", inView && "is-visible")}
    >
      {/* MOBILE */}
      <div className="md:hidden">
        <div className="flex items-start gap-5">
          <NumberBadge n={step.n} size="sm" />
          <div className="flex-1 min-w-0">{TextBlock}</div>
        </div>
        <div className="mt-5 pl-[84px]">{ImageBlock}</div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-8">
        <div className={cn(step.imgSide === "left" ? "flex justify-end" : "")}>
          {step.imgSide === "left" ? ImageBlock : TextBlock}
        </div>
        <NumberBadge n={step.n} size="lg" />
        <div className={cn(step.imgSide === "right" ? "flex justify-start" : "")}>
          {step.imgSide === "right" ? ImageBlock : TextBlock}
        </div>
      </div>
    </div>
  );
};

const NumberBadge = ({ n, size }: { n: string; size: "sm" | "lg" }) => {
  const dim = size === "lg" ? "h-[84px] w-[84px]" : "h-[64px] w-[64px]";
  const ring = size === "lg" ? "h-[110px] w-[110px]" : "h-[88px] w-[88px]";
  return (
    <div className="relative z-10 shrink-0 grid place-items-center">
      {/* Pulse ring */}
      <div
        className={cn(
          "absolute rounded-full border border-primary/40",
          ring,
          "animate-[ping_3s_ease-in-out_infinite] opacity-50"
        )}
      />
      <div
        className={cn(
          "relative rounded-2xl bg-gradient-gold flex items-center justify-center font-display font-extrabold text-primary-foreground shadow-gold",
          dim,
          size === "lg" ? "text-2xl" : "text-lg"
        )}
      >
        {n}
      </div>
      <div className={cn("absolute rounded-2xl bg-primary/40 blur-2xl -z-10", dim)} />
    </div>
  );
};

const FinalStep = ({ t }: { t: (k: string) => string }) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        "relative reveal mt-14 md:mt-20 max-w-2xl mx-auto",
        inView && "is-visible"
      )}
    >
      <div className="relative rounded-3xl p-px bg-gradient-to-br from-primary/70 via-primary/30 to-primary/10 shadow-gold">
        <div className="relative rounded-3xl p-7 md:p-9 bg-card/85 backdrop-blur-md text-center overflow-hidden">
          <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />

          <div className="relative inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-gold shadow-gold mb-5">
            <Check className="h-6 w-6 text-primary-foreground" strokeWidth={3} />
          </div>

          <h3 className="relative font-display font-bold text-xl md:text-2xl text-foreground mb-2">
            {t("join.final.title")}
          </h3>
          <p className="relative text-sm md:text-base text-muted-foreground mb-6 max-w-md mx-auto">
            {t("join.final.desc")}
          </p>

          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm md:text-base font-semibold"
          >
            <Send className="h-4 w-4" />
            {t("join.cta")}
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="relative mt-3 text-xs text-muted-foreground break-all">{BOT_URL}</div>
        </div>
      </div>
    </div>
  );
};
