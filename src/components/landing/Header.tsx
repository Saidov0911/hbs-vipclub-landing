import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { PlaceholderLogo } from "./Placeholders";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "nav.club", href: "#what" },
  { key: "nav.inside", href: "#inside" },
  { key: "nav.results", href: "#results" },
  { key: "nav.pricing", href: "#pricing" },
  { key: "nav.faq", href: "#faq" },
];

export const Header = () => {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2.5" : "py-4"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 md:px-5 py-2.5 transition-all duration-500",
            scrolled ? "glass-strong shadow-card" : "bg-transparent"
          )}
        >
          <button onClick={() => scrollTo("#top")} aria-label="HBS VIP Club">
            <PlaceholderLogo />
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((n) => (
              <button
                key={n.key}
                onClick={() => scrollTo(n.href)}
                className="px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg"
              >
                {t(n.key)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center rounded-full border border-border/70 p-0.5 text-[11px] font-semibold">
              {(["uz", "ru"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={cn(
                    "px-2.5 py-1 rounded-full uppercase tracking-wider transition-all",
                    lang === l ? "bg-gradient-gold text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollTo("#pricing")}
              className="hidden md:inline-flex btn-gold px-4 py-2 rounded-full text-sm font-semibold"
            >
              {t("nav.cta")}
            </button>
            <button
              className="lg:hidden p-2 rounded-lg text-foreground"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-3 animate-fade-in">
            {navItems.map((n) => (
              <button
                key={n.key}
                onClick={() => scrollTo(n.href)}
                className="block w-full text-left px-4 py-3 text-foreground/90 hover:text-gold rounded-lg"
              >
                {t(n.key)}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#pricing")}
              className="btn-gold w-full mt-2 px-4 py-3 rounded-xl text-sm font-semibold"
            >
              {t("nav.cta")}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
