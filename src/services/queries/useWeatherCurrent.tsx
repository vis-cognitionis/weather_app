import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';

import mainStore from '../../store/mainStore';
import { useTranslate } from '../../inits/lang/custom-hook/useTranslate';
import { WeatherCurrentData } from '../../screens/home/interfaces/interface_home';

export const useWeatherCurrent = () => {
  const { t } = useTranslate();
  const [networkError, setNetworkError] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<boolean>(false);
  const [requestError, setRequestError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    data: currentTemp,
    isLoading,
    refetch: refetchCurrent,
  } = useQuery<WeatherCurrentData>({
    queryKey: ['currentTemp', mainStore.city, mainStore.weatherUnit],
    queryFn: async () => {
      try {
        const weatherUnit = (await AsyncStorage.getItem('unit')) || mainStore.weatherUnit;
        mainStore.setWeatherUnit(weatherUnit);
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=' +
            mainStore.city +
            `&units=${weatherUnit}&appid=` +
            '4ece27e8959cae958f124f7316c6e352'
        );
        return response.data;
      } catch (error: any) {
        const axiosError = error as AxiosError;

        if (axiosError.code === 'ERR_NETWORK') {
          setNetworkError(true);
        } else if (axiosError.response?.status === 404) {
          setFetchError(true);
        } else if (axiosError.response?.status === 429) {
          setRequestError(true);
        } else {
          setErrorMessage(t('error.unexpected'));
          console.log(errorMessage);
        }

        throw error;
      }
    },
    enabled: true,
  });

  return { currentTemp, isLoading, refetchCurrent };
};
