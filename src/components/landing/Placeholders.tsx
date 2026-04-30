import { cn } from "@/lib/utils";

/** HBS gold mark — used as a placeholder logo. Swap to <img src="/logo.svg" /> later. */
export const PlaceholderLogo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-2.5", className)}>
    <div className="relative h-9 w-9 shrink-0">
      <div className="absolute inset-0 rounded-xl bg-gradient-gold shadow-gold" />
      <div className="absolute inset-[2px] rounded-[10px] bg-background/85 backdrop-blur flex items-center justify-center">
        <span className="font-display font-extrabold text-[15px] text-gold tracking-tight">H</span>
      </div>
    </div>
    <div className="flex flex-col leading-none">
      <span className="font-display font-bold text-[15px] tracking-tight text-foreground">
        HBS <span className="text-gold">VIP</span>
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">Club</span>
    </div>
  </div>
);

/** Gradient avatar with initials. */
export const PlaceholderAvatar = ({
  name,
  size = 96,
  className,
  ring = false,
}: {
  name: string;
  size?: number;
  className?: string;
  ring?: boolean;
}) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  // deterministic hue per name
  const hue = Array.from(name).reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  return (
    <div
      className={cn(
        "relative shrink-0 rounded-full overflow-hidden flex items-center justify-center font-display font-bold",
        ring && "ring-2 ring-primary/40 ring-offset-2 ring-offset-background",
        className
      )}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(140deg, hsl(${hue} 35% 25%), hsl(${(hue + 40) % 360} 30% 14%))`,
        fontSize: size * 0.32,
      }}
    >
      <span className="text-foreground/85">{initials}</span>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(circle at 30% 25%, hsl(45 80% 70% / 0.18), transparent 60%)" }}
      />
    </div>
  );
};
