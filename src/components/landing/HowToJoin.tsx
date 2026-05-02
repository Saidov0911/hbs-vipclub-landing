import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { useInView } from "@/hooks/useInView";
import { BOT_URL } from "@/i18n/strings";
import { cn } from "@/lib/utils";
import step1Img from "@/assets/step-1-signup.png";
import step2Img from "@/assets/step-2-bot.png";
import step3Img from "@/assets/step-3-payment.png";
import step4Img from "@/assets/step-4-group.png";

const steps = [
  { n: "01", key: "join.1", img: step1Img, imgSide: "right" as const },
  { n: "02", key: "join.2", img: step2Img, imgSide: "left" as const },
  { n: "03", key: "join.3", img: step3Img, imgSide: "right" as const },
  { n: "04", key: "join.4", img: step4Img, imgSide: "left" as const },
];

export const HowToJoin = () => {
  const { t } = useI18n();
  return (
    <Section id="join" eyebrow="Qo‘shilish" title={t("join.title")} subtitle={t("join.subtitle")}>
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* center vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
          {/* left vertical line (mobile) */}
          <div className="md:hidden absolute left-[31px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

          <div className="space-y-10 md:space-y-16">
            {steps.map((s, i) => (
              <Step
                key={s.n}
                n={s.n}
                title={t(`${s.key}.title`)}
                desc={t(`${s.key}.desc`)}
                img={s.img}
                imgSide={s.imgSide}
                delay={i * 100}
              />
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm md:text-base font-semibold"
          >
            {t("join.cta")}
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="mt-3 text-xs text-muted-foreground break-all">{BOT_URL}</div>
        </div>
      </div>
    </Section>
  );
};

const Step = ({
  n,
  title,
  desc,
  img,
  imgSide,
  delay,
}: {
  n: string;
  title: string;
  desc: string;
  img: string;
  imgSide: "left" | "right";
  delay: number;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  // 3D tilt — direction depends on which side the image sits
  const tilt =
    imgSide === "right"
      ? "perspective(1000px) rotateY(-14deg) rotateX(6deg) rotateZ(-2deg)"
      : "perspective(1000px) rotateY(14deg) rotateX(6deg) rotateZ(2deg)";

  const ImageBlock = (
    <div className="flex justify-center md:block [perspective:1200px]">
      <div
        className="relative w-[180px] sm:w-[200px] md:w-[230px] aspect-[9/16] transition-transform duration-500 hover:!transform-none"
        style={{ transform: tilt, transformStyle: "preserve-3d" }}
      >
        <div className="absolute -inset-3 rounded-3xl bg-gradient-gold opacity-30 blur-2xl -z-10" />
        <div className="relative h-full w-full rounded-3xl overflow-hidden border border-primary/40 bg-background/60 shadow-gold ring-1 ring-primary/20">
          <img
            src={img}
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
        "glass rounded-2xl p-5 md:p-6",
        imgSide === "right" ? "md:text-right" : "md:text-left"
      )}
    >
      <h3 className="font-display font-semibold text-xl text-foreground mb-2">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("relative reveal", inView && "is-visible")}
    >
      {/* MOBILE layout: number on left, text on right, image below */}
      <div className="md:hidden">
        <div className="flex items-start gap-5">
          <div className="relative shrink-0">
            <div className="h-[64px] w-[64px] rounded-2xl bg-gradient-gold flex items-center justify-center font-display font-extrabold text-primary-foreground text-lg shadow-gold">
              {n}
            </div>
            <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl -z-10" />
          </div>
          <div className="flex-1 min-w-0">{TextBlock}</div>
        </div>
        <div className="mt-5 pl-[84px]">{ImageBlock}</div>
      </div>

      {/* DESKTOP layout: 3-column grid, number centered, text/image alternate sides */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-8">
        {/* LEFT slot */}
        <div className={cn(imgSide === "left" ? "flex justify-end" : "")}>
          {imgSide === "left" ? ImageBlock : TextBlock}
        </div>

        {/* CENTER number */}
        <div className="relative z-10 shrink-0">
          <div className="h-[80px] w-[80px] rounded-2xl bg-gradient-gold flex items-center justify-center font-display font-extrabold text-primary-foreground text-2xl shadow-gold">
            {n}
          </div>
          <div className="absolute inset-0 rounded-2xl bg-primary/40 blur-2xl -z-10" />
        </div>

        {/* RIGHT slot */}
        <div className={cn(imgSide === "right" ? "flex justify-start" : "")}>
          {imgSide === "right" ? ImageBlock : TextBlock}
        </div>
      </div>
    </div>
  );
};
