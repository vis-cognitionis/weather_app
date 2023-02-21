import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { t } from "src/core/init/lang/custom-hook/useTranslate";

import { useTheme } from "src/core/init/themes/theme_context";
import { useWeatherDatas } from "../home/query/useWeatherDatas";
import TemperatureChart from "./components/temp_chart";

const Container = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        backgroundColor: "#EEF0F2",
        borderRadius: 16,
        width: "auto",
        height: "auto",
        minWidth: 162,
        minHeight: 93,
        paddingTop: 22,
        padding: 12,
        gap: 10,
      }}
    >
      <Text style={theme.typography.title2}> {title} </Text>
      {children}
    </View>
  );
};

const Detail = () => {
  const { theme } = useTheme();
  const { weatherDatas } = useWeatherDatas();

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
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          rowGap: 8,
          columnGap: 10,
        }}
      >
        {DetailCurrentInfos.map((info, index) => {
          return (
            <Container
              key={index}
              children={
                <Text style={[theme.typography.caption, , { paddingLeft: 4 }]}>
                  {info.title === t("detail.wind")
                    ? weatherDatas?.list[0].wind.speed +
                      " " +
                      t("detail.windUnit")
                    : info.title === t("detail.humidity")
                    ? "%" + weatherDatas?.list[0].main.humidity
                    : info.title === t("detail.pressure")
                    ? weatherDatas?.list[0].main.pressure + " " + "hPa"
                    : info.title === t("detail.visibility")
                    ? Number(weatherDatas?.list[0].visibility) / 1000 +
                      " " +
                      "km"
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
