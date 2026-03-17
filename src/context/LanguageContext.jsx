import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_OPTIONS,
  LANGUAGE_STORAGE_KEY,
  translations
} from "../i18n/translations";

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLanguage && translations[storedLanguage]) {
      return storedLanguage;
    }
  } catch {
    return DEFAULT_LANGUAGE;
  }

  return DEFAULT_LANGUAGE;
};

const updateMetaTag = (selector, value) => {
  const element = document.querySelector(selector);
  if (element && value) {
    element.setAttribute("content", value);
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(getInitialLanguage);
  const t = translations[language] ?? translations[DEFAULT_LANGUAGE];

  useEffect(() => {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      return;
    }
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;
    updateMetaTag('meta[name="description"]', t.meta.description);
    updateMetaTag('meta[name="keywords"]', t.meta.keywords);
    updateMetaTag('meta[property="og:title"]', t.meta.title);
    updateMetaTag('meta[property="og:description"]', t.meta.description);
    updateMetaTag('meta[property="og:locale"]', t.meta.ogLocale);
  }, [language, t]);

  const setLanguage = (nextLanguage) => {
    if (!translations[nextLanguage]) {
      return;
    }

    setLanguageState(nextLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
      languages: LANGUAGE_OPTIONS.map((option) => ({
        ...option,
        name: t.languages[option.code]
      }))
    }),
    [language, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
};
