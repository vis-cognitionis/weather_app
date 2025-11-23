import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StackScreenNames } from 'navigation/types';
import { WeatherDatas } from 'screens/mainScreen/interfaces/interface_home';
import { useTranslate } from 'hooks';
import { useMainStore } from 'store/useMainStore';

export const useWeatherDatas = () => {
  const { t } = useTranslate();
  const [fetchError, setFetchError] = useState<boolean>(false);
  const [requestError, setRequestError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const city = useMainStore((state) => state.city);
  const weatherUnit = useMainStore((state) => state.weatherUnit);
  const currentTab = useMainStore((state) => state.currentTab);
  const defaultCity = useMainStore((state) => state.defaultCity);
  const firstDefaultCity = useMainStore((state) => state.firstDefaultCity);
  const setCity = useMainStore((state) => state.setCity);
  const setInputValue = useMainStore((state) => state.setInputValue);
  const setWeatherUnit = useMainStore((state) => state.setWeatherUnit);
  const setIs404Err = useMainStore((state) => state.setIs404Err);
  const setDefaultCity = useMainStore((state) => state.setDefaultCity);
  const setInputCityValue = useMainStore((state) => state.setInputCityValue);
  const setShowNotification = useMainStore((state) => state.setShowNotification);
  const setNetworkError = useMainStore((state) => state.setNetworkError);

  const {
    data: weatherDatas,
    isLoading,
    refetch,
    error,
  } = useQuery<WeatherDatas, AxiosError, WeatherDatas, [string, string, string]>({
    queryKey: ['weatherDatas', city, weatherUnit],
    queryFn: async () => {
      try {
        const storedWeatherUnit = (await AsyncStorage.getItem('unit')) || weatherUnit;
        setWeatherUnit(storedWeatherUnit);
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/forecast?q=' +
          city +
          `&units=${storedWeatherUnit}&appid=` +
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
          setErrorMessage('Unexpected error occurred. Please try again later.');
        }

        throw error;
      }
    },
    enabled: true,
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (error) {
      setCity(defaultCity);
      setInputValue(defaultCity);
      setIs404Err(true);

      if (currentTab === StackScreenNames.Settings) {
        setCity(firstDefaultCity);
        setInputValue(firstDefaultCity);
        setDefaultCity(firstDefaultCity);
        setInputCityValue(firstDefaultCity);
        setShowNotification(true);
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
