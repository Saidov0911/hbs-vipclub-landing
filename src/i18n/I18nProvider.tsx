import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionaries, type Lang } from "./strings";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("uz");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("hbs_lang") as Lang | null;
      if (saved === "uz" || saved === "ru") setLangState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("hbs_lang", l);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = l;
  };

  const t = (key: string) => dictionaries[lang][key] ?? key;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
