import React from "react";
import { Pressable, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Language, useLanguage } from "src/core/init/lang/language_context";
import { useTheme } from "src/core/init/themes/theme_context";

const LanguageAction = () => {
  const { theme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = async (lang: Language) => {
    await AsyncStorage.setItem("language", lang);
    setLanguage(lang);
  };

  const isTr: boolean = language === Language.Turkish;

  return (
    <Pressable
      style={{
        padding: 5,
      }}
      onPress={() => {
        isTr
          ? toggleLanguage(Language.English)
          : toggleLanguage(Language.Turkish);
      }}
      children={
        isTr ? (
          <Text
            style={{ color: theme.palette.secondary?.main }}
            children={Language.English.toLocaleUpperCase()}
          />
        ) : (
          <Text
            style={{ color: theme.palette.secondary?.main }}
            children={Language.Turkish.toLocaleUpperCase()}
          />
        )
      }
    />
  );
};

export default LanguageAction;
