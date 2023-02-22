import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { t } from "src/core/init/lang/custom-hook/useTranslate";

import { useTheme } from "src/core/init/themes/theme_context";
import { useWeatherCurrent } from "../home/queries/useWeatherCurrent";
import TemperatureChart from "./components/temp_chart";
import Container from "./components/container";

const styles = StyleSheet.create({
  grid: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 8,
    columnGap: 10,
  },
});

const Detail = () => {
  const { theme } = useTheme();
  const { currentTemp } = useWeatherCurrent();
  console.log(currentTemp);

  const DetailCurrentInfos = [
    { title: t("detail.wind") },
    { title: t("detail.humidity") },
    { title: t("detail.pressure") },
    { title: t("detail.visibility") },
  ];

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.palette.background.default }}
    >
      <View style={styles.grid}>
        {DetailCurrentInfos.map((info, index) => {
          return (
            <Container
              key={index}
              children={
                <Text style={[theme.typography.caption, , { paddingLeft: 4 }]}>
                  {info.title === t("detail.wind")
                    ? currentTemp?.wind.speed + " " + t("detail.windUnit")
                    : info.title === t("detail.humidity")
                    ? "%" + currentTemp?.main.humidity
                    : info.title === t("detail.pressure")
                    ? currentTemp?.main.pressure + " " + "hPa"
                    : info.title === t("detail.visibility")
                    ? Number(currentTemp?.visibility) / 1000 + " " + "km"
                    : "loading"}
                </Text>
              }
              title={info.title}
            />
          );
        })}
      </View>
      {/* <TemperatureChart /> */}
    </SafeAreaView>
  );
};
export default Detail;
