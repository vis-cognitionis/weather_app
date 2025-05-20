import Localization from 'react-native-localization';

import { useLanguage } from '../language_context';
import tr from '../languages/tr/tr.json';
import en from '../languages/en/en.json';

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
