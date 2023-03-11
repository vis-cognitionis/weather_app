import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { StackScreenNames } from "src/navigation/interfaces/interfaces";
import { WeatherDatas } from "../../home/interfaces/interface_home";
import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";
import mainStore from "src/screens/view-model/main_store";

export const useWeatherDatas = () => {
  const { t } = useTranslate();
  // const [networkError, setNetworkError] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<boolean>(false);
  const [requestError, setRequestError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  console.log(mainStore.networkError);
  const {
    data: weatherDatas,
    isLoading,
    refetch,
  } = useQuery<WeatherDatas>(
    ["weatherDatas", mainStore.city, mainStore.weatherUnit],
    async () => {
      try {
        const weatherUnit =
          (await AsyncStorage.getItem("unit")) || mainStore.weatherUnit;
        mainStore.setWeatherUnit(weatherUnit);
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/forecast?q=" +
            mainStore.city +
            `&units=${weatherUnit}&appid=` +
            "4ece27e8959cae958f124f7316c6e352"
        );
        return response.data;
      } catch (error: any) {
        const axiosError = error as AxiosError;

        if (axiosError.code === "ERR_NETWORK") {
          mainStore.setNetworkError(true);
        } else if (axiosError.response?.status === 404) {
          setFetchError(true);
        } else if (axiosError.response?.status === 429) {
          setRequestError(true);
        } else {
          setErrorMessage("Unexpected error occurred. Please try again later.");
        }

        throw error;
      }
    },
    {
      enabled: true,

      onError: () => {
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
            t("error.title"),
            t("error.validCity"),
            [
              {
                text: t("error.buttonName"),
              },
            ],
            { cancelable: false }
          );
        } else if (requestError) {
          Alert.alert(
            t("error.title"),
            t("error.manyRequest"),
            [
              {
                text: t("error.buttonName"),
              },
            ],
            { cancelable: false }
          );
        }
      },
    }
  );

  useEffect(() => {
    if (errorMessage !== null) {
      console.log(errorMessage);
    }
  }, [errorMessage]);

  return { weatherDatas, isLoading, refetch };
};
