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

const Styles = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.palette.background.default,
    },
    scrollView: {
      paddingHorizontal: 30,
    },
  });
};

const Home = () => {
  const { theme } = useTheme();
  const styles = Styles({ theme });

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
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
