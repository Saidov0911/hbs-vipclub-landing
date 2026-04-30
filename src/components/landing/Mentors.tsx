import { Send } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { PlaceholderAvatar } from "./Placeholders";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const mentors = ["mentor.1", "mentor.2", "mentor.3", "mentor.4"];

export const Mentors = () => {
  const { t } = useI18n();
  return (
    <Section id="mentors" eyebrow="Jamoa" title={t("mentors.title")} subtitle={t("mentors.subtitle")}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {mentors.map((k, i) => (
          <Card key={k} name={t(`${k}.name`)} role={t(`${k}.role`)} delay={i * 80} />
        ))}
      </div>
    </Section>
  );
};

const Card = ({ name, role, delay }: { name: string; role: string; delay: number }) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "group glass rounded-2xl p-6 text-center hover:-translate-y-1.5 transition-all duration-500 reveal hover:border-primary/30",
        inView && "is-visible"
      )}
    >
      <div className="relative inline-block mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-gold blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
        <PlaceholderAvatar name={name} size={108} ring />
      </div>
      <h3 className="font-display font-semibold text-base md:text-lg text-foreground">{name}</h3>
      <p className="mt-1 text-sm text-gold">{role}</p>
      <div className="mt-4 inline-flex items-center justify-center h-9 w-9 rounded-full bg-secondary/70 text-muted-foreground group-hover:text-gold group-hover:bg-primary/15 transition-colors">
        <Send className="h-4 w-4" />
      </div>
    </div>
  );
};
