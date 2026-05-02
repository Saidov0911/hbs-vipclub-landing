import { Bitcoin, LineChart, TrendingUp, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import mentorMamur from "@/assets/mentor-mamur.png";
import mentorAbdulloh from "@/assets/mentor-abdulloh.png";
import mentorEldorbek from "@/assets/mentor-eldorbek.png";
import mentorBaxodir from "@/assets/mentor-baxodir.png";

type MentorMeta = {
  key: string;
  photo: string;
  icon: React.ElementType;
  market: "Crypto" | "Stocks";
  accent: string; // tailwind text class for icon
};

const mentors: MentorMeta[] = [
  { key: "mentor.1", photo: mentorMamur, icon: Bitcoin, market: "Crypto", accent: "text-amber-400" },
  { key: "mentor.2", photo: mentorAbdulloh, icon: LineChart, market: "Stocks", accent: "text-emerald-400" },
  { key: "mentor.3", photo: mentorBaxodir, icon: LineChart, market: "Stocks", accent: "text-emerald-400" },
  { key: "mentor.5", photo: mentorEldorbek, icon: Bitcoin, market: "Crypto", accent: "text-amber-400" },
];

export const Mentors = () => {
  const { t } = useI18n();
  return (
    <Section id="mentors" eyebrow="Jamoa" title={t("mentors.title")} subtitle={t("mentors.subtitle")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {mentors.map((m, i) => (
          <Card
            key={m.key}
            name={t(`${m.key}.name`)}
            role={t(`${m.key}.role`)}
            photo={m.photo}
            icon={m.icon}
            market={m.market}
            accent={m.accent}
            delay={i * 90}
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
  icon: Icon,
  market,
  accent,
  delay,
}: {
  name: string;
  role: string;
  photo: string;
  icon: React.ElementType;
  market: string;
  accent: string;
  delay: number;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "group relative reveal",
        inView && "is-visible"
      )}
    >
      {/* Animated gradient ring on hover */}
      <div className="absolute -inset-px rounded-[22px] bg-gradient-to-br from-primary/40 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      <div className="relative h-full glass-strong rounded-[20px] overflow-hidden border border-border/60 group-hover:border-primary/40 transition-all duration-500 group-hover:-translate-y-1.5 shadow-card group-hover:shadow-elegant">
        {/* Photo area with rich gradient backdrop */}
        <div className="relative h-56 md:h-60 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/95" />
          <img
            src={photo}
            alt={name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
          />

          {/* Market chip top-left */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-background/70 backdrop-blur-md border border-border/60 px-2.5 py-1 text-[11px] font-semibold text-foreground">
              <Icon className={cn("h-3.5 w-3.5", accent)} />
              {market}
            </span>
          </div>

          {/* Verified badge top-right */}
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 backdrop-blur-md border border-primary/40 px-2 py-1 text-[10px] font-semibold text-gold">
              <Sparkles className="h-3 w-3" />
              HBS
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="relative px-5 pb-5 -mt-6">
          <h3 className="font-display font-semibold text-lg md:text-xl text-foreground leading-tight">
            {name}
          </h3>
          <p className="mt-1 text-sm text-gold/90">{role}</p>

          {/* Mini stat row */}
          <div className="mt-4 flex items-center gap-2 text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1 rounded-md bg-secondary/50 border border-border/50 px-2 py-1">
              <TrendingUp className="h-3 w-3 text-emerald-400" />
              Active mentor
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-secondary/50 border border-border/50 px-2 py-1">
              VIP Club
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
