import { Bitcoin, LineChart, Sparkles, Briefcase, TrendingUp, Users, Wallet } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import mentorMamur from "@/assets/mentor-mamur.png";
import mentorAbdulloh from "@/assets/mentor-abdulloh.png";
import mentorEldorbek from "@/assets/mentor-eldorbek.png";
import mentorBaxodir from "@/assets/mentor-baxodir.png";
import mentorAmirxon from "@/assets/mentor-amirxon.jpeg";

type Stat = { icon: React.ElementType; text: string };

type MentorMeta = {
  key: string;
  photo: string;
  icon: React.ElementType;
  market: "Crypto" | "Stocks";
  accent: string;
  stats: Stat[];
  objectPosition?: string;
};

const mentors: MentorMeta[] = [
  {
    key: "mentor.1",
    photo: mentorMamur,
    icon: Bitcoin,
    market: "Crypto",
    accent: "text-amber-400",
    stats: [
      { icon: Briefcase, text: "Moliya bozorida — 4 yillik tajriba" },
      { icon: Wallet, text: "2 000 000$ dan oshiq aylanma" },
    ],
  },
  {
    key: "mentor.2",
    photo: mentorAbdulloh,
    icon: LineChart,
    market: "Stocks",
    accent: "text-emerald-400",
    stats: [
      { icon: Briefcase, text: "Moliya bozorida — 6 yillik tajriba" },
      { icon: Users, text: "1000+ o‘quvchilar" },
    ],
  },
  {
    key: "mentor.3",
    photo: mentorBaxodir,
    icon: LineChart,
    market: "Stocks",
    accent: "text-emerald-400",
    objectPosition: "center 20%",
    stats: [
      { icon: Briefcase, text: "Moliya bozorida — 4 yillik tajriba" },
      { icon: TrendingUp, text: "Yillik stabil 23% daromad" },
    ],
  },
  {
    key: "mentor.5",
    photo: mentorEldorbek,
    icon: Bitcoin,
    market: "Crypto",
    accent: "text-amber-400",
    stats: [
      { icon: Briefcase, text: "Moliya bozorida — 3 yillik tajriba" },
      { icon: Wallet, text: "HBS jamoasi bilan $600 000 aylanma" },
    ],
  },
  {
    key: "mentor.6",
    photo: mentorAmirxon,
    icon: Bitcoin,
    market: "Crypto",
    accent: "text-amber-400",
    stats: [
      { icon: Briefcase, text: "Kripto treyder — 4 yillik tajriba" },
      { icon: Wallet, text: "1 000 000$ dan oshiq aylanma" },
    ],
  },
];

export const Mentors = () => {
  const { t } = useI18n();
  return (
    <Section id="mentors" eyebrow="Jamoa" title={t("mentors.title")} subtitle={t("mentors.subtitle")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
        {mentors.map((m, i) => (
          <Card
            key={m.key}
            name={t(`${m.key}.name`)}
            role={t(`${m.key}.role`)}
            photo={m.photo}
            icon={m.icon}
            market={m.market}
            accent={m.accent}
            stats={m.stats}
            objectPosition={m.objectPosition}
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
  stats,
  delay,
}: {
  name: string;
  role: string;
  photo: string;
  icon: React.ElementType;
  market: string;
  accent: string;
  stats: Stat[];
  delay: number;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("group relative reveal", inView && "is-visible")}
    >
      <div className="absolute -inset-px rounded-[22px] bg-gradient-to-br from-primary/40 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      <div className="relative h-full glass-strong rounded-[20px] overflow-hidden border border-border/60 group-hover:border-primary/40 transition-all duration-500 group-hover:-translate-y-1.5 shadow-card group-hover:shadow-elegant flex flex-col">
        {/* Photo */}
        <div className="relative h-56 md:h-60 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/95" />
          <img
            src={photo}
            alt={name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
          />

          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-background/70 backdrop-blur-md border border-border/60 px-2.5 py-1 text-[11px] font-semibold text-foreground">
              <Icon className={cn("h-3.5 w-3.5", accent)} />
              {market}
            </span>
          </div>

          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 backdrop-blur-md border border-primary/40 px-2 py-1 text-[10px] font-semibold text-gold">
              <Sparkles className="h-3 w-3" />
              HBS
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="relative px-5 pb-5 -mt-6 flex-1 flex flex-col">
          <h3 className="font-display font-semibold text-lg md:text-xl text-foreground leading-tight">
            {name}
          </h3>
          <p className="mt-1 text-sm text-gold/90">{role}</p>

          {/* Stats list — reveals on hover with staggered slide-up */}
          <ul
            className={cn(
              "mt-4 space-y-2",
              "max-h-0 opacity-0 overflow-hidden",
              "transition-[max-height,opacity,margin] duration-500 ease-out",
              "group-hover:max-h-[260px] group-hover:opacity-100 group-hover:mt-4"
            )}
          >
            {stats.map((s, idx) => {
              const SIcon = s.icon;
              return (
                <li
                  key={idx}
                  style={{ transitionDelay: `${120 + idx * 90}ms` }}
                  className={cn(
                    "flex items-start gap-2 rounded-lg bg-secondary/40 border border-border/50 px-2.5 py-2 text-[12px] leading-snug text-muted-foreground",
                    "translate-y-2 opacity-0 transition-all duration-400 ease-out",
                    "group-hover:translate-y-0 group-hover:opacity-100",
                    "hover:border-primary/40 hover:bg-secondary/60 hover:text-foreground"
                  )}
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/15 border border-primary/30 text-gold">
                    <SIcon className="h-3 w-3" />
                  </span>
                  <span>{s.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
