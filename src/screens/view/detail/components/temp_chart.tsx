import React from "react";
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";

import {
  groupWeatherDataByDate,
  today,
  tomorrow,
} from "../../home/components/weather_all";
import { WeatherDatas } from "../../home/interfaces/interface_home";

const TemperatureChart = ({ weatherDatas }: { weatherDatas: WeatherDatas }) => {
  const todaysWeather = groupWeatherDataByDate(weatherDatas)[today];
  const tomorrowsWeather = groupWeatherDataByDate(weatherDatas)[tomorrow];

  const todaysHourArr = todaysWeather?.map((weather) => {
    return weather.dt_txt.split(" ")[1].slice(0, 2);
  });
  const todaysTempArr = todaysWeather?.map((weather) => {
    return weather.main.temp;
  });

  const tomorrowsHourArr = tomorrowsWeather?.map((weather) => {
    return weather.dt_txt.split(" ")[1].slice(0, 2);
  });
  const tomorrowsTempArr = tomorrowsWeather?.map((weather) => {
    return weather.main.temp;
  });

  const combinedHourArr = todaysWeather
    ? [...todaysHourArr, ...tomorrowsHourArr]
    : tomorrowsHourArr;

  const combinedTempArr = todaysWeather
    ? [...todaysTempArr, ...tomorrowsTempArr]
    : tomorrowsTempArr;

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    decimalPlaces: 0,
  };

  return (
    <View>
      <LineChart
        yAxisInterval={1}
        data={{
          labels: combinedHourArr,
          datasets: [{ data: combinedTempArr }],
        }}
        width={360}
        height={200}
        chartConfig={{
          ...chartConfig,
          decimalPlaces: 0,
        }}
      />
    </View>
  );
};

export default TemperatureChart;
