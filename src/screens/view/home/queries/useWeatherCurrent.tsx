import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { Alert } from "react-native";
import { useQuery } from "@tanstack/react-query";

import mainStore from "src/screens/view-model/main_store";
import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";
import { WeatherCurrentData } from "../interfaces/interface_home";

export const useWeatherCurrent = () => {
  const { t } = useTranslate();
  const [hasError, setHasError] = useState<boolean>(false);

  const {
    data: currentTemp,
    isLoading,
    refetch: refetchCurrent,
  } = useQuery<WeatherCurrentData>(
    ["currentTemp", mainStore.city, mainStore.weatherUnit],
    async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            mainStore.city +
            `&units=${mainStore.weatherUnit}&appid=` +
            "4ece27e8959cae958f124f7316c6e352"
        );
        return response.data;
      } catch (error: any) {
        const axiosError = error as AxiosError;
        const status = axiosError.response?.status;
        status === 429 && Alert.alert("Çok fazla sorgu hatası");
        setHasError(true);
        throw new Error(`Error fetching weather data: ${status}`);
      }
    },
    {
      enabled: true,
      onError: () => {
        mainStore.setCity("İstanbul");
        mainStore.setInputValue("İstanbul");
        hasError && Alert.alert(t("error.title"), t("error.validCity"));
      },
    }
  );

  return { currentTemp, isLoading, refetchCurrent };
};
