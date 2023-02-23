import React from "react";
import { Text, View } from "react-native";

import { t } from "src/core/init/lang/custom-hook/useTranslate";
import { useTheme } from "src/core/init/themes/theme_context";
import { tempUnit } from "../../home/components/weather_all";
import { windowWidth } from "../../common/constants/constants";
import {
  WeatherCondition,
  WeatherDatas,
} from "../../home/interfaces/interface_home";
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
import Container from "./container";

const Forecast5Day = ({ weatherDatas }: { weatherDatas: WeatherDatas }) => {
  const { theme } = useTheme();
  const currentDate = new Date();

  interface DailyData {
    [date: string]: {
      dayOfWeek?: string;
      maxTemp: number;
      minTemp: number;
      info: string;
    };
  }

  const dailyData: DailyData = {};
  for (let i = 0; i < weatherDatas?.list.length; i++) {
    const data = weatherDatas.list[i];
    const date = new Date(data.dt_txt);
    const dateStr = date.toISOString().substring(0, 10);
    const info = data.weather[0]?.main;

    if (!dailyData[dateStr]) {
      dailyData[dateStr] = {
        maxTemp: Math.ceil(data.main.temp_max),
        minTemp: Math.floor(data.main.temp_min),
        info: info,
      };
    } else {
      if (data.main.temp_max > dailyData[dateStr].maxTemp) {
        dailyData[dateStr].maxTemp = Math.ceil(data.main.temp_max);
      }
      if (data.main.temp_min < dailyData[dateStr].minTemp) {
        dailyData[dateStr].minTemp = Math.floor(data.main.temp_min);
      }
    }
  }

  const dailyDataForNextFiveDays: DailyData = {};

  for (let i = 1; i < 6; i++) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + i);
    const dateStr = date.toISOString().substring(0, 10);
    const dayOfWeek = getDayOfWeek(dateStr);

    dailyDataForNextFiveDays[dateStr] = {
      dayOfWeek: dayOfWeek,
      maxTemp: dailyData[dateStr]?.maxTemp,
      minTemp: dailyData[dateStr]?.minTemp,
      info: dailyData[dateStr]?.info,
    };
  }

  function getDayOfWeek(date: string) {
    const days = [
      t("daysShort.sunday"),
      t("daysShort.monday"),
      t("daysShort.tuesday"),
      t("daysShort.wednesday"),
      t("daysShort.thursday"),
      t("daysShort.friday"),
      t("daysShort.saturday"),
    ];
    const dayOfWeekIndex = new Date(date).getDay();
    if (dayOfWeekIndex === new Date().getDay()) {
      return t("daysShort.today");
    } else {
      return days[dayOfWeekIndex];
    }
  }

  const smallIcons = (dateStr: string) => {
    switch (dailyDataForNextFiveDays[dateStr].info) {
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

  return (
    <Container
      width={windowWidth - 60}
      title={t("detail.forecastTitle")}
      children={Object.keys(dailyDataForNextFiveDays).map((dateStr, i) => (
        <View
          style={{
            flexDirection: "column",
            paddingHorizontal: 5,
          }}
          key={i}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              height: 50,
              maxHeight: 50,
            }}
          >
            <Text style={[theme.typography.caption, { width: 50 }]}>
              {dailyDataForNextFiveDays[dateStr].dayOfWeek}
            </Text>
            <View style={{ transform: [{ scale: 0.3 }] }}>
              {smallIcons(dateStr)}
            </View>

            <View
              style={{
                flexDirection: "row",
                width: 130,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  theme.typography.caption,
                  { width: "auto", minWidth: 80 },
                ]}
              >
                {`${t("home.maxTemp")}:`}{" "}
                {dailyDataForNextFiveDays[dateStr].maxTemp} {tempUnit}
              </Text>
              <Text
                style={[
                  theme.typography.caption,
                  { width: "auto", minWidth: 80 },
                ]}
              >
                {`${t("home.minTemp")}:`}{" "}
                {dailyDataForNextFiveDays[dateStr].minTemp} {tempUnit}
              </Text>
            </View>
          </View>

          {i !== Object.keys(dailyDataForNextFiveDays).length - 1 && (
            <View
              style={{
                alignSelf: "center",
                width: windowWidth - 60,
                borderBottomWidth: 1,
                borderBottomColor: theme.palette.background.default,
              }}
            />
          )}
        </View>
      ))}
    />
  );
};

export default Forecast5Day;
