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
import { windowHeight, windowWidth } from "../common/constants/constants";
import { useTheme } from "src/core/init/themes/theme_context";
import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";

const styles = StyleSheet.create({
  grid: {
    justifyContent: "space-between",
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

  const getDetailCurrentInfo = (info: { title: string }) => {
    switch (info.title) {
      case t("detail.wind"):
        return currentTemp?.wind.speed === undefined
          ? "loading..."
          : currentTemp?.wind.speed + " " + t("detail.windUnit");
      case t("detail.humidity"):
        return currentTemp?.main.humidity === undefined
          ? "loading"
          : "%" + currentTemp?.main.humidity;
      case t("detail.pressure"):
        return currentTemp?.main.pressure === undefined
          ? "loading..."
          : currentTemp?.main.pressure + " " + "hPa";
      case t("detail.visibility"):
        return Number.isNaN(Number(currentTemp?.visibility))
          ? "loading..."
          : Number(currentTemp?.visibility) / 1000 + " " + "km";
      default:
        return "loading...";
    }
  };
  const DetailCurrent = () => {
    return (
      <View style={styles.grid}>
        {DetailCurrentInfos.map((info, index) => {
          return (
            <Container
              key={index}
              width={windowWidth <= 375 ? "100%" : "48%"}
              children={
                <Text style={[theme.typography.caption, { paddingLeft: 4 }]}>
                  {getDetailCurrentInfo(info)}
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
        style={{
          paddingHorizontal: "7%",
          paddingTop: windowHeight > 736 ? 0 : "2%",
        }}
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
