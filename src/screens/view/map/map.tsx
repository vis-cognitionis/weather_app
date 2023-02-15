import React from "react";
import { SafeAreaView, Text } from "react-native";

import { useTheme } from "src/core/init/themes/theme_context";

const Map = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.palette.background.default }}
    ></SafeAreaView>
  );
};
export default Map;
