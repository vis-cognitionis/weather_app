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
  const [deviceLanguage, setDeviceLanguage] = useState<Language | null>(null);

  useEffect(() => {
    (async () => {
      const languageFromStorage = await AsyncStorage.getItem("language");
      if (languageFromStorage) {
        setDeviceLanguage(languageFromStorage as Language);
      } else {
        const deviceLanguage = await NativeModules.I18nManager.localeIdentifier;
        setDeviceLanguage(deviceLanguage as Language);
      }
    })();
  }, []);

  const [language, setLanguage] = useState<Language>(
    deviceLanguage || Language.English
  );

  useEffect(() => {
    AsyncStorage.getItem("language").then((language) => {
      if (language) {
        setLanguage(language as Language);
      }
    });
  }, []);

  const handleSetLanguage = async (lang: Language) => {
    await AsyncStorage.setItem("language", lang);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
