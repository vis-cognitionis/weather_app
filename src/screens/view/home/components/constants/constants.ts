import React from "react";
import mainStore from "src/screens/view-model/main_store";
import { WeatherDatas, Weather } from "../../interfaces/interface_home";

export const today = new Date().toISOString().substring(0, 10);
export const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
  .toISOString()
  .substring(0, 10);

export const tempUnit = mainStore.weatherUnit === "metric" ? "°C" : "°F";

export const groupWeatherDataByDate = (
  weatherDatas: WeatherDatas | undefined
): { [key: string]: Weather[] } => {
  const groupedData: { [key: string]: Weather[] } = {};

  weatherDatas &&
    weatherDatas.list.forEach((weather) => {
      const date = weather.dt_txt.split(" ")[0];
      if (groupedData[date]) {
        groupedData[date].push(weather);
      } else {
        groupedData[date] = [weather];
      }
    });

  return groupedData;
};
