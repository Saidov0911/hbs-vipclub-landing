import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import fb1 from "@/assets/feedback/fb-1.png";
import fb2 from "@/assets/feedback/fb-2.png";
import fb3 from "@/assets/feedback/fb-3.png";
import fb4 from "@/assets/feedback/fb-4.png";
import fb5 from "@/assets/feedback/fb-5.png";
import fb6 from "@/assets/feedback/fb-6.png";
import fb7 from "@/assets/feedback/fb-7.png";
import fb8 from "@/assets/feedback/fb-8.png";
import fb9 from "@/assets/feedback/fb-9.png";
import fb10 from "@/assets/feedback/fb-10.png";
import fb11 from "@/assets/feedback/fb-11.png";
import fb12 from "@/assets/feedback/fb-12.png";
import fb13 from "@/assets/feedback/fb-13.png";
import fb14 from "@/assets/feedback/fb-14.png";
import fb15 from "@/assets/feedback/fb-15.png";
import fb16 from "@/assets/feedback/fb-16.png";

type FeedbackItem = { src: string; label: string };

const ITEMS: FeedbackItem[] = [
  { src: fb1, label: "Signal natijalari" },
  { src: fb2, label: "Real savdo misollari" },
  { src: fb3, label: "Feedbacklar" },
  { src: fb4, label: "Guruh ichidagi tahlillar" },
  { src: fb5, label: "Signal natijalari" },
  { src: fb6, label: "Real savdo misollari" },
  { src: fb7, label: "Feedbacklar" },
  { src: fb8, label: "Guruh ichidagi tahlillar" },
  { src: fb9, label: "Real savdo misollari" },
  { src: fb10, label: "Signal natijalari" },
  { src: fb11, label: "Real savdo misollari" },
  { src: fb12, label: "Signal natijalari" },
  { src: fb13, label: "Guruh ichidagi tahlillar" },
  { src: fb14, label: "Feedbacklar" },
  { src: fb15, label: "Guruh ichidagi tahlillar" },
  { src: fb16, label: "Feedbacklar" },
];

export const Results = () => {
  const { t } = useI18n();

  return (
    <Section id="results" eyebrow="Pruflar" title={t("results.title")} subtitle={t("results.subtitle")}>
      <Reveal>
        <div className="relative">
          <div className="pointer-events-none absolute -inset-x-10 -top-10 -bottom-10 -z-10 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)] blur-3xl" />

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
            {ITEMS.map((item, i) => (
              <div
                key={i}
                className="group relative mb-4 break-inside-avoid rounded-xl overflow-hidden border border-border/60 bg-card/40 shadow-md hover:border-primary/40 hover:shadow-elegant transition-all duration-300"
              >
                <img
                  src={item.src}
                  alt={`HBS VIP Club — ${item.label} ${i + 1}`}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                {/* Gradient + label overlay */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 px-3 py-1 text-[11px] md:text-xs font-semibold text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {item.label}
                  </span>
                </div>
                {/* Always-visible compact badge top-left */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-background/70 backdrop-blur-md border border-primary/30 px-2.5 py-1 text-[10px] md:text-[11px] font-medium text-foreground shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
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
