import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  RefreshControl,
  ScrollView,
} from "react-native";

import WeatherAll from "./components/weather_all";
import ThemeProps from "src/core/init/themes/interface/interfaces";
import { useTheme } from "src/core/init/themes/theme_context";
import { useWeatherCurrent } from "./queries/useWeatherCurrent";

const Styles = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.palette.background.default,
    },
    scrollView: {
      paddingHorizontal: "7%",
      paddingTop: "5%",
    },
  });
};

const Home = () => {
  const { theme } = useTheme();
  const styles = Styles({ theme });
  const { refetchCurrent } = useWeatherCurrent();
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      refetchCurrent();
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <WeatherAll />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
