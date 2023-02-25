import React from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react";

import mainStore from "src/screens/view-model/main_store";
import weatherDesc from "./weather_infos";
import WeatherCurrentIcons from "./weather_current_icons";
import { WeatherDatas } from "../../interfaces/interface_home";
import { useTheme } from "src/core/init/themes/theme_context";
import { t } from "src/core/init/lang/custom-hook/useTranslate";

const WeatherCurrent = ({
  tempUnit,
  weatherDatas,
}: {
  tempUnit: string;
  weatherDatas: WeatherDatas;
}) => {
  const { theme } = useTheme();
  const currentTemp = weatherDatas && weatherDatas.list[0];

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
      }}
    >
      <View style={{ flexDirection: "column", gap: 4 }}>
        <Text style={theme.typography.temperature}>
          {Math.ceil(currentTemp?.main.temp!)} {tempUnit}
        </Text>
        <Text children={mainStore.city} style={theme.typography.location} />
        <Text
          children={weatherDesc({ currentTemp: currentTemp })}
          style={theme.typography.title2}
        />
        <Text style={theme.typography.caption}>
          3-hour |{" "}
          {`${t("home.maxTemp")}:${Math.ceil(
            weatherDatas?.list[3].main.temp_max!
          )}°`}{" "}
          {`${t("home.minTemp")}:${Math.floor(
            weatherDatas?.list[3].main.temp_min!
          )}°`}
        </Text>
      </View>
      {currentTemp && <WeatherCurrentIcons currentTemp={currentTemp} />}
    </View>
  );
};
export default observer(WeatherCurrent);
