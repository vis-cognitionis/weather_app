import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  RefreshControl,
  ScrollView,
} from "react-native";
import { observer } from "mobx-react";

import ForecastFiveDay from "./components/forecast_five_day";
import Container from "./components/container";
import TemperatureChart from "./components/temp_chart";
import { useWeatherCurrent } from "../home/queries/useWeatherCurrent";
import { useWeatherDatas } from "../home/queries/useWeatherDatas";
import { windowWidth } from "../common/constants/constants";
import { useTheme } from "src/core/init/themes/theme_context";
import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";

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
  const { t } = useTranslate();

  const { refetch, isLoading } = useWeatherDatas();
  const { currentTemp, refetchCurrent } = useWeatherCurrent();

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      refetch();
      refetchCurrent();
    }, 2000);
  }, []);

  const DetailCurrentInfos = [
    { title: t("detail.wind") },
    { title: t("detail.humidity") },
    { title: t("detail.pressure") },
    { title: t("detail.visibility") },
  ];

  const DetailCurrent = () => {
    return (
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
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.palette.background.default }}
    >
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ rowGap: 12, paddingBottom: 40 }}>
          <DetailCurrent />
          <Container
            width={windowWidth - 60}
            title={t("detail.graphicTitle")}
            children={
              isLoading ? <Text> loading...</Text> : <TemperatureChart />
            }
          />

          <ForecastFiveDay />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default observer(Detail);
