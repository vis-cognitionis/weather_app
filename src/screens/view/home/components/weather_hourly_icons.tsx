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
  IconClearNight,
} from "src/core/components/icons/weather_field_icons";
import { Weather, WeatherCondition } from "../interfaces/interface_home";

const WeatherHourlyIcons = ({
  weather,
  sunrise,
  sunset,
}: {
  weather: Weather;
  sunrise: Date;
  sunset: Date;
}) => {
  const hourControl =
    Number(weather.dt_txt.split(" ")[1].slice(0, 2)) >= sunrise.getUTCHours() &&
    Number(weather.dt_txt.split(" ")[1].slice(0, 2)) < sunset.getUTCHours();

  switch (weather.weather[0].main) {
    case WeatherCondition.Clear:
      return hourControl ? <IconClear /> : <IconClearNight />;
    case WeatherCondition.Clouds:
      return hourControl ? <IconClouds /> : <IconClearNight />;
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
