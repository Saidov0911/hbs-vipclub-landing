import { Headset } from "lucide-react";
import { SUPPORT_URL } from "@/i18n/strings";

export const SupportFab = () => {
  return (
    <a
      href={SUPPORT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Qo'llab quvvatlash"
      className="fixed right-4 bottom-6 md:right-6 md:bottom-8 z-50 inline-flex items-center gap-2 rounded-full border border-white/30 bg-background/90 backdrop-blur px-4 py-2.5 text-xs md:text-sm font-medium text-white shadow-card hover:bg-background hover:border-white/60 transition-all"
    >
      <Headset className="h-4 w-4 text-white shrink-0" strokeWidth={2} />
      <span>Qo'llab quvvatlash</span>
    </a>
  );
};
