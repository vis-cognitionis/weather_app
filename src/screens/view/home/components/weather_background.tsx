import React from "react";
import { Text, View, StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
});

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

  const weatherSuggestions = () => {
    switch (currentTemp?.weather[0].main) {
      case WeatherCondition.Clear:
        return t("weatherSuggestion.clear");
      case WeatherCondition.Clouds:
        return t("weatherSuggestion.clear");
      case WeatherCondition.Drizzle:
        return t("weatherSuggestion.clear");
      case WeatherCondition.Dust:
        return t("weatherSuggestion.clear");
      case WeatherCondition.Fog:
        return t("weatherSuggestion.clear");
      case WeatherCondition.Haze:
        return t("weatherSuggestion.clear");
      case WeatherCondition.Mist:
        return t("weatherSuggestion.clear");
      case WeatherCondition.Rain:
        return t("weatherSuggestion.clear");
      case WeatherCondition.Sand:
        return t("weatherSuggestion.clear");
      case WeatherCondition.Snow:
        return t("weatherSuggestion.snow");
      case WeatherCondition.Squall:
        return t("weatherSuggestion.clear");
      case WeatherCondition.Thunderstorm:
        return t("weatherSuggestion.clear");
      case WeatherCondition.Tornado:
        return t("weatherSuggestion.clear");
      default:
        return t("weatherSuggestion.clear");
    }
  };

  const SuggestionIcons = () => {
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
      <View style={styles.infoContainer}>
        <Text style={[theme.typography.h2, { width: 240 }]}>
          {weatherSuggestions()}
        </Text>

        <IconInfoSunny />
      </View>
    </>
  );
};

export default WeatherBackground;
