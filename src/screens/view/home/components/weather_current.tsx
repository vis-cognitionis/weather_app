import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react";

import {
  IconClear,
  IconClouds,
  IconDrizzle,
  IconDustSand,
  IconFogHazeMist,
  IconRain,
  IconSnow,
  IconSquall,
  IconThunderstorm,
  IconTornado,
} from "src/core/components/icons/weather_colored_icons";
import mainStore from "src/screens/view-model/main_store";
import { Weather, WeatherCondition } from "../interfaces/interface_home";
import { useTheme } from "src/core/init/themes/theme_context";
import { t } from "src/core/init/lang/custom-hook/useTranslate";

const WeatherCurrent = ({ tempUnit }: { tempUnit: string }) => {
  const { theme } = useTheme();
  const [currentTemp, setCurrentTemp] = useState<Weather | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            mainStore.city +
            `&units=${mainStore.weatherUnit}&appid=` +
            "4ece27e8959cae958f124f7316c6e352"
        );
        mainStore.isError !== true && setCurrentTemp(response.data);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
        mainStore.setIsError(true);
      }
    };

    fetchData();
  }, [mainStore.city, mainStore.weatherUnit]);

  const WeatherIcons = () => {
    switch (currentTemp?.weather[0].main) {
      case WeatherCondition.Clear:
        return <IconClear />;
      case WeatherCondition.Clouds:
        return <IconClouds />;
      case WeatherCondition.Drizzle:
        return <IconDrizzle />;
      case WeatherCondition.Dust:
        return <IconDustSand />;
      case WeatherCondition.Fog:
        return <IconFogHazeMist />;
      case WeatherCondition.Haze:
        return <IconFogHazeMist />;
      case WeatherCondition.Mist:
        return <IconFogHazeMist />;
      case WeatherCondition.Rain:
        return <IconRain />;
      case WeatherCondition.Sand:
        return <IconDustSand />;
      case WeatherCondition.Snow:
        return <IconSnow />;
      case WeatherCondition.Squall:
        return <IconSquall />;
      case WeatherCondition.Thunderstorm:
        return <IconThunderstorm />;
      case WeatherCondition.Tornado:
        return <IconTornado />;
      default:
        return <IconClouds />;
    }
  };

  const weatherDesc = () => {
    switch (currentTemp?.weather[0].main) {
      case WeatherCondition.Clear:
        return t("home.weatherDesc.clear");
      case WeatherCondition.Clouds:
        return t("home.weatherDesc.clouds");
      case WeatherCondition.Drizzle:
        return t("home.weatherDesc.drizzle");
      case WeatherCondition.Dust:
        return t("home.weatherDesc.dust");
      case WeatherCondition.Fog:
        return t("home.weatherDesc.fog");
      case WeatherCondition.Haze:
        return t("home.weatherDesc.haze");
      case WeatherCondition.Mist:
        return t("home.weatherDesc.mist");
      case WeatherCondition.Rain:
        return t("home.weatherDesc.rain");
      case WeatherCondition.Sand:
        return t("home.weatherDesc.sand");
      case WeatherCondition.Snow:
        return t("home.weatherDesc.snow");
      case WeatherCondition.Squall:
        return t("home.weatherDesc.squall");
      case WeatherCondition.Thunderstorm:
        return t("home.weatherDesc.thunderstorm");
      case WeatherCondition.Tornado:
        return t("home.weatherDesc.tornado");
      default:
        return t("home.weatherDesc.clouds");
    }
  };

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
        <Text children={weatherDesc()} style={theme.typography.weather} />
        <Text style={theme.typography.weather}>
          {`${t("home.maxTemp")}:${Math.ceil(currentTemp?.main.temp_max!)}°`}{" "}
          {`${t("home.minTemp")}:${Math.floor(currentTemp?.main.temp_min!)}°`}
        </Text>
      </View>
      <WeatherIcons />
    </View>
  );
};
export default observer(WeatherCurrent);
