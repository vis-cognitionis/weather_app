import React, { createContext, useContext, useState } from "react";
import Localization from "react-native-localization";

import en from "./languages/en/en.json";
import tr from "./languages/tr/tr.json";

export const localizations = new Localization({
  en: en,
  tr: tr,
});

const LanguageContext = createContext({
  language: "en",
  setLanguage: (language: string) => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<string>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
