import { cn } from "@/lib/utils";
import { TrendingUp, ArrowUpRight, BarChart3, Heart, MessageCircle } from "lucide-react";

/** Stylised Telegram chat preview shown inside laptop / phone mockups. */
export const TelegramChatScreen = ({
  variant = "vip",
  className,
}: {
  variant?: "vip" | "signals" | "feedback";
  className?: string;
}) => {
  return (
    <div className={cn("h-full w-full flex flex-col bg-[hsl(222_55%_5%)]", className)}>
      {/* header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border/60 bg-[hsl(222_50%_7%)]">
        <div className="h-9 w-9 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
          H
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-semibold truncate text-foreground">HBS ACADEMY</div>
          <div className="text-[11px] text-accent">online · 400+ a’zo</div>
        </div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Yopiq</div>
      </div>

      <div className="flex-1 overflow-hidden p-3 space-y-2.5 bg-grid grid-radial-mask">
        {variant === "vip" && (
          <>
            <ChatBubble author="Mamur · Mentor" text="Bugun BTC 4H grafikda muhim qarshilik yonida. Long uchun signal tayyorlayapmiz." accent="gold" />
            <ChatBubble author="Abdulloh · Stocks" text="NVDA: Earnings oldidan portfelni 30% ga kamaytirdik." />
            <SignalCard />
            <ChatBubble author="A’zo" text="Rahmat jamoa! Kechagi signal +18% berdi 🔥" accent="emerald" me />
          </>
        )}
        {variant === "signals" && (
          <>
            <SignalCard />
            <SignalCard symbol="ETH/USDT" pct="+12.4%" entry="3 410" tp="3 820" />
            <ChatBubble author="Bot" text="🎯 Target 1 ishladi. SL break-evenga ko‘chirildi." accent="emerald" />
          </>
        )}
        {variant === "feedback" && (
          <>
            <ChatBubble author="A’zo · @ulug‘bek" text="3 oy ichida +42% — bu klub haqiqatan ham ish beradi." accent="emerald" me />
            <ChatBubble author="A’zo · @nodir" text="Mentorlar har bir savolga to‘liq javob beradi. Rahmat!" me />
            <ChatBubble author="A’zo · @sevara" text="Boshlang‘ich darslar juda tushunarli. Tavsiya qilaman." accent="emerald" me />
          </>
        )}
      </div>

      {/* input bar */}
      <div className="px-3 py-2.5 border-t border-border/60 bg-[hsl(222_50%_7%)] flex items-center gap-2">
        <div className="flex-1 h-8 rounded-full bg-muted/60 px-3 flex items-center text-[11px] text-muted-foreground">
          Xabar yozing...
        </div>
        <div className="h-8 w-8 rounded-full bg-gradient-gold" />
      </div>
    </div>
  );
};

const ChatBubble = ({
  author,
  text,
  accent,
  me,
}: {
  author: string;
  text: string;
  accent?: "gold" | "emerald";
  me?: boolean;
}) => (
  <div className={cn("max-w-[82%]", me && "ml-auto")}>
    <div
      className={cn(
        "rounded-2xl px-3.5 py-2 border text-[12px] leading-snug",
        me ? "bg-primary/10 border-primary/25" : "bg-card/80 border-border/60",
        accent === "gold" && "border-primary/40",
        accent === "emerald" && "border-accent/40"
      )}
    >
      <div
        className={cn(
          "text-[10px] font-semibold mb-0.5",
          accent === "gold" && "text-gold",
          accent === "emerald" && "text-accent",
          !accent && "text-muted-foreground"
        )}
      >
        {author}
      </div>
      <div className="text-foreground/90">{text}</div>
    </div>
  </div>
);

