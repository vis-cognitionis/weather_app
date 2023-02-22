import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import mainStore from "src/screens/view-model/main_store";
import { Weather } from "../interfaces/interface_home";

export const useWeatherCurrent = () => {
  const {
    data: currentTemp,
    isLoading,
    isError,
    refetch: refetchCurrent,
  } = useQuery<Weather>(
    ["currentTemp", mainStore.city, mainStore.weatherUnit],
    async () => {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          mainStore.city +
          `&units=${mainStore.weatherUnit}&appid=` +
          "4ece27e8959cae958f124f7316c6e352"
      );
      return response.data;
    },
    { enabled: true }
  );

  if (isError) {
    console.error("Error fetching weather data");
    mainStore.setIsError(true);
  }

  return { currentTemp, isLoading, refetchCurrent };
};
