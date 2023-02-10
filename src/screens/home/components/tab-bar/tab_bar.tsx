import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native";

import { useTheme } from "../../../../core/init/themes/theme_context";
import {
  IconMap,
  IconHomeWeather,
  IconSettings,
} from "../../../../core/components/icons/custom_icons";
import ActionButton from "../../../../core/components/buttons/action_button";
import { useActiveTab } from "../../../../navigation/custom-hook/tab_context";

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const { theme } = useTheme();
  const { setActiveTabName } = useActiveTab();

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.palette.background.default,
        flexDirection: "row",
        gap: 15,
        justifyContent: "center",
        height: "10%",
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused: boolean = state.index === index;

        const stroke: string = isFocused
          ? theme.palette.primary.light!
          : theme.palette.primary.dark!;

        const TabIcon = () => {
          return route.name === "Map" ? (
            <IconMap stroke={stroke} />
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

          setActiveTabName(route.name);
        };

        return (
          <ActionButton
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
    </SafeAreaView>
  );
};

export default TabBar;
