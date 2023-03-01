import React from "react";
import { LineChart } from "react-native-chart-kit";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";

import { useTheme } from "src/core/init/themes/theme_context";
import { windowWidth } from "../../common/constants/constants";
import { useWeatherDatas } from "../../home/queries/useWeatherDatas";
import {
  groupWeatherDataByDate,
  today,
  tomorrow,
} from "../../home/components/constants/constants";

const TemperatureChart = () => {
  const { theme } = useTheme();
  const { weatherDatas } = useWeatherDatas();

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
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    decimalPlaces: 0,
    propsForDots: {
      r: "2.5",
    },
    propsForHorizontalLabels: {
      fontSize: 12,
      fontFamily: "Poppins-Regular",
      fill: theme.palette.primary.dark,
    },

    propsForVerticalLabels: {
      fontFamily: "Poppins-Regular",
      fontSize: 12,
      fill: theme.palette.primary.dark,
    },
  };

  const refinedTempArr = combinedTempArr
    ? combinedTempArr.map((item) => Math.floor(item))
    : [0];

  const segments = refinedTempArr
    ? Math.floor(Math.max(...refinedTempArr) - Math.min(...refinedTempArr))
    : 1;

  return (
    <LineChart
      withVerticalLines={false}
      data={{
        labels: combinedHourArr,
        datasets: [
          {
            data: refinedTempArr,
            color: () => `${theme.palette.primary.dark}`,
            strokeWidth: 2,
          },
        ],
      }}
      width={windowWidth - 60}
      height={190}
      style={{
        borderRadius: 16,
        alignSelf: "center",
      }}
      chartConfig={chartConfig}
      yAxisSuffix="°"
      yLabelsOffset={25}
      segments={segments}
    />
  );
};

export default TemperatureChart;
