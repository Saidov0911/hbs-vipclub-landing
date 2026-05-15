import { LifeBuoy } from "lucide-react";
import { SUPPORT_URL } from "@/i18n/strings";

export const SupportFab = () => {
  return (
    <a
      href={SUPPORT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Qo'llab quvvatlash"
      className="fixed right-4 bottom-6 md:right-6 md:bottom-8 z-50 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/90 backdrop-blur px-4 py-2.5 text-xs md:text-sm font-medium text-gold shadow-card hover:bg-background hover:border-gold/70 transition-all"
    >
      <LifeBuoy className="h-4 w-4" />
      <span>Qo'llab quvvatlash</span>
    </a>
  );
};
