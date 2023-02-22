import React from "react";
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";
import { useTheme } from "src/core/init/themes/theme_context";
import { windowWidth } from "../../common/constants/constants";

import {
  groupWeatherDataByDate,
  today,
  tomorrow,
} from "../../home/components/weather_all";
import { WeatherDatas } from "../../home/interfaces/interface_home";

const TemperatureChart = ({ weatherDatas }: { weatherDatas: WeatherDatas }) => {
  const { theme } = useTheme();

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

  const chartConfig: AbstractChartConfig = {
    backgroundGradientFrom: theme.palette.secondary?.light,
    backgroundGradientTo: theme.palette.secondary?.light,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    decimalPlaces: 0,
    propsForDots: {
      r: "3",
    },
    propsForHorizontalLabels: {
      fontSize: 10,
      fontWeight: "bold",
      fill: theme.palette.primary.dark,
    },

    propsForVerticalLabels: {
      fontSize: 10,
      fontWeight: "bold",
      fill: theme.palette.primary.dark,
    },
    formatYLabel: (yLabel) => `${yLabel}°`,
    // propsForBackgroundLines: {
    //   fill: "red",
    // },
  };

  return (
    <LineChart
      // withDots={false}
      // withOuterLines={false}
      withShadow={false}
      // withInnerLines={false}
      withVerticalLines={false}
      data={{
        labels: combinedHourArr,
        datasets: [
          {
            data: combinedTempArr,
            color: () => `${theme.palette.primary.dark}`,
            strokeWidth: 2,
          },
        ],
      }}
      width={windowWidth - 60}
      height={200}
      style={{ marginLeft: 30, borderRadius: 16 }}
      chartConfig={{
        ...chartConfig,
        style: {
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#ff0000",
        },
      }}
      yAxisSuffix="°"
    />
  );
};

export default TemperatureChart;
