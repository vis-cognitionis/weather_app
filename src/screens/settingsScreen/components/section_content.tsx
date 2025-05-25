import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';

import About from './about';
import mainStore from '../../../store/mainStore';
import DefaultCity from './default_city';
import LanguageAction from './language_actions';
import TermsAndServices from './terms_and_services';
import StatusbarSettings from './statusbar_settings';
import { useTranslate } from '../../../hooks/useTranslate/useTranslate';
import { useTheme } from 'hooks/useTheme/useTheme';

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '88%',
  },
});

const SectionContent = ({ content }: { content: string }) => {
  const { theme } = useTheme();
  const { t } = useTranslate();

  const GeneralAction = () => {
    switch (content) {
      case t('settings.general.defaultCity'):
        return <DefaultCity />;
      case t('settings.general.language'):
        return <LanguageAction />;
      case t('settings.terms'):
        return <TermsAndServices />;
      case t('settings.about'):
        return <About />;
      default:
        return null;
    }
  };

  const CustomCheckbox = ({
    isChecked,
    onPress,
    disabled,
  }: {
    isChecked: boolean;
    onPress: () => void;
    disabled: boolean;
  }) => {
    return (
      <BouncyCheckbox
        role="radio"
        style={{ width: 25 }}
        fillColor={theme.palette.success?.main}
        isChecked={isChecked}
        onPress={onPress}
        disabled={disabled}
      />
    );
  };
  const toggleWeatherUnit = async (unit: string) => {
    await AsyncStorage.setItem('unit', unit);
    mainStore.setWeatherUnit(unit);
  };

  return (
    <View style={styles.listContainer}>
      <Text style={theme.typography.content}>{content}</Text>
      <GeneralAction />
      <StatusbarSettings content={content} />

      {content === t('settings.temperature.celsius') ? (
        <CustomCheckbox
          isChecked={mainStore.weatherUnit === 'metric'}
          onPress={() => {
            toggleWeatherUnit('metric');
          }}
          disabled={mainStore.weatherUnit === 'metric'}
        />
      ) : content === t('settings.temperature.fahrenheit') ? (
        <CustomCheckbox
          isChecked={mainStore.weatherUnit === 'imperial'}
          onPress={() => {
            toggleWeatherUnit('imperial');
          }}
          disabled={mainStore.weatherUnit === 'imperial'}
        />
      ) : null}
    </View>
  );
};
export default observer(SectionContent);
