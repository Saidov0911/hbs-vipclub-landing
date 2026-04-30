import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { useInView } from "@/hooks/useInView";
import { BOT_URL } from "@/i18n/strings";
import { cn } from "@/lib/utils";

const steps = [
  { n: "01", key: "join.1" },
  { n: "02", key: "join.2" },
  { n: "03", key: "join.3" },
  { n: "04", key: "join.4" },
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
              <Step key={s.n} n={s.n} title={t(`${s.key}.title`)} desc={t(`${s.key}.desc`)} delay={i * 100} />
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

const Step = ({ n, title, desc, delay }: { n: string; title: string; desc: string; delay: number }) => {
  const { ref, inView } = useInView<HTMLDivElement>();
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
      <div className="glass rounded-2xl p-5 md:p-6 flex-1">
        <h3 className="font-display font-semibold text-lg text-foreground mb-1.5">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};
