import React from "react";
import { Text, View } from "react-native";
import { t } from "src/core/init/lang/custom-hook/useTranslate";

import { useTheme } from "src/core/init/themes/theme_context";
import { tempUnit } from "../../home/components/weather_all";
import { WeatherDatas } from "../../home/interfaces/interface_home";

const Forecast = ({ weatherDatas }: { weatherDatas: WeatherDatas }) => {
  const { theme } = useTheme();

  interface DailyData {
    [date: string]: {
      dayOfWeek?: string;
      maxTemp: number;
      minTemp: number;
      info: string;
    };
  }

  const dailyData: DailyData = {};

  // Günlük verileri topla
  for (let i = 0; i < weatherDatas?.list.length; i++) {
    const data = weatherDatas.list[i];
    const dateStr = data.dt_txt.split(" ")[0];
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

  // "Today" ve sonraki beş gün için verileri ayarla
  const dailyDataForNextFiveDays: DailyData = {};

  for (let i = 0; i < 5; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const dateStr = date.toISOString().substring(0, 10);
    const dayOfWeek = getDayOfWeek(dateStr);

    dailyDataForNextFiveDays[dateStr] = {
      dayOfWeek: i === 0 ? t("daysShort.today") : dayOfWeek,
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
    return days[dayOfWeekIndex];
  }

  return (
    <View>
      {Object.keys(dailyDataForNextFiveDays).map((dateStr, i) => (
        <View key={i}>
          <Text>{dailyDataForNextFiveDays[dateStr].dayOfWeek}</Text>
          <Text>
            {`${t("home.maxTemp")}:`}{" "}
            {dailyDataForNextFiveDays[dateStr].maxTemp} {tempUnit}
          </Text>
          <Text>
            {`${t("home.minTemp")}:`}{" "}
            {dailyDataForNextFiveDays[dateStr].minTemp} {tempUnit}
          </Text>
          <Text>Info: {dailyDataForNextFiveDays[dateStr].info}</Text>
        </View>
      ))}
    </View>
  );
};

export default Forecast;
