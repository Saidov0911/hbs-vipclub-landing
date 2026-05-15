import { MessagesSquare } from "lucide-react";
import { SUPPORT_URL } from "@/i18n/strings";

export const SupportFab = () => {
  return (
    <a
      href={SUPPORT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Qo'llab quvvatlash"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 inline-flex flex-col items-center gap-2 rounded-l-xl glass-strong border border-primary/40 border-r-0 px-2 py-4 text-foreground shadow-card hover:bg-primary/15 hover:border-primary/70 transition-all"
      style={{ writingMode: "vertical-rl" }}
    >
      <MessagesSquare className="h-4 w-4 text-gold rotate-90" />
      <span className="text-xs font-medium tracking-wide">Qo'llab quvvatlash</span>
    </a>
  );
};
