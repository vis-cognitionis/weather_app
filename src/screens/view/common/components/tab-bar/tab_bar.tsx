import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView, View } from "react-native";
import { observer } from "mobx-react";

import mainStore from "src/screens/view-model/main_store";
import ActionButton from "src/core/components/buttons/action_button";
import {
  IconDetail,
  IconHomeWeather,
  IconSettings,
} from "src/core/components/icons/custom_icons";
import { StackScreenNames } from "src/navigation/interfaces/interfaces";
import { useWeatherDatas } from "../../queries/useWeatherDatas";
import { useTheme } from "src/core/init/themes/theme_context";

const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const { theme } = useTheme();
  const { isLoading } = useWeatherDatas();

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.palette.background.default,
        height: "12%",
        position: "relative",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 15,
          top: 14,
          position: "absolute",
          alignSelf: "center",
        }}
      >
        {state.routes.map((route, index) => {
          const isFocused: boolean = state.index === index;

          const stroke: string = isFocused
            ? theme.palette.primary.light!
            : theme.palette.primary.dark!;

          const TabIcon = () => {
            return route.name === "Detail" ? (
              <IconDetail stroke={stroke} />
            ) : route.name === "Home" ? (
              <IconHomeWeather stroke={stroke} />
            ) : route.name === "Settings" ? (
              <IconSettings stroke={stroke} />
            ) : null;
          };

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }

            if (route.name === StackScreenNames.Home) {
              mainStore.setPreviousTab(StackScreenNames.Home);
            }

            if (route.name === StackScreenNames.Detail) {
              mainStore.setPreviousTab(StackScreenNames.Detail);
            }

            mainStore.setCurrentTab(route.name);
          };

          return (
            <ActionButton
              disabled={isLoading}
              isFocused={isFocused}
              key={index}
              children={<TabIcon />}
              customStyles={{
                flex: 1,
                width: 20,
                maxWidth: 70,
                backgroundColor: isFocused
                  ? theme.palette.primary.dark
                  : "transparent",
              }}
              onPress={onPress}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default observer(TabBar);
