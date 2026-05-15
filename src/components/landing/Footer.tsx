import { Phone, Send } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { BOT_URL, SUPPORT_URL } from "@/i18n/strings";
import { Logo } from "./Logo";

export const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="relative pt-12 pb-10 border-t border-border/60">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <Logo size={48} />
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">{t("footer.tagline")}</p>
          </div>
          <div className="md:text-center text-sm">
            <div className="flex md:justify-center flex-wrap gap-4 text-muted-foreground">
              <a className="hover:text-gold transition-colors" href="#what">{t("nav.club")}</a>
              <a className="hover:text-gold transition-colors" href="#inside">{t("nav.inside")}</a>
              <a className="hover:text-gold transition-colors" href="#pricing">{t("nav.pricing")}</a>
              <a className="hover:text-gold transition-colors" href="#faq">{t("nav.faq")}</a>
            </div>
          </div>
          <div className="md:text-right space-y-2.5">
            <a
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/90 hover:text-gold"
            >
              <Send className="h-4 w-4" /> {t("footer.bot")}
            </a>
            <div>
              <a
                href={SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold"
              >
                {t("footer.support")}
              </a>
            </div>
            <div>
              <a
                href="tel:+998951907007"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold"
              >
                <Phone className="h-4 w-4" /> +998 95 190 70 07
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border/60 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} HBS VIP CLUB. {t("footer.rights")}</span>
          <span className="text-gold/80">Premium Trading Community</span>
        </div>
      </div>
    </footer>
  );
};
