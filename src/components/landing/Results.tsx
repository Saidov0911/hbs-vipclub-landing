import { useI18n } from "@/i18n/I18nProvider";
import { Section } from "./Section";
import { LaptopMockup, PhoneMockup } from "./Mockups";
import { ChartScreen, FeedbackScreen, TelegramChatScreen } from "./Screens";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { CheckCircle2, MessageSquare, TrendingUp, Users } from "lucide-react";
import phoneTelegram from "@/assets/phone-telegram.png";

export const Results = () => {
  const { t } = useI18n();
  return (
    <Section id="results" eyebrow="Pruflar" title={t("results.title")} subtitle={t("results.subtitle")}>
      <div className="space-y-8 md:space-y-10">
        {/* Row 1: Big laptop with VIP chat + floating badges */}
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-x-10 -top-6 -bottom-6 -z-10 bg-gradient-to-b from-primary/8 to-transparent blur-3xl rounded-full" />
            <Label icon={MessageSquare} className="md:absolute md:-top-2 md:left-2 z-10">
              {t("results.label.2")}
            </Label>
            <LaptopMockup>
              <TelegramChatScreen variant="vip" />
            </LaptopMockup>
            <FloatingStatCard
              className="hidden md:flex absolute right-2 top-10"
              icon={Users}
              value="1 248"
              label="A’zolar"
            />
            <FloatingStatCard
              className="hidden md:flex absolute left-4 bottom-10"
              icon={TrendingUp}
              value="+312%"
              label="Eng yaxshi signal"
              accent="emerald"
            />
          </div>
        </Reveal>

        {/* Row 2: chart laptop + phone with signals */}
        <div className="grid lg:grid-cols-5 gap-6 items-center">
          <Reveal className="lg:col-span-3">
            <Label icon={TrendingUp}>{t("results.label.1")}</Label>
            <div className="mt-3">
              <LaptopMockup>
                <ChartScreen />
              </LaptopMockup>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-2 flex justify-center" delay={150}>
            <div className="relative">
              <Label icon={CheckCircle2} className="mb-3">{t("results.label.4")}</Label>
              <PhoneMockup>
                <TelegramChatScreen variant="signals" />
              </PhoneMockup>
            </div>
          </Reveal>
        </div>

        {/* Row 3: Feedback laptop + Telegram preview widget */}
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          <Reveal className="lg:col-span-3">
            <Label icon={MessageSquare}>{t("results.label.3")}</Label>
            <div className="mt-3">
              <LaptopMockup>
                <FeedbackScreen />
              </LaptopMockup>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-2" delay={150}>
            <TelegramPreview />
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

const Label = ({
  icon: Icon,
  children,
  className,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "inline-flex items-center gap-2 rounded-full glass-strong px-3.5 py-1.5 text-xs font-semibold text-foreground",
      className
    )}
  >
    <Icon className="h-3.5 w-3.5 text-gold" />
    {children}
  </div>
);

const FloatingStatCard = ({
  icon: Icon,
  value,
  label,
  className,
  accent,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  className?: string;
  accent?: "gold" | "emerald";
}) => (
  <div className={cn("glass-strong rounded-2xl px-5 py-3 flex items-center gap-3 animate-float", className)}>
    <div
      className={cn(
        "h-10 w-10 rounded-xl flex items-center justify-center",
        accent === "emerald" ? "bg-accent/15 text-accent border border-accent/40" : "bg-primary/15 text-gold border border-primary/40"
      )}
    >
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <div className="font-display font-bold text-lg leading-none text-foreground">{value}</div>
      <div className="text-[11px] text-muted-foreground mt-1">{label}</div>
    </div>
  </div>
);

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

/** Stylized Telegram channel preview widget. */
const TelegramPreview = () => {
  const { t } = useI18n();
  return (
    <div className="glass-strong rounded-2xl p-5 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-display font-bold">
          H
        </div>
        <div>
          <div className="font-semibold text-foreground">{t("results.tg.title")}</div>
          <div className="text-xs text-accent">{t("results.tg.subtitle")}</div>
        </div>
      </div>
      <div className="space-y-3 flex-1">
        {[
          { who: "Mamur · Mentor", text: "📌 Bugungi watchlist: BTC, ETH, SOL — 4H taymfreymda kuzatamiz." },
          { who: "Abdulloh · Stocks", text: "NVDA earnings tahlili tayyor. Kanalga joyladim — savol bo‘lsa yozing." },
          { who: "Bot", text: "🎯 BTC LONG signali: +8.2% — TP1 ishladi." },
        ].map((m, i) => (
          <div key={i} className="rounded-xl bg-card/70 border border-border/60 p-3">
            <div className="text-[11px] font-semibold text-gold mb-0.5">{m.who}</div>
            <div className="text-sm text-foreground/90 leading-snug">{m.text}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <div className="flex -space-x-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-6 w-6 rounded-full border-2 border-background"
              style={{ background: `linear-gradient(140deg, hsl(${(i * 70) % 360} 40% 30%), hsl(${(i * 70 + 40) % 360} 40% 18%))` }}
            />
          ))}
        </div>
        <span>+1 244 a’zo bu yerda</span>
      </div>
    </div>
  );
};
