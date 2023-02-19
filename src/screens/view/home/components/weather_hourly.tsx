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
} from "src/core/components/icons/weather_colored_icons";
import mainStore from "src/screens/view-model/main_store";
import { useTheme } from "src/core/init/themes/theme_context";
import { IconThunderstorm } from "../../../../core/components/icons/weather_colored_icons";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    overflow: "scroll",
  },
  dateContainer: {
    marginRight: 10,
    alignItems: "center",
  },
  dateText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  weatherContainer: {
    flex: 1,
    padding: 8,
    alignItems: "center",
  },
  timeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tempText: {
    fontSize: 16,
    marginTop: 8,
  },
});

const WeatherHourly = () => {
  const { theme } = useTheme();
  const [weatherDatas, setWeatherDatas] = useState<WeatherDatas | null>(null);
  const [currentTemp, setCurrentTemp] = useState<Weather | null>(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            mainStore.city +
            `&units=${mainStore.weatherUnit}&appid=` +
            "4ece27e8959cae958f124f7316c6e352"
        );
        mainStore.isError !== true && setCurrentTemp(response.data);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
        mainStore.setIsError(true);
      }
    };

    fetchData();
  }, [mainStore.city, mainStore.weatherUnit]);

  // useEffect(() => {
  //   mainStore.isError === true && mainStore.setCity(mainStore.city);
  // }, [mainStore.isError]);

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

  const renderWeatherDataByDate = (groupedWeatherData: {
    [key: string]: Weather[];
  }) => {
    const today = new Date().toISOString().slice(0, 10);
    const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .slice(0, 10);
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          {groupedWeatherData[today] &&
            groupedWeatherData[today].map((weather: Weather, index) => (
              <View key={weather.dt} style={styles.weatherContainer}>
                {/* <Text style={styles.timeText}>{today}</Text> */}

                <Text style={styles.tempText}>
                  {Math.ceil(weather.main.temp)}
                  {tempUnit}
                </Text>
                <View>
                  <Text>
                    {weather.weather[index]?.description! === "scattered clouds"
                      ? "scattered clouds"
                      : "clear sky"}
                  </Text>
                </View>
                <Text style={styles.timeText}>
                  {weather.dt_txt.split(" ")[1].slice(0, 5)}
                </Text>
              </View>
            ))}
          {groupedWeatherData[tomorrow].map((weather: Weather, index) => (
            <View key={weather.dt} style={styles.weatherContainer}>
              {/* <Text style={styles.timeText}>{tomorrow}</Text> */}

              <Text style={styles.tempText}>
                {Math.ceil(weather.main.temp)}
                {tempUnit}
              </Text>
              <View>
                <Text>
                  {weather.weather[index]?.description! === "scattered clouds"
                    ? "scattered clouds"
                    : "clear sky"}
                </Text>
              </View>
              <Text style={styles.timeText}>
                {weather.dt_txt.split(" ")[1].slice(0, 5)}
              </Text>
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

  const WeatherIcons = () => {
    switch (currentTemp?.weather[0].main) {
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
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text style={theme.typography.temperature}>
            {Math.ceil(currentTemp?.main.temp!)} {tempUnit}
          </Text>
          <Text style={theme.typography.location}>{mainStore.city}</Text>
          <Text style={theme.typography.weather}>
            {currentTemp?.weather[0].main}
          </Text>
        </View>
        {/* <IconSunny /> */}
        <WeatherIcons />
      </View>

      <View>{renderWeatherDataByDate(groupedWeatherData)}</View>
    </>
  );
};

export default observer(WeatherHourly);
