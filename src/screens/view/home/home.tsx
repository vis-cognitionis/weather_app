import React, { useCallback, useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import axios from "axios";
import { observer } from "mobx-react";

import { IconInfoSunny } from "src/core/components/icons/weather_info_icons";
import { WeatherData } from "./interfaces/interface_home";
import { IconSunny } from "src/core/components/icons/weather_colored_icons";
import { SunnySvg } from "src/images/weather-svg/weather_svg";
import { useTheme } from "src/core/init/themes/theme_context";
import { t } from "src/core/init/lang/custom-hook/useTranslate";
import Weather from "./components/weather";
import mainStore from "src/screens/view-model/main_store";
import ThemeProps from "src/core/init/themes/interface/interfaces";

const Styles = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.palette.background.default,
    },
    scrollView: {
      paddingLeft: 30,
    },
  });
};

const Home = () => {
  const { theme } = useTheme();
  const styles = Styles({ theme });

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherData>(
    {} as WeatherData
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  let city: string = "Istanbul";
  const API_KEY = "4ece27e8959cae958f124f7316c6e352";
  //http://api.openweathermap.org/data/2.5/air_pollution?lat=41.0351&lon=28.9833&appid=4ece27e8959cae958f124f7316c6e352
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          `&units=${mainStore.weatherUnit}&appid=` +
          API_KEY
      )
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [mainStore.weatherUnit]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ position: "absolute", left: "11%", top: "10%" }}>
          <SunnySvg />
        </View>
        <View style={{ flexDirection: "column", gap: 245 }}>
          <View
            style={{
              flexDirection: "row",
              width: "70%",
              justifyContent: "space-between",
            }}
          >
            <Text style={[theme.typography.h2, { width: 211 }]}>
              {t("weatherSuggestion.sunny")}
            </Text>

            <IconInfoSunny />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={theme.typography.temperature}>27 °C</Text>
              <Text style={theme.typography.location}>New York</Text>
              <Text style={theme.typography.weather}>Sunny</Text>
            </View>
            <IconSunny />
          </View>
          <View>
            <Weather weatherData={weatherData} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(Home);
