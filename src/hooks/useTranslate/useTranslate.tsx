import Localization from 'react-native-localization';

import { useLanguage } from './languageContext';
import en from 'i18n/locales/en/en.json';
import tr from 'i18n/locales/tr/tr.json';

const localizations = new Localization({
  en: en,
  tr: tr,
});

export const useTranslate = () => {
  const { language } = useLanguage();
  const t = (key: string) => {
    const translation = localizations.getString(key, language);
    return translation;
  };
  return { t };
};
