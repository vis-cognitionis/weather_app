import React from 'react';

import {
  WeatherCurrentData,
  WeatherCondition,
} from '../../interfaces/interface_home';
import { useTranslate } from '../../../../../core/init/lang/custom-hook/useTranslate';

const weatherDesc = ({ currentTemp }: { currentTemp: WeatherCurrentData }) => {
  const { t } = useTranslate();

  switch (currentTemp?.weather[0].main) {
    case WeatherCondition.Clear:
      return t('home.weatherDesc.clear');
    case WeatherCondition.Clouds:
      return t('home.weatherDesc.clouds');
    case WeatherCondition.Drizzle:
      return t('home.weatherDesc.drizzle');
    case WeatherCondition.Dust:
      return t('home.weatherDesc.dust');
    case WeatherCondition.Fog:
      return t('home.weatherDesc.fog');
    case WeatherCondition.Haze:
      return t('home.weatherDesc.haze');
    case WeatherCondition.Mist:
      return t('home.weatherDesc.mist');
    case WeatherCondition.Rain:
      return t('home.weatherDesc.rain');
    case WeatherCondition.Sand:
      return t('home.weatherDesc.sand');
    case WeatherCondition.Snow:
      return t('home.weatherDesc.snow');
    case WeatherCondition.Squall:
      return t('home.weatherDesc.squall');
    case WeatherCondition.Thunderstorm:
      return t('home.weatherDesc.thunderstorm');
    case WeatherCondition.Tornado:
      return t('home.weatherDesc.tornado');
    default:
      return t('home.weatherDesc.clouds');
  }
};

export default weatherDesc;
