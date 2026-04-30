import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const qs = ["faq.q1", "faq.q2", "faq.q3", "faq.q4", "faq.q5"];
const as = ["faq.a1", "faq.a2", "faq.a3", "faq.a4", "faq.a5"];

export const FAQ = () => {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Section id="faq" eyebrow="FAQ" title={t("faq.title")} subtitle={t("faq.subtitle")}>
      <div ref={ref} className={cn("max-w-3xl mx-auto reveal", inView && "is-visible")}>
        <Accordion type="single" collapsible className="space-y-3">
          {qs.map((q, i) => (
            <AccordionItem
              key={q}
              value={`item-${i}`}
              className="glass rounded-2xl border-0 px-5 md:px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="py-5 text-left font-display font-semibold text-base md:text-lg text-foreground hover:no-underline hover:text-gold">
                {t(q)}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-5">
                {t(as[i])}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};
