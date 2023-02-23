import React from "react";
import { LineChart } from "react-native-chart-kit";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";

import { useTheme } from "src/core/init/themes/theme_context";
import { windowWidth } from "../../common/constants/constants";
import { WeatherDatas } from "../../home/interfaces/interface_home";
import {
  groupWeatherDataByDate,
  today,
  tomorrow,
} from "../../home/components/weather_all";

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

  // 24 saatlik tam döngü için

  // const todaysWeather = groupWeatherDataByDate(weatherDatas)[today];
  // const tomorrowsWeather = groupWeatherDataByDate(weatherDatas)[tomorrow];

  // const todaysHourArr = todaysWeather?.map((weather) => {
  //   return weather.dt_txt.split(" ")[1].slice(0, 2);
  // });
  // const todaysTempArr = todaysWeather?.map((weather) => {
  //   return weather.main.temp;
  // });

  // const tomorrowsHourArr = tomorrowsWeather?.map((weather) => {
  //   return weather.dt_txt.split(" ")[1].slice(0, 2);
  // });
  // const tomorrowsTempArr = tomorrowsWeather?.map((weather) => {
  //   return weather.main.temp;
  // });

  // const now = new Date();
  // const combinedHourArr =
  //   todaysWeather && tomorrowsWeather
  //     ? [
  //         ...todaysHourArr,
  //         ...tomorrowsHourArr.filter(
  //           (hour, index) =>
  //             parseInt(hour) < now.getHours() && index < todaysHourArr.length
  //         ),
  //       ]
  //     : todaysWeather
  //     ? todaysHourArr
  //     : tomorrowsHourArr;

  // const combinedTempArr =
  //   todaysWeather && tomorrowsWeather
  //     ? [
  //         ...todaysTempArr,
  //         ...tomorrowsTempArr.filter(
  //           (hour, index) =>
  //             parseInt(hour.toString()) < now.getHours() &&
  //             index < todaysTempArr.length
  //         ),
  //       ]
  //     : todaysWeather
  //     ? todaysTempArr
  //     : tomorrowsTempArr;

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

  return (
    <LineChart
      // withDots={false}
      // withOuterLines={false}
      // withShadow={false}
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
      height={190}
      style={{
        borderRadius: 16,
        alignSelf: "center",
      }}
      chartConfig={chartConfig}
      yAxisSuffix="°"
      yLabelsOffset={26}
      segments={5}
    />
  );
};

export default TemperatureChart;
