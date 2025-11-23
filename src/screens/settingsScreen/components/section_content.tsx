import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet } from 'react-native';

import About from './about';
import { useMainStore } from 'store/useMainStore';
import DefaultCity from './default_city';
import LanguageAction from './language_actions';
import TermsAndServices from './terms_and_services';
import { useTranslate, useTheme } from 'hooks';

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
  const weatherUnit = useMainStore((state) => state.weatherUnit);
  const setWeatherUnit = useMainStore((state) => state.setWeatherUnit);

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
        useBuiltInState={false}
      />
    );
  };
  const toggleWeatherUnit = async (unit: string) => {
    await AsyncStorage.setItem('unit', unit);
    setWeatherUnit(unit);
  };

  return (
    <View style={styles.listContainer}>
      <Text style={theme.typography.content}>{content}</Text>
      <GeneralAction />

      {content === t('settings.temperature.celsius') ? (
        <CustomCheckbox
          isChecked={weatherUnit === 'metric'}
          onPress={() => {
            toggleWeatherUnit('metric');
          }}
          disabled={weatherUnit === 'metric'}
        />
      ) : content === t('settings.temperature.fahrenheit') ? (
        <CustomCheckbox
          isChecked={weatherUnit === 'imperial'}
          onPress={() => {
            toggleWeatherUnit('imperial');
          }}
          disabled={weatherUnit === 'imperial'}
        />
      ) : null}
    </View>
  );
};
export default SectionContent;
