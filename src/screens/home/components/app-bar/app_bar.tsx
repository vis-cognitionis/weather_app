import React from "react";
import { Switch, Text, View } from "react-native";

import lightStyles from "../../../../core/init/themes/styles/light";
import darkStyles from "../../../../core/init/themes/styles/dark";
import { useTheme } from "../../../../core/init/themes/theme_context";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const value: boolean = theme === lightStyles;

  return (
    <View>
      <Text style={theme.typography.h1}>Change Theme</Text>
      <Switch
        // trackColor={{ true: "blue" }}
        value={!value}
        onValueChange={() => setTheme(value ? darkStyles : lightStyles)}
      />
      <Text>{value ? "light" : "dark"}</Text>
    </View>
  );
};

const AppBar = () => {
  return (
    <View>
      <ThemeSwitch />
    </View>
  );
};
export default AppBar;
