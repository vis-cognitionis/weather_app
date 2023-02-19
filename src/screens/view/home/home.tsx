import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";

import WeatherHourly from "./components/weather_hourly";
import ThemeProps from "src/core/init/themes/interface/interfaces";
import { IconInfoSunny } from "src/core/components/icons/weather_info_icons";
import { SunnySvg } from "src/images/weather-svg/weather_svg";
import { useTheme } from "src/core/init/themes/theme_context";
import { t } from "src/core/init/lang/custom-hook/useTranslate";

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
        <View style={{ position: "absolute", left: "11%", top: "10%" }}>
          <SunnySvg />
        </View>
        <View style={{ flexDirection: "column", gap: 155 }}>
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

          <WeatherHourly />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
