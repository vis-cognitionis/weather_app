import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  RefreshControl,
  ScrollView,
} from "react-native";
import { observer } from "mobx-react";

import mainStore from "src/screens/view-model/main_store";
import WeatherAll from "./components/weather_all";
import ThemeProps from "src/core/init/themes/interface/interfaces";
import NetworkError from "../common/components/network-error/network_error";
import { useWeatherDatas } from "../common/queries/useWeatherDatas";
import { useTheme } from "src/core/init/themes/theme_context";

const Styles = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.palette.background.default,
    },
    scrollView: {
      paddingHorizontal: "7%",
    },
  });
};

const Home = () => {
  const { theme } = useTheme();
  const styles = Styles({ theme });
  const { refetch } = useWeatherDatas();
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      refetch();
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
        {mainStore.networkError ? <NetworkError /> : <WeatherAll />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(Home);
