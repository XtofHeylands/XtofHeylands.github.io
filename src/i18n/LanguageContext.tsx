import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { Language, translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: keyof typeof translations, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage for saved language preference
    const saved = localStorage.getItem("stcc-language") as Language;
    return saved && ["NL", "EN", "FR", "DE"].includes(saved) ? saved : "NL";
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("stcc-language", lang);
  }, []);

  const t = useCallback(
    (section: keyof typeof translations, key: string): string => {
      const sectionData = translations[section];
      if (sectionData && key in sectionData) {
        const entry = (sectionData as Record<string, Record<Language, string>>)[key];
        return entry?.[language] || entry?.["EN"] || key;
      }
      return key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
