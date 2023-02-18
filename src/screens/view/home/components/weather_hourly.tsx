import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { observer } from "mobx-react";
import axios from "axios";

import mainStore from "src/screens/view-model/main_store";
import { WeatherData, Weather } from "../interfaces/interface_home";

const WeatherHourly = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const defaultCity = "Istanbul";
  const [city, setCity] = useState<string>(defaultCity);
  const API_KEY = process.env.API_KEY!;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          `&units=${mainStore.weatherUnit}&appid=` +
          API_KEY
      );

      setWeatherData(response.data);
    };

    fetchData();
  }, []);

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
            groupedWeatherData[today].map((weather: Weather) => (
              <View key={weather.dt} style={styles.weatherContainer}>
                <Text style={styles.timeText}>
                  {weather.dt_txt.split(" ")[1]}
                </Text>
                <Text style={styles.tempText}>
                  {Math.ceil(weather.main.temp)}
                  {mainStore.weatherUnit === "metric" ? "°C" : "°F"}
                </Text>
              </View>
            ))}
        </ScrollView>
        <ScrollView horizontal={true}>
          {groupedWeatherData[tomorrow].map((weather: Weather) => (
            <View key={weather.dt} style={styles.weatherContainer}>
              <Text style={styles.timeText}>
                {weather.dt_txt.split(" ")[1]}
              </Text>
              <Text style={styles.tempText}>
                {Math.ceil(weather.main.temp)}
                {mainStore.weatherUnit === "metric" ? "°C" : "°F"}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  if (!weatherData) {
    return <Text>Loading...</Text>;
  }

  const groupedWeatherData = groupWeatherDataByDate(weatherData.list);

  return <View>{renderWeatherDataByDate(groupedWeatherData)}</View>;
};

export default observer(WeatherHourly);

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
