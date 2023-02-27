import React, { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { observer } from "mobx-react";

import mainStore from "src/screens/view-model/main_store";
import WeatherCurrent from "./weather-current/weather_current";
import WeatherBackground from "./weather_background";
import WeatherHourlyIcons from "./weather_hourly_icons";
import { useWeatherCurrent } from "../queries/useWeatherCurrent";
import { useWeatherDatas } from "../queries/useWeatherDatas";
import { windowHeight } from "../../common/constants/constants";
import { useTheme } from "src/core/init/themes/theme_context";
import {
  today,
  tempUnit,
  tomorrow,
  groupWeatherDataByDate,
} from "./constants/constants";

const styles = StyleSheet.create({
  weathersContainer: {
    flexDirection: "column",
    gap: 40,
  },
  rowContainer: {
    flexDirection: "row",
    overflow: "scroll",
  },
  weatherContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 90,
    width: 90,
  },
});

const WeatherAll = () => {
  const { theme } = useTheme();
  const { weatherDatas, isLoading, refetch } = useWeatherDatas();
  const { refetchCurrent } = useWeatherCurrent();

  const cityTimeZone = weatherDatas?.city.timezone!;
  const sunrise = new Date((weatherDatas?.city.sunrise! + cityTimeZone) * 1000);
  const sunset = new Date((weatherDatas?.city.sunset! + cityTimeZone) * 1000);
  const selectedCityTimezoneOffset = weatherDatas?.city.timezone! * 1000;
  const currentDate = new Date(Date.now() + selectedCityTimezoneOffset);

  useEffect(() => {
    refetch();
    refetchCurrent();

    if (currentDate >= sunrise && currentDate < sunset && mainStore.city) {
      mainStore.setTimeOfDay("day");
    } else {
      mainStore.setTimeOfDay("night");
    }
  }, [mainStore.city, weatherDatas]);

  const filterWeatherData = (timeKey: string) => {
    const groupedWeatherData = groupWeatherDataByDate(weatherDatas);

    return timeKey && groupedWeatherData && groupedWeatherData[timeKey]
      ? groupedWeatherData[timeKey].filter((weather) => {
          const weatherDate = new Date(weather.dt * 1000);
          return weatherDate >= currentDate;
        })
      : [];
  };

  const todayData = filterWeatherData(today);
  const tomorrowData = filterWeatherData(tomorrow);
  const hourlyData = [...todayData, ...tomorrowData];

  const HourlyWeather = () => {
    return (
      <View style={styles.rowContainer}>
        <ScrollView horizontal={true}>
          {hourlyData.map((weather) => (
            <View key={weather.dt} style={styles.weatherContainer}>
              <Text style={[theme.typography.caption, { flex: 0.5 }]}>
                {Math.ceil(weather.main.temp)} {tempUnit}
              </Text>
              <View style={{ flex: 1, paddingVertical: 10 }}>
                <WeatherHourlyIcons
                  sunrise={sunrise}
                  sunset={sunset}
                  weather={weather}
                />
              </View>
              <Text
                style={theme.typography.caption}
                children={weather.dt_txt.split(" ")[1].slice(0, 5)}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const gapValue: number = windowHeight * 0.28;

  return (
    <View style={{ gap: gapValue }}>
      <WeatherBackground />
      <View style={styles.weathersContainer}>
        <WeatherCurrent tempUnit={tempUnit} />
        <HourlyWeather />
      </View>
    </View>
  );
};

export default observer(WeatherAll);
