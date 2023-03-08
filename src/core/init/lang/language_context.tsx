import React, { createContext, useContext, useState, useEffect } from "react";
import { NativeModules } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [language, setLanguage] = useState<Language | null>(null);

  useEffect(() => {
    (async () => {
      const lang = (await AsyncStorage.getItem("language")) as Language;
      let deviceLanguage: Language | undefined;

      try {
        deviceLanguage = (await NativeModules.I18nManager
          .localeIdentifier) as Language;
      } catch (error) {
        console.error(error);
      }

      !deviceLanguage
        ? setLanguage(lang || Language.English)
        : setLanguage(lang || deviceLanguage);
    })();
  }, []);

  const handleSetLanguage = async (lang: Language) => {
    await AsyncStorage.setItem("language", lang);
    setLanguage(lang);
  };

  if (!language) {
    return null;
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
