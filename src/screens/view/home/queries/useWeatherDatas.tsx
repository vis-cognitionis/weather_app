import React, { useState } from "react";
import { Alert } from "react-native";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import mainStore from "src/screens/view-model/main_store";
import { WeatherDatas } from "../interfaces/interface_home";
import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";

export const useWeatherDatas = () => {
  const { t } = useTranslate();
  const [networkError, setNetworkError] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<boolean>(false);
  const [requestError, setRequestError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    data: weatherDatas,
    isLoading,
    refetch,
  } = useQuery<WeatherDatas>(
    ["weatherDatas", mainStore.city, mainStore.weatherUnit],
    async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/forecast?q=" +
            mainStore.city +
            `&units=${mainStore.weatherUnit}&appid=` +
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
          setErrorMessage("Unexpected error occurred. Please try again later.");
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
            [{ text: "Tamam", onPress: () => setFetchError(false) }],
            { cancelable: false }
          );
        // networkError && Alert.alert("internet yok", "net yok");
        // requestError && Alert.alert("çok sorgu", "çok sorgu");
      },
    }
  );

  return { weatherDatas, isLoading, refetch };
};
