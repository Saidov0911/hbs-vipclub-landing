import { cn } from "@/lib/utils";

export const Logo = ({
  className,
  size = 40,
  showWordmark = true,
}: {
  className?: string;
  size?: number;
  showWordmark?: boolean;
}) => {
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <div
        className="relative rounded-xl overflow-hidden ring-1 ring-primary/30 shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.4)] bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center"
        style={{ height: size, width: size }}
        aria-label="HBS VIP Club"
      >
        <span
          className="font-display font-bold text-primary-foreground tracking-tight"
          style={{ fontSize: size * 0.38 }}
        >
          HBS
        </span>
      </div>
      {showWordmark && (
        <div className="leading-tight">
          <div className="font-display font-bold text-lg text-foreground tracking-tight">HBS VIP Club</div>
        </div>
      )}
    </div>
  );
};
