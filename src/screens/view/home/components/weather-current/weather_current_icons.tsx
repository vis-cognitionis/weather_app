import React from "react";
import { observer } from "mobx-react";

import {
  IconClear,
  IconClearNight,
  IconCloudsNight,
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
import {
  WeatherCondition,
  WeatherCurrentData,
} from "../../interfaces/interface_home";
import mainStore from "src/screens/view-model/main_store";

const WeatherCurrentIcons = ({
  currentTemp,
}: {
  currentTemp: WeatherCurrentData;
}) => {
  switch (currentTemp?.weather[0].main!) {
    case WeatherCondition.Clear:
      return mainStore.timeOfDay === "night" ? (
        <IconClearNight />
      ) : (
        <IconClear />
      );
    case WeatherCondition.Clouds:
      return mainStore.timeOfDay === "night" ? (
        <IconCloudsNight />
      ) : (
        <IconClouds />
      );
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
export default observer(WeatherCurrentIcons);
