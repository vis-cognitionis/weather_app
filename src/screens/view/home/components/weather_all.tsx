import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { observer } from "mobx-react";
import axios from "axios";

import {
  WeatherDatas,
  Weather,
  WeatherCondition,
} from "../interfaces/interface_home";
import {
  IconClear,
  IconClouds,
  IconDrizzle,
  IconDustSand,
  IconFogHazeMist,
  IconRain,
  IconSnow,
  IconSquall,
  IconTornado,
} from "src/core/components/icons/weather_field_icons";
import mainStore from "src/screens/view-model/main_store";
import WeatherBackground from "./weather_background";
import WeatherCurrent from "./weather_current";
import { IconThunderstorm } from "src/core/components/icons/weather_colored_icons";
import { windowHeight } from "../../common/constants/constants";
import { useTheme } from "src/core/init/themes/theme_context";

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
  const [weatherDatas, setWeatherDatas] = useState<WeatherDatas | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/forecast?q=" +
            mainStore.city +
            `&units=${mainStore.weatherUnit}&appid=` +
            "4ece27e8959cae958f124f7316c6e352"
        );
        mainStore.isError !== true && setWeatherDatas(response.data);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
        mainStore.setIsError(true);
      }
    };
    fetchData();
  }, [mainStore.city, mainStore.weatherUnit, mainStore.isError]);

  const tempUnit = mainStore.weatherUnit === "metric" ? "°C" : "°F";

  const groupWeatherDataByDate = (
    weatherData: Weather[]
  ): { [key: string]: Weather[] } => {
    const groupedData: { [key: string]: Weather[] } = {};

    weatherData.forEach((weather: Weather) => {
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

    const HourlyWeatherIcons = ({ weather }: { weather: Weather }) => {
      switch (weather.weather[0].main) {
        case WeatherCondition.Clear:
          return <IconClear />;
        case WeatherCondition.Clouds:
          return <IconClouds />;
        case WeatherCondition.Drizzle:
          return <IconDrizzle />;
        case WeatherCondition.Dust:
          return <IconDustSand />;
        case WeatherCondition.Fog:
          return <IconFogHazeMist />;
        case WeatherCondition.Haze:
          return <IconFogHazeMist />;
        case WeatherCondition.Mist:
          return <IconFogHazeMist />;
        case WeatherCondition.Rain:
          return <IconRain />;
        case WeatherCondition.Sand:
          return <IconDustSand />;
        case WeatherCondition.Snow:
          return <IconSnow />;
        case WeatherCondition.Squall:
          return <IconSquall />;
        case WeatherCondition.Thunderstorm:
          return <IconThunderstorm />;
        case WeatherCondition.Tornado:
          return <IconTornado />;
        default:
          return <IconClouds />;
      }
    };

    return (
      <View style={styles.rowContainer}>
        <ScrollView horizontal={true}>
          {groupedWeatherData[today] &&
            groupedWeatherData[today].map((weather: Weather) => (
              <View key={weather.dt} style={styles.weatherContainer}>
                <Text style={[theme.typography.caption, { flex: 0.5 }]}>
                  {Math.ceil(weather.main.temp)} {tempUnit}
                </Text>
                <View style={{ flex: 1, paddingVertical: 10 }}>
                  <HourlyWeatherIcons weather={weather} />
                </View>
                <Text
                  style={theme.typography.caption}
                  children={weather.dt_txt.split(" ")[1].slice(0, 5)}
                />
              </View>
            ))}

          {groupedWeatherData[tomorrow].map((weather: Weather) => (
            <View key={weather.dt} style={styles.weatherContainer}>
              <Text style={[theme.typography.caption, { flex: 0.5 }]}>
                {Math.ceil(weather.main.temp)} {tempUnit}
              </Text>
              <View style={{ flex: 1 }}>
                <HourlyWeatherIcons weather={weather} />
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

  if (!weatherDatas) {
    return <Text>Loading...</Text>;
  }

  const groupedWeatherData = groupWeatherDataByDate(weatherDatas.list);

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
