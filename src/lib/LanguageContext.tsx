"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import type { Lang } from "./translations";

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "ne") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
