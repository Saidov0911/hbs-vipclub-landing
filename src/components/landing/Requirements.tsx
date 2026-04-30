import { Check, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export const Requirements = () => {
  const { t } = useI18n();

  const noItems = ["req.no.1", "req.no.2", "req.no.3", "req.no.4"];
  const yesItems = ["req.yes.1", "req.yes.2", "req.yes.3", "req.yes.4"];

  return (
    <Section id="requirements" eyebrow="Talablar" title={t("req.title")} subtitle={t("req.subtitle")}>
      <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        <Card variant="no" title={t("req.no.title")}>
          {noItems.map((k) => (
            <Row key={k} variant="no">{t(k)}</Row>
          ))}
        </Card>
        <Card variant="yes" title={t("req.yes.title")}>
          {yesItems.map((k) => (
            <Row key={k} variant="yes">{t(k)}</Row>
          ))}
        </Card>
      </div>
    </Section>
  );
};

const Card = ({
  children,
  title,
  variant,
}: {
  children: React.ReactNode;
  title: string;
  variant: "yes" | "no";
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl p-7 md:p-8 reveal border",
        variant === "yes"
          ? "bg-gradient-to-br from-accent/8 to-transparent border-accent/30"
          : "bg-gradient-to-br from-destructive/8 to-transparent border-destructive/25",
        inView && "is-visible"
      )}
    >
      <h3
        className={cn(
          "font-display font-semibold text-xl mb-5",
          variant === "yes" ? "text-accent" : "text-destructive/90"
        )}
      >
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
};

const Row = ({ variant, children }: { variant: "yes" | "no"; children: React.ReactNode }) => (
  <div className="flex items-center gap-3 text-foreground/90">
    <div
      className={cn(
        "h-7 w-7 rounded-full flex items-center justify-center shrink-0 border",
        variant === "yes" ? "bg-accent/15 border-accent/40 text-accent" : "bg-destructive/15 border-destructive/40 text-destructive"
      )}
    >
      {variant === "yes" ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
    </div>
    <span className="text-sm md:text-base">{children}</span>
  </div>
);
