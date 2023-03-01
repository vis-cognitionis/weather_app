import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { observer } from "mobx-react";

import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";
import { useTheme } from "src/core/init/themes/theme_context";
import { windowHeight } from "../../common/constants/constants";
import {
  IconInfoClear,
  IconInfoClouds,
  IconInfoRain,
  IconInfoSnow,
  IconInfoSquall,
  IconInfoWarning,
} from "src/core/components/icons/weather_info_icons";
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
  CloudsNightSvg,
  ClearNightSvg,
} from "src/images/weather-svg/weather_svg";
import { useWeatherCurrent } from "../queries/useWeatherCurrent";
import { WeatherCondition } from "../interfaces/interface_home";
import mainStore from "src/screens/view-model/main_store";

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
  const { currentTemp } = useWeatherCurrent();

  const condition = currentTemp?.weather[0].main;

  const BackgroundSvg = () => {
    switch (condition) {
      case WeatherCondition.Clear:
        return mainStore.timeOfDay === "night" ? (
          <ClearNightSvg />
        ) : (
          <ClearSvg />
        );
      case WeatherCondition.Clouds:
        return mainStore.timeOfDay === "night" ? (
          <CloudsNightSvg />
        ) : (
          <CloudsSvg />
        );
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
    const { t } = useTranslate();

    switch (condition) {
      case WeatherCondition.Clear:
        return mainStore.timeOfDay === "night"
          ? t("weatherSuggestion.clearNight")
          : t("weatherSuggestion.clear");
      case WeatherCondition.Clouds:
        return mainStore.timeOfDay === "night"
          ? t("weatherSuggestion.cloudsNight")
          : t("weatherSuggestion.clouds");
      case WeatherCondition.Drizzle:
        return t("weatherSuggestion.drizzle");
      case WeatherCondition.Dust:
        return t("weatherSuggestion.dust");
      case WeatherCondition.Fog:
        return t("weatherSuggestion.fog");
      case WeatherCondition.Haze:
        return t("weatherSuggestion.haze");
      case WeatherCondition.Mist:
        return t("weatherSuggestion.mist");
      case WeatherCondition.Rain:
        return t("weatherSuggestion.rain");
      case WeatherCondition.Sand:
        return t("weatherSuggestion.sand");
      case WeatherCondition.Snow:
        return t("weatherSuggestion.snow");
      case WeatherCondition.Squall:
        return t("weatherSuggestion.squall");
      case WeatherCondition.Thunderstorm:
        return t("weatherSuggestion.thunderstorm");
      case WeatherCondition.Tornado:
        return t("weatherSuggestion.tornado");
      default:
        return t("weatherSuggestion.clear");
    }
  };

  const SuggestionIcons = () => {
    switch (condition) {
      case WeatherCondition.Clear:
        return <IconInfoClear />;
      case WeatherCondition.Clouds:
        return <IconInfoClouds />;
      case WeatherCondition.Drizzle:
        return <IconInfoRain />;
      case WeatherCondition.Dust:
        return <IconInfoWarning />;
      case WeatherCondition.Fog:
        return <IconInfoWarning />;
      case WeatherCondition.Haze:
        return <IconInfoWarning />;
      case WeatherCondition.Mist:
        return <IconInfoWarning />;
      case WeatherCondition.Rain:
        return <IconInfoRain />;
      case WeatherCondition.Sand:
        return <IconInfoWarning />;
      case WeatherCondition.Snow:
        return <IconInfoSnow />;
      case WeatherCondition.Squall:
        return <IconInfoSquall />;
      case WeatherCondition.Thunderstorm:
        return <IconInfoWarning />;
      case WeatherCondition.Tornado:
        return <IconInfoWarning />;
      default:
        return <IconInfoClear />;
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
        <Text style={[theme.typography.h2, { width: 260 }]}>
          {weatherSuggestions()}
        </Text>
        <View style={{ paddingTop: 5 }}>
          <SuggestionIcons />
        </View>
      </View>
    </>
  );
};

export default observer(WeatherBackground);
