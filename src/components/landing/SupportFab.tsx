import { MessagesSquare } from "lucide-react";
import { SUPPORT_URL } from "@/i18n/strings";

export const SupportFab = () => {
  return (
    <a
      href={SUPPORT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Qo'llab quvvatlash"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 inline-flex items-center gap-2 rounded-l-full bg-[#4CC764] hover:bg-[#3db854] text-white pl-3 pr-3 py-2.5 text-xs font-medium shadow-lg hover:shadow-xl hover:pr-4 transition-all"
    >
      <MessagesSquare className="h-5 w-5" />
      <span className="hidden sm:inline">Qo'llab quvvatlash</span>
    </a>
  );
};
