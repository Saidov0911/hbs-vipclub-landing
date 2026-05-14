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
    objectPosition: "center center",
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
      { icon: Wallet, text: "ELMAKON jamoasi bilan $600 000 aylanma" },
// ... keep existing code
              ELMAKON
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="relative px-5 pb-5 pt-4 flex-1 flex flex-col bg-card/95 backdrop-blur-sm border-t border-border/40">
          <h3 className="font-display font-bold text-xl md:text-2xl text-foreground leading-tight tracking-tight">
            {name}
          </h3>
          <p className="mt-1.5 text-sm font-semibold text-gold">{role}</p>

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
