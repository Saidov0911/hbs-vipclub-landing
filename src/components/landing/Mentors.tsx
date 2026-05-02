import { Send } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { PlaceholderAvatar } from "./Placeholders";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import mentorMamur from "@/assets/mentor-mamur.png";
import mentorAbdulloh from "@/assets/mentor-abdulloh.png";
import mentorEldorbek from "@/assets/mentor-eldorbek.png";
import mentorBaxodir from "@/assets/mentor-baxodir.png";

const mentors: { key: string; photo?: string }[] = [
  { key: "mentor.1", photo: mentorMamur },
  { key: "mentor.2", photo: mentorAbdulloh },
  { key: "mentor.3", photo: mentorBaxodir },
  { key: "mentor.5", photo: mentorEldorbek },
];

export const Mentors = () => {
  const { t } = useI18n();
  return (
    <Section id="mentors" eyebrow="Jamoa" title={t("mentors.title")} subtitle={t("mentors.subtitle")}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {mentors.map((m, i) => (
          <Card
            key={m.key}
            name={t(`${m.key}.name`)}
            role={t(`${m.key}.role`)}
            photo={m.photo}
            delay={i * 80}
          />
        ))}
      </div>
    </Section>
  );
};

const Card = ({
  name,
  role,
  photo,
  delay,
}: {
  name: string;
  role: string;
  photo?: string;
  delay: number;
}) => {
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
        <div className="absolute -inset-2 rounded-full bg-gradient-gold blur-xl opacity-30 group-hover:opacity-70 transition-opacity" />
        {photo ? (
          <div
            className="relative h-28 w-28 rounded-full overflow-hidden ring-2 ring-primary/40 ring-offset-2 ring-offset-background bg-gradient-to-b from-secondary/60 to-background"
          >
            <img
              src={photo}
              alt={name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-foreground/10" />
          </div>
        ) : (
          <PlaceholderAvatar name={name} size={108} ring />
        )}
      </div>
      <h3 className="font-display font-semibold text-base md:text-lg text-foreground">{name}</h3>
      <p className="mt-1 text-sm text-gold">{role}</p>
      <div className="mt-4 inline-flex items-center justify-center h-9 w-9 rounded-full bg-secondary/70 text-muted-foreground group-hover:text-gold group-hover:bg-primary/15 transition-colors">
        <Send className="h-4 w-4" />
      </div>
    </div>
  );
};
