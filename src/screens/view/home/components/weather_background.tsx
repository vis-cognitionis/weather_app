import React from "react";
import { Text, View } from "react-native";

import { t } from "src/core/init/lang/custom-hook/useTranslate";
import { useTheme } from "src/core/init/themes/theme_context";
import { windowHeight } from "../../common/constants/constants";
import { IconInfoSunny } from "src/core/components/icons/weather_info_icons";
import { useWeatherDatas } from "../queries/useWeatherDatas";
import { WeatherCondition } from "../interfaces/interface_home";

import {
  RainySvg,
  ClearSvg,
  SnowySvg,
  DustSandSvg,
  ThunderstormSvg,
  CloudsSvg,
  SquallSvg,
  TornadoSvg,
  FogHazeMistSvg,
} from "src/images/weather-svg/weather_svg";

const WeatherBackground = () => {
  const { theme } = useTheme();
  const topValue: number = windowHeight * 0.0475;
  const { weatherDatas } = useWeatherDatas();
  const currentTemp = weatherDatas && weatherDatas.list[0];

  const BackgroundSvg = () => {
    switch (currentTemp?.weather[0].main) {
      case WeatherCondition.Clear:
        return <ClearSvg />;
      case WeatherCondition.Clouds:
        return <CloudsSvg />;
      case WeatherCondition.Drizzle:
        return <RainySvg />;
      case WeatherCondition.Dust:
        return <DustSandSvg />;
      case WeatherCondition.Fog:
        return <FogHazeMistSvg />;
      case WeatherCondition.Haze:
        return <FogHazeMistSvg />;
      case WeatherCondition.Mist:
        return <FogHazeMistSvg />;
      case WeatherCondition.Rain:
        return <RainySvg />;
      case WeatherCondition.Sand:
        return <DustSandSvg />;
      case WeatherCondition.Snow:
        return <SnowySvg />;
      case WeatherCondition.Squall:
        return <SquallSvg />;
      case WeatherCondition.Thunderstorm:
        return <ThunderstormSvg />;
      case WeatherCondition.Tornado:
        return <TornadoSvg />;
      default:
        return <ClearSvg />;
    }
  };

  return (
    <>
      <View
        style={{ position: "absolute", top: topValue, alignSelf: "center" }}
      >
        <BackgroundSvg />
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
