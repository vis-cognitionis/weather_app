import { localizations, useLanguage } from "../language_context";

export const useTranslate = (key: string) => {
  const { language } = useLanguage();
  const translation = localizations.getString(key, language);
  return translation;
};

import { useTranslate as t } from "./use_translate";
export { t };
