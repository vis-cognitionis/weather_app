import React from 'react';
import { Pressable, Text } from 'react-native';

import { Language, useLanguage } from '../../../../inits/lang/language_context';
import { useTheme } from '../../../../inits/themes/theme_context';

const LanguageAction = () => {
  const { theme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const isTr: boolean = language === Language.Turkish;

  return (
    <Pressable
      style={{
        padding: 5,
      }}
      onPress={() => {
        isTr ? setLanguage(Language.English) : setLanguage(Language.Turkish);
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
