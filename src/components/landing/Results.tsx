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

type FeedbackItem = { src: string; label: string; small?: boolean };

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
  { src: fb14, label: "Feedbacklar", small: true },
  { src: fb15, label: "Guruh ichidagi tahlillar", small: true },
  { src: fb16, label: "Feedbacklar", small: true },
];

// Tile = either one normal item, or two stacked small items
type Tile =
  | { kind: "single"; item: FeedbackItem }
  | { kind: "stack"; items: [FeedbackItem, FeedbackItem] };

const buildTiles = (items: FeedbackItem[]): Tile[] => {
  const tiles: Tile[] = [];
  const queue = [...items];
  let pendingSmall: FeedbackItem | null = null;

  for (const item of queue) {
    if (item.small) {
      if (pendingSmall) {
        tiles.push({ kind: "stack", items: [pendingSmall, item] });
        pendingSmall = null;
      } else {
        pendingSmall = item;
      }
    } else {
      tiles.push({ kind: "single", item });
    }
  }
  if (pendingSmall) tiles.push({ kind: "single", item: pendingSmall });
  return tiles;
};

const ALL_TILES = buildTiles(ITEMS);

// Split into 2 rows
const ROWS: Tile[][] = [
  ALL_TILES.filter((_, i) => i % 2 === 0),
  ALL_TILES.filter((_, i) => i % 2 === 1),
];

export const Results = () => {
  const { t } = useI18n();

  return (
    <Section id="results" eyebrow="Pruflar" title={t("results.title")} subtitle={t("results.subtitle")}>
      <Reveal>
        <div className="relative">
          <div className="pointer-events-none absolute -inset-x-10 -top-10 -bottom-10 -z-10 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)] blur-3xl" />

          <div className="relative space-y-4 md:space-y-5 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            {ROWS.map((row, rowIdx) => (
              <MarqueeRow key={rowIdx} items={row} direction={rowIdx % 2 === 0 ? "left" : "right"} />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

const MarqueeRow = ({
  items,
  direction,
}: {
  items: Tile[];
  direction: "left" | "right";
}) => {
  // Duplicate the array so the animation loops seamlessly
  const loop = [...items, ...items];
  return (
    <div className="group/row overflow-hidden">
      <div
        className={cn(
          "flex w-max items-stretch gap-4 md:gap-5",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          "group-hover/row:[animation-play-state:paused]"
        )}
      >
        {loop.map((tile, i) =>
          tile.kind === "single" ? (
            <Card key={i} item={tile.item} />
          ) : (
            <div
              key={i}
              className="flex flex-col gap-3 md:gap-4 w-[220px] sm:w-[260px] md:w-[300px] shrink-0"
            >
              <Card item={tile.items[0]} fullWidth />
              <Card item={tile.items[1]} fullWidth />
            </div>
          )
        )}
      </div>
    </div>
  );
};

const Card = ({ item, fullWidth = false }: { item: FeedbackItem; fullWidth?: boolean }) => (
  <div
    className={cn(
      "group relative shrink-0 rounded-xl overflow-hidden border border-border/60 bg-card/40 shadow-md hover:border-primary/40 hover:shadow-elegant transition-all duration-300",
      fullWidth ? "w-full" : "w-[220px] sm:w-[260px] md:w-[300px]"
    )}
  >
    <img
      src={item.src}
      alt={`HBS VIP Club — ${item.label}`}
      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
      loading="lazy"
      decoding="async"
    />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 px-3 py-1 text-[11px] font-semibold text-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        {item.label}
      </span>
    </div>
    <div className="absolute top-2.5 left-2.5">
      <span className="inline-flex items-center gap-1 rounded-full bg-background/70 backdrop-blur-md border border-primary/30 px-2.5 py-1 text-[10px] font-medium text-foreground shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        {item.label}
      </span>
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
