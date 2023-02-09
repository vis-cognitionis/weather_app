import React from "react";
import { SafeAreaView, Text } from "react-native";

import { useTheme } from "../../core/init/themes/theme_context";

const Map = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.palette.background.default }}
    >
      <Text>MAP</Text>
    </SafeAreaView>
  );
};
export default Map;
