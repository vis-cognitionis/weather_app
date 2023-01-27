import React, { createContext, useContext, useState, useEffect } from "react";
import { NativeModules } from "react-native";

export enum Language {
  English = "en",
  Turkish = "tr",
}

interface LanguageContext {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContext>({
  language: Language.English,
  setLanguage: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [deviceLanguage, setDeviceLanguage] = useState<Language | null>(null);

  useEffect(() => {
    const getDeviceLanguage = async () => {
      const deviceLanguage = await NativeModules.I18nManager.localeIdentifier;
      setDeviceLanguage(deviceLanguage);
    };
    getDeviceLanguage();
  }, []);

  const [language, setLanguage] = useState<Language>(
    deviceLanguage as Language
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
