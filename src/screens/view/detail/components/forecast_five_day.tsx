import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { t } from "src/core/init/lang/custom-hook/useTranslate";
import { tempUnit } from "../../home/components/constants/constants";
import { useTheme } from "src/core/init/themes/theme_context";
import { windowWidth } from "../../common/constants/constants";
import { WeatherCondition } from "../../home/interfaces/interface_home";
import { useWeatherDatas } from "../../home/queries/useWeatherDatas";
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

const styles = StyleSheet.create({
  dayContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    maxHeight: 50,
  },

  container: {
    flexDirection: "column",
    paddingHorizontal: 5,
  },

  line: {
    alignSelf: "center",
    width: windowWidth - 60,
    borderBottomWidth: 1,
  },

  tempContainer: {
    flexDirection: "row",
    width: 130,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const ForecastFiveDay = () => {
  const { theme } = useTheme();
  const currentDate = new Date().toISOString().substring(0, 10);
  const { weatherDatas } = useWeatherDatas();

  interface DailyData {
    [date: string]: {
      dayOfWeek?: string;
      maxTemp: number;
      minTemp: number;
      info: string;
    };
  }

  const dailyData: DailyData = {};
  if (weatherDatas && weatherDatas.list) {
    for (let i = 0; i < weatherDatas.list.length; i++) {
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
  }

  const getDayOfWeek = (date: string) => {
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
  };

  const dailyDataForNextFiveDays: DailyData = {};

  for (let i = 0; i < 5; i++) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + i);
    const dateStr = date.toISOString().substring(0, 10);
    const dayOfWeek = getDayOfWeek(dateStr);

    if (dateStr === currentDate) {
      dailyDataForNextFiveDays[dateStr] = {
        dayOfWeek: t("daysShort.today"),
        maxTemp: dailyData[dateStr]?.maxTemp ?? undefined,
        minTemp: dailyData[dateStr]?.minTemp ?? undefined,
        info: dailyData[dateStr]?.info ?? undefined,
      };
    } else if (!dailyDataForNextFiveDays[dateStr]) {
      dailyDataForNextFiveDays[dateStr] = {
        dayOfWeek: dayOfWeek,
        maxTemp: dailyData[dateStr]?.maxTemp ?? undefined,
        minTemp: dailyData[dateStr]?.minTemp ?? undefined,
        info: dailyData[dateStr]?.info ?? undefined,
      };
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
        <View style={styles.container} key={i}>
          <View style={styles.dayContainer}>
            <Text style={[theme.typography.caption, { width: 50 }]}>
              {dailyDataForNextFiveDays[dateStr].dayOfWeek}
            </Text>
            <View style={{ transform: [{ scale: 0.3 }] }}>
              {smallIcons(dateStr)}
            </View>

            <View style={styles.tempContainer}>
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
              style={[
                styles.line,
                { borderBottomColor: theme.palette.background.default },
              ]}
            />
          )}
        </View>
      ))}
    />
  );
};

export default ForecastFiveDay;
