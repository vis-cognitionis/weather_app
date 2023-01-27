import React from "react";
import Localization from "react-native-localization";

import { useLanguage } from "../language_context";
import tr from "../languages/tr/tr.json";
import en from "../languages/en/en.json";

const localizations = new Localization({
  en: en,
  tr: tr,
});

export const useTranslate = (key: string) => {
  const { language } = useLanguage();
  const translation = localizations.getString(key, language);
  return translation;
};

import { useTranslate as t } from "./useTranslate";
export { t };
