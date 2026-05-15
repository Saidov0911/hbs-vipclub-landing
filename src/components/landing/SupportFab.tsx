import { LifeBuoy } from "lucide-react";
import { SUPPORT_URL } from "@/i18n/strings";

export const SupportFab = () => {
  return (
    <a
      href={SUPPORT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Qo'llab quvvatlash"
      className="group fixed right-0 top-1/2 -translate-y-1/2 z-50 inline-flex flex-col items-center gap-2.5 rounded-l-xl border border-r-0 border-gold/40 bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-md px-2.5 py-4 text-gold shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.45)] hover:border-gold/70 hover:text-gold hover:shadow-[0_10px_28px_-6px_hsl(var(--primary)/0.6)] transition-all"
      style={{ writingMode: "vertical-rl" }}
    >
      <LifeBuoy className="h-4 w-4 rotate-90 transition-transform group-hover:scale-110" />
      <span className="text-xs font-semibold tracking-wider">Qo'llab quvvatlash</span>
    </a>
  );
};
