import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";

import ThemeProps from "../../../core/init/themes/interface/interfaces";
import { IconInfoSunny } from "../../../core/components/icons/weather_info_icons";
import { IconSunny } from "../../../core/components/icons/weather_colored_icons";
import { useTheme } from "../../../core/init/themes/theme_context";
import { SunnySvg } from "../../../images/weather-svg/weather_svg";

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
        <View style={{ flexDirection: "column", gap: 245 }}>
          <View
            style={{
              flexDirection: "row",
              width: "70%",
              justifyContent: "space-between",
            }}
          >
            <Text style={[theme.typography.h2, { width: 211 }]}>
              Feels like a good time to go out
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
