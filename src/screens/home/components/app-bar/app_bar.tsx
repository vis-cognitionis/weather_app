import React from "react";
import { Switch, Text, View } from "react-native";

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
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 38,
        paddingHorizontal: 20,
        marginTop: 30,
      }}
    >
      <Text> konum gelecek </Text>

      <ThemeSwitch />
    </View>
  );
};
export default AppBar;
