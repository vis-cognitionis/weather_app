import React, { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { observer } from "mobx-react";

import mainStore from "src/screens/view-model/main_store";
import WeatherCurrent from "./weather-current/weather_current";
import WeatherBackground from "./weather_background";
import WeatherHourlyIcons from "./weather_hourly_icons";
import { useWeatherDatas } from "../queries/useWeatherDatas";
import { windowHeight } from "../../common/constants/constants";
import { useTheme } from "src/core/init/themes/theme_context";
import { Weather } from "../interfaces/interface_home";

const styles = StyleSheet.create({
  weathersContainer: {
    flexDirection: "column",
    gap: 32,
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

  useEffect(() => {
    refetch();
    console.log("girdi");
  }, [mainStore.city]);

  const tempUnit = mainStore.weatherUnit === "metric" ? "°C" : "°F";

  const groupWeatherDataByDate = (): { [key: string]: Weather[] } => {
    const groupedData: { [key: string]: Weather[] } = {};

    weatherDatas &&
      weatherDatas.list.forEach((weather: Weather) => {
        const date = weather.dt_txt.split(" ")[0];
        if (groupedData[date]) {
          groupedData[date].push(weather);
        } else {
          groupedData[date] = [weather];
        }
      });

    return groupedData;
  };

  const hourlyWeather = (groupedWeatherData: { [key: string]: Weather[] }) => {
    const today = new Date().toISOString().slice(0, 10);
    const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .slice(0, 10);

    return (
      <View style={styles.rowContainer}>
        <ScrollView horizontal={true}>
          {weatherDatas &&
            groupedWeatherData[today] &&
            groupedWeatherData[today].map((weather: Weather) => (
              <View key={weather.dt} style={styles.weatherContainer}>
                <Text style={[theme.typography.caption, { flex: 0.5 }]}>
                  {Math.ceil(weather.main.temp)} {tempUnit}
                </Text>
                <View style={{ flex: 1, paddingVertical: 10 }}>
                  <WeatherHourlyIcons weather={weather} />
                </View>
                <Text
                  style={theme.typography.caption}
                  children={weather.dt_txt.split(" ")[1].slice(0, 5)}
                />
              </View>
            ))}

          {weatherDatas &&
            groupedWeatherData[tomorrow].map((weather: Weather) => (
              <View key={weather.dt} style={styles.weatherContainer}>
                <Text style={[theme.typography.caption, { flex: 0.5 }]}>
                  {Math.ceil(weather.main.temp)} {tempUnit}
                </Text>
                <View style={{ flex: 1 }}>
                  <WeatherHourlyIcons weather={weather} />
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

  const groupedWeatherData = groupWeatherDataByDate();
  const gapValue: number = windowHeight * 0.2725;

  return (
    <View style={{ gap: gapValue }}>
      <WeatherBackground />
      <View style={styles.weathersContainer}>
        <WeatherCurrent tempUnit={tempUnit} />
        <View>{hourlyWeather(groupedWeatherData)}</View>
      </View>
    </View>
  );
};

export default observer(WeatherAll);
