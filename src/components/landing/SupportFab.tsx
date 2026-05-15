import { LifeBuoy } from "lucide-react";
import { SUPPORT_URL } from "@/i18n/strings";

export const SupportFab = () => {
  return (
    <a
      href={SUPPORT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Qo'llab quvvatlash"
      className="fixed left-4 bottom-6 md:left-6 md:bottom-8 z-50 inline-flex items-center gap-2 rounded-full glass-strong border border-primary/40 px-4 py-2.5 text-xs md:text-sm font-medium text-foreground shadow-card hover:bg-primary/20 hover:border-primary/70 hover:scale-105 transition-all"
    >
      <LifeBuoy className="h-4 w-4 text-gold" />
      <span>Qo'llab quvvatlash</span>
    </a>
  );
};
