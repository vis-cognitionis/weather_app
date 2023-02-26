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

  const cityTimeZone = weatherDatas?.city.timezone!;
  const sunrise = new Date((weatherDatas?.city.sunrise! + cityTimeZone) * 1000);
  const sunset = new Date((weatherDatas?.city.sunset! + cityTimeZone) * 1000);

  const selectedCityTimeZone = weatherDatas?.city.timezone! / 3600;
  const selectedCityTimezoneOffset = selectedCityTimeZone * 60 * 60 * 1000;

  const currentDate = new Date(Date.now() + selectedCityTimezoneOffset);

  useEffect(() => {
    refetch();

    if (currentDate >= sunrise && currentDate < sunset && mainStore.city) {
      mainStore.setTimeOfDay("day");
    } else {
      mainStore.setTimeOfDay("night");
    }
  }, [mainStore.city, weatherDatas]);

  const hourlyWeather = (groupedWeatherData: { [key: string]: Weather[] }) => {
    return (
      <View style={styles.rowContainer}>
        <ScrollView horizontal={true}>
          {weatherDatas &&
            groupedWeatherData &&
            groupedWeatherData[today] &&
            groupedWeatherData[today]
              .filter((weather) => {
                const weatherDate = new Date(weather.dt * 1000);
                return weatherDate >= currentDate;
              })
              .map((weather) => (
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

          {weatherDatas &&
            groupedWeatherData &&
            groupedWeatherData[tomorrow] &&
            groupedWeatherData[tomorrow]
              .filter((weather) => {
                const weatherDate = new Date(weather.dt * 1000);
                return (
                  weatherDate >= currentDate && weatherDate.getHours() < 21
                );
              })
              .map((weather) => (
                <View key={weather.dt} style={styles.weatherContainer}>
                  <Text style={[theme.typography.caption, { flex: 0.5 }]}>
                    {Math.ceil(weather.main.temp)} {tempUnit}
                  </Text>
                  <View style={{ flex: 1 }}>
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

  const groupedWeatherData = groupWeatherDataByDate(weatherDatas);
  const gapValue: number = windowHeight * 0.28;

  return (
    <View style={{ gap: gapValue }}>
      <WeatherBackground />
      <View style={styles.weathersContainer}>
        {weatherDatas && (
          <WeatherCurrent weatherDatas={weatherDatas} tempUnit={tempUnit} />
        )}
        <View>{hourlyWeather(groupedWeatherData)}</View>
      </View>
    </View>
  );
};

export default observer(WeatherAll);
