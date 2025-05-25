import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StackScreenNames } from '../../navigation/types';
import { WeatherDatas } from '../../screens/home/interfaces/interface_home';
import { useTranslate } from '../../inits/lang/custom-hook/useTranslate';
import mainStore from '../../store/mainStore';

export const useWeatherDatas = () => {
  const { t } = useTranslate();
  const [fetchError, setFetchError] = useState<boolean>(false);
  const [requestError, setRequestError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    data: weatherDatas,
    isLoading,
    refetch,
    error,
  } = useQuery<WeatherDatas, AxiosError, WeatherDatas, [string, string, string]>({
    queryKey: ['weatherDatas', mainStore.city, mainStore.weatherUnit],
    queryFn: async () => {
      try {
        const weatherUnit = (await AsyncStorage.getItem('unit')) || mainStore.weatherUnit;
        mainStore.setWeatherUnit(weatherUnit);
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/forecast?q=' +
            mainStore.city +
            `&units=${weatherUnit}&appid=` +
            '4ece27e8959cae958f124f7316c6e352'
        );
        return response.data;
      } catch (error: any) {
        const axiosError = error as AxiosError;

        if (axiosError.code === 'ERR_NETWORK') {
          mainStore.setNetworkError(true);
        } else if (axiosError.response?.status === 404) {
          setFetchError(true);
        } else if (axiosError.response?.status === 429) {
          setRequestError(true);
        } else {
          setErrorMessage('Unexpected error occurred. Please try again later.');
        }

        throw error;
      }
    },
    enabled: true,
  });

  // Hata yönetimi artık useEffect içinde yapılıyor
  useEffect(() => {
    if (error) {
      mainStore.setCity(mainStore.defaultCity);
      mainStore.setInputValue(mainStore.defaultCity);
      mainStore.setIs404Err(true);

      if (mainStore.currentTab === StackScreenNames.Settings) {
        mainStore.setCity(mainStore.firstDefaultCity);
        mainStore.setInputValue(mainStore.firstDefaultCity);
        mainStore.setDefaultCity(mainStore.firstDefaultCity);
        mainStore.setInputCityValue(mainStore.firstDefaultCity);
        mainStore.setShowNotification(true);
      }

      if (fetchError) {
        Alert.alert(
          t('error.title'),
          t('error.validCity'),
          [
            {
              text: t('error.buttonName'),
            },
          ],
          { cancelable: false }
        );
      } else if (requestError) {
        Alert.alert(
          t('error.title'),
          t('error.manyRequest'),
          [
            {
              text: t('error.buttonName'),
            },
          ],
          { cancelable: false }
        );
      }
    }
  }, [error, fetchError, requestError, t]);

  useEffect(() => {
    if (errorMessage !== null) {
      console.log(errorMessage);
    }
  }, [errorMessage]);

  return { weatherDatas, isLoading, refetch };
};
