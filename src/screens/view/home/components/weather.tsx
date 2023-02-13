import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { observer } from "mobx-react";

import { WeatherData } from "../interfaces/interface_home";
import mainStore from "../../../view-model/main_store";

const Weather = ({ weatherData }: { weatherData: WeatherData }) => {
  return (
    <View style={styles.container}>
      {weatherData !== undefined
        ? weatherData.list?.map((data, index) => {
            return (
              <Text key={index}>
                {Math.ceil(data.main.temp)}{" "}
                {mainStore.weatherUnit === "metric" ? "°C" : "°F"}
              </Text>
            );
          })
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default observer(Weather);