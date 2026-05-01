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
  { n: "01", key: "join.1", img: step1Img, half: "top" as const },
  { n: "02", key: "join.2", img: step2Img, half: "bottom" as const },
  { n: "03", key: "join.3", img: step3Img, half: "bottom" as const },
  { n: "04", key: "join.4", img: step4Img, half: "top" as const },
];

export const HowToJoin = () => {
  const { t } = useI18n();
  return (
    <Section id="join" eyebrow="Qo‘shilish" title={t("join.title")} subtitle={t("join.subtitle")}>
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[31px] md:left-[35px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
          <div className="space-y-4">
            {steps.map((s, i) => (
              <Step
                key={s.n}
                n={s.n}
                title={t(`${s.key}.title`)}
                desc={t(`${s.key}.desc`)}
                img={s.img}
                half={s.half}
                delay={i * 100}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
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
  half,
  delay,
}: {
  n: string;
  title: string;
  desc: string;
  img: string;
  half: "top" | "bottom";
  delay: number;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  // tilt alternates depending on half so the 3D angle feels natural
  const tilt =
    half === "top"
      ? "perspective(900px) rotateX(14deg) rotateY(-10deg) rotateZ(-2deg)"
      : "perspective(900px) rotateX(-14deg) rotateY(10deg) rotateZ(2deg)";
  // show only the requested half by translating the inner image
  const objectPosition = half === "top" ? "center top" : "center bottom";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("relative flex items-start gap-5 reveal", inView && "is-visible")}
    >
      <div className="relative shrink-0">
        <div className="h-[64px] w-[64px] md:h-[72px] md:w-[72px] rounded-2xl bg-gradient-gold flex items-center justify-center font-display font-extrabold text-primary-foreground text-lg shadow-gold">
          {n}
        </div>
        <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl -z-10" />
      </div>
      <div className="glass rounded-2xl p-5 md:p-6 flex-1 flex items-start gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-lg text-foreground mb-1.5">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
        <div className="shrink-0 hidden sm:block [perspective:1000px]">
          <div
            className="relative w-[110px] md:w-[130px] h-[150px] md:h-[180px] transition-transform duration-500 hover:!transform-none"
            style={{ transform: tilt, transformStyle: "preserve-3d" }}
          >
            {/* gold glow behind */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-gold opacity-30 blur-xl -z-10" />
            {/* frame */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-primary/40 bg-background/60 shadow-gold ring-1 ring-primary/20">
              <img
                src={img}
                alt={`${title} screenshot`}
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ objectPosition }}
              />
              {/* fade on the cropped edge for soft cut */}
              <div
                className={cn(
                  "pointer-events-none absolute inset-x-0 h-12",
                  half === "top"
                    ? "bottom-0 bg-gradient-to-b from-transparent to-background/90"
                    : "top-0 bg-gradient-to-t from-transparent to-background/90"
                )}
              />
              {/* glossy highlight */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
