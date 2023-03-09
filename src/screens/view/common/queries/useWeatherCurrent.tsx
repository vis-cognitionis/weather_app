import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { Alert } from "react-native";
import { useQuery } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";

import mainStore from "src/screens/view-model/main_store";
import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";
import { WeatherCurrentData } from "../../home/interfaces/interface_home";

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
  } = useQuery<WeatherCurrentData>(
    ["currentTemp", mainStore.city, mainStore.weatherUnit],
    async () => {
      try {
        const weatherUnit =
          ((await AsyncStorage.getItem("unit")) as string) ||
          mainStore.weatherUnit;
        mainStore.setWeatherUnit(weatherUnit);
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            mainStore.city +
            `&units=${weatherUnit}&appid=` +
            "4ece27e8959cae958f124f7316c6e352"
        );
        return response.data;
      } catch (error: any) {
        const axiosError = error as AxiosError;

        if (axiosError.code === "ERR_NETWORK") {
          setNetworkError(true);
        } else if (axiosError.response?.status === 404) {
          setFetchError(true);
        } else if (axiosError.response?.status === 429) {
          setRequestError(true);
        } else {
          setErrorMessage(t("error.unexpected"));
          console.log(errorMessage);
        }

        throw error;
      }
    },
    {
      enabled: true,

      onError: () => {
        mainStore.setCity("İstanbul");
        mainStore.setInputValue("İstanbul");

        fetchError &&
          Alert.alert(
            t("error.title"),
            t("error.validCity"),
            [
              {
                text: t("error.buttonName"),
                onPress: () => setFetchError(false),
              },
            ],
            { cancelable: false }
          );
        // networkError && Alert.alert("internet yok", "net yok");
        // requestError && Alert.alert("çok sorgu", "çok sorgu");
      },
    }
  );

  return { currentTemp, isLoading, refetchCurrent };
};
