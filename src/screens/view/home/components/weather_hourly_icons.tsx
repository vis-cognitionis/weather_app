import React from "react";
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
  IconClearNight,
} from "src/core/components/icons/weather_field_icons";
import { Weather, WeatherCondition } from "../interfaces/interface_home";
import mainStore from "src/screens/view-model/main_store";

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

  //  Number(weather.dt_txt.split(" ")[1].slice(0, 2)) >= sunrise.getUTCHours() &&
  //  Number(weather.dt_txt.split(" ")[1].slice(0, 2)) < sunset.getUTCHours()
  //    ? "day"
  //    : "night";
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

export default observer(WeatherHourlyIcons);
