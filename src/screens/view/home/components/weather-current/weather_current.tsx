import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

import mainStore from '../../../../../screens/view-model/main_store';
import weatherDesc from './weather_infos';
import WeatherCurrentIcons from './weather_current_icons';
import { useWeatherCurrent } from '../../../../../screens/view/common/queries/useWeatherCurrent';
import { useTheme } from '../../../../../inits/themes/theme_context';
import { useTranslate } from '../../../../../inits/lang/custom-hook/useTranslate';

const WeatherCurrent = () => {
  const { theme } = useTheme();
  const { currentTemp } = useWeatherCurrent();
  const { t } = useTranslate();

  const unixTime = currentTemp?.dt!;
  const cityTimezoneOffset = currentTemp?.timezone! / 3600;
  const dateObj = new Date(unixTime * 1000 + cityTimezoneOffset * 60 * 60 * 1000);
  // const hourStr =
  //  dateObj.getUTCHours().toString().padStart(2, "0") +
  //  ":" +
  // dateObj.getUTCMinutes().toString().padStart(2, "0");
  const dateStr =
    dateObj.getUTCDate().toString().padStart(2, '0') +
    '.' +
    (dateObj.getUTCMonth() + 1).toString().padStart(2, '0') +
    '.' +
    dateObj.getUTCFullYear().toString();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
      }}
    >
      <View style={{ flexDirection: 'column', gap: 4 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={theme.typography.temperature}>{Math.ceil(currentTemp?.main.temp!)} </Text>
          <Text style={[theme.typography.temperature, { fontSize: 36, marginTop: 10 }]}>
            {mainStore.weatherUnit === 'metric' ? '°C' : '°F'}
          </Text>
        </View>

        <Text children={mainStore.city} style={theme.typography.location} />
        <Text
          children={weatherDesc({ currentTemp: currentTemp! })}
          style={theme.typography.title2}
        />
        <Text style={theme.typography.caption}>{dateStr + ` | ${t('home.current')}`}</Text>
      </View>
      <WeatherCurrentIcons currentTemp={currentTemp!} />
    </View>
  );
};
export default observer(WeatherCurrent);
