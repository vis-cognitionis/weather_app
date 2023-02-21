import React from "react";
import { Text, View } from "react-native";

import { t } from "src/core/init/lang/custom-hook/useTranslate";
import { useTheme } from "src/core/init/themes/theme_context";
import { SunnySvg } from "src/images/weather-svg/weather_svg";
import { windowHeight } from "../../common/constants/constants";
import { IconInfoSunny } from "src/core/components/icons/weather_info_icons";

const WeatherBackground = () => {
  const { theme } = useTheme();
  const topValue: number = windowHeight * 0.0475;

  return (
    <>
      <View style={{ position: "absolute", top: topValue }}>
        <SunnySvg />
      </View>
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
    </>
  );
};

export default WeatherBackground;
