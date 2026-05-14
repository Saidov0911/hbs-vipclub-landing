import logoSrc from "@/assets/logo-hbs-vip.png";
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
        className="relative rounded-xl overflow-hidden ring-1 ring-primary/30 shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.4)]"
        style={{ height: size, width: size }}
      >
        <img
          src={logoSrc}
          alt="ELMAKON"
          width={size}
          height={size}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      {showWordmark && (
        <div className="leading-tight">
          <div className="font-display font-bold text-lg text-foreground tracking-tight">ELMAKON</div>
        </div>
      )}
    </div>
  );
};