const SignalCard = ({
  symbol = "BTC/USDT",
  pct = "+8.2%",
  entry = "61 240",
  tp = "66 300",
}: {
  symbol?: string;
  pct?: string;
  entry?: string;
  tp?: string;
}) => (
  <div className="rounded-2xl border border-primary/30 bg-gradient-gold-soft p-3 text-[12px]">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 font-semibold text-foreground">
        <BarChart3 className="h-3.5 w-3.5 text-gold" />
        {symbol} · LONG
      </div>
      <div className="flex items-center gap-1 text-accent font-bold">
        <TrendingUp className="h-3.5 w-3.5" /> {pct}
      </div>
    </div>
    <div className="mt-2 grid grid-cols-3 gap-2 text-[10px]">
      <Stat label="Entry" value={entry} />
      <Stat label="Target" value={tp} />
      <Stat label="Status" value="Active" emerald />
    </div>
    {/* mini chart */}
    <svg viewBox="0 0 200 50" className="mt-2 w-full h-10">
      <defs>
        <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(43 90% 60%)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(43 90% 60%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,40 L20,35 L40,38 L60,28 L80,30 L100,22 L120,25 L140,15 L160,18 L180,8 L200,10 L200,50 L0,50 Z" fill="url(#lg)" />
      <path d="M0,40 L20,35 L40,38 L60,28 L80,30 L100,22 L120,25 L140,15 L160,18 L180,8 L200,10" stroke="hsl(43 90% 60%)" strokeWidth="1.5" fill="none" />
    </svg>
  </div>
);

const Stat = ({ label, value, emerald }: { label: string; value: string; emerald?: boolean }) => (
  <div className="rounded-md bg-background/40 border border-border/40 px-1.5 py-1">
    <div className="text-muted-foreground">{label}</div>
    <div className={cn("font-semibold", emerald ? "text-accent" : "text-foreground")}>{value}</div>
  </div>
);

/** Stylised candle chart used for "chart analysis" placeholders. */
export const ChartScreen = () => {
  const candles = Array.from({ length: 32 }, (_, i) => {
    const up = (i + Math.floor(Math.sin(i / 3) * 2)) % 3 !== 0;
    const h = 10 + Math.abs(Math.sin(i / 2.4)) * 38 + (i % 4) * 3;
    const wick = h + 6 + (i % 5) * 2;
    return { up, h, wick, x: 16 + i * 14 };
  });
  return (
    <div className="h-full w-full bg-[hsl(222_55%_5%)] p-4 flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-xs text-foreground">
          <span className="font-semibold">BTC/USDT</span>
          <span className="text-accent flex items-center gap-1"><ArrowUpRight className="h-3 w-3" /> +4.82%</span>
        </div>
        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">4H · Tahlil</div>
      </div>
      <svg viewBox="0 0 500 240" className="flex-1 w-full">
        {/* grid */}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={i} x1="0" x2="500" y1={40 * (i + 1)} y2={40 * (i + 1)} stroke="hsl(45 30% 60% / 0.06)" />
        ))}
        {/* zone */}
        <rect x="0" y="70" width="500" height="30" fill="hsl(43 80% 55% / 0.1)" />
        <line x1="0" x2="500" y1="85" y2="85" stroke="hsl(43 80% 55% / 0.6)" strokeDasharray="4 4" />
        {candles.map((c, i) => (
          <g key={i}>
            <line x1={c.x + 4} x2={c.x + 4} y1={200 - c.wick} y2={200} stroke={c.up ? "hsl(152 60% 50%)" : "hsl(0 70% 60%)"} strokeWidth="1" />
            <rect x={c.x} y={200 - c.h} width="8" height={c.h} fill={c.up ? "hsl(152 60% 50%)" : "hsl(0 70% 60%)"} rx="1" />
          </g>
        ))}
        {/* trend */}
        <path d="M0,180 L500,40" stroke="hsl(43 90% 60%)" strokeWidth="1.5" strokeDasharray="6 4" />
      </svg>
    </div>
  );
};

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

const FEEDBACK_IMAGES = [fb1, fb2, fb3, fb4, fb5, fb6, fb7, fb8, fb9, fb10, fb11, fb12, fb13, fb14, fb15, fb16];

/** Feedback wall — real Telegram screenshots from VIP Club members. */
export const FeedbackScreen = () => (
  <div className="h-full w-full bg-[hsl(222_55%_5%)] p-3 md:p-4 overflow-hidden">
    <div className="h-full w-full columns-2 md:columns-4 gap-3 [column-fill:_balance]">
      {FEEDBACK_IMAGES.map((src, i) => (
        <div
          key={i}
          className="mb-3 break-inside-avoid rounded-lg overflow-hidden border border-border/60 bg-card/40 shadow-md"
        >
          <img
            src={src}
            alt={`HBS ACADEMY a'zo fikri ${i + 1}`}
            className="w-full h-auto block"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  </div>
);
