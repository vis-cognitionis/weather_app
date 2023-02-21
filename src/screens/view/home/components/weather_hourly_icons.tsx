import React from "react";
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
} from "src/core/components/icons/weather_field_icons";
import { Weather, WeatherCondition } from "../interfaces/interface_home";

const WeatherHourlyIcons = ({ weather }: { weather: Weather }) => {
  switch (weather.weather[0].main) {
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

export default WeatherHourlyIcons;
