import React from "react";
import { Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import lightStyles from "../../../../core/init/themes/styles/light";
import darkStyles from "../../../../core/init/themes/styles/dark";
import { useTheme } from "../../../../core/init/themes/theme_context";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const value: boolean = theme === lightStyles;

  return (
    <Switch
      // trackColor={{ true: "blue" }}
      value={!value}
      onValueChange={() => setTheme(value ? darkStyles : lightStyles)}
    />
  );
};

const AppBar = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Text> konum gelecek </Text>

      <ThemeSwitch />
    </SafeAreaView>
  );
};
export default AppBar;
