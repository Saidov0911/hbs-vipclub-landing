import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Wide laptop frame with screen content slot. */
export const LaptopMockup = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("relative w-full max-w-[1100px] mx-auto", className)}>
    <div className="relative rounded-[22px] p-[6px] bg-gradient-to-b from-white/15 to-white/5 shadow-elegant">
      <div className="rounded-[18px] p-2 bg-[hsl(222_50%_3%)] border border-border/60">
        {/* top bar */}
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
        </div>
        <div className="rounded-[10px] overflow-hidden border border-border/60 aspect-[16/10] bg-background">
          {children}
        </div>
      </div>
    </div>
    {/* base */}
    <div className="mx-auto h-2.5 w-[60%] rounded-b-[14px] bg-gradient-to-b from-white/15 to-transparent" />
  </div>
);

/** Phone frame. */
export const PhoneMockup = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("relative w-[260px] aspect-[9/19] mx-auto", className)}>
    <div className="absolute inset-0 rounded-[36px] p-[3px] bg-gradient-to-b from-white/20 to-white/5 shadow-elegant">
      <div className="h-full w-full rounded-[33px] p-[3px] bg-[hsl(222_50%_3%)]">
        <div className="relative h-full w-full rounded-[30px] overflow-hidden bg-background border border-border/60">
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-10 h-5 w-20 rounded-full bg-black/80" />
          {children}
        </div>
      </div>
    </div>
  </div>
);
