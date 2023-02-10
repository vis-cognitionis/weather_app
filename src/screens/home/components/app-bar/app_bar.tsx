import React from "react";
import { Platform, Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import lightStyles from "../../../../core/init/themes/styles/light";
import darkStyles from "../../../../core/init/themes/styles/dark";
import ThemeProps from "../../../../core/init/themes/interface/interfaces";
import { useTheme } from "../../../../core/init/themes/theme_context";
import {
  IconDarkTheme,
  IconLightTheme,
} from "../../../../core/components/icons/custom_icons";
import { useActiveTab } from "../../../../navigation/custom-hook/tab_context";

const SwitchStyles = ({ theme }: { theme: ThemeProps }) => {
  const value: boolean = theme === lightStyles;

  return StyleSheet.create({
    button: {
      justifyContent: "center",
      paddingLeft: 9,
      width: 38,
      height: 38,
      borderRadius: 16,
      backgroundColor: theme.palette.common?.white,
    },

    shadow: {
      ...Platform.select({
        ios: {
          shadowColor: "#424242",
          shadowOpacity: value ? 0.1 : 1,
          shadowRadius: 7,
          shadowOffset: { width: 0, height: 6 },
        },
        android: {
          elevation: 10,
          shadowColor: "#000000",
          shadowOpacity: value ? 0.6 : 0.25,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 6 },
        },
      }),
    },
  });
};

const AppBarStyles = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.palette.background.default,
      paddingHorizontal: 20,
    },
  });
};

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const value: boolean = theme === lightStyles;
  const styles = SwitchStyles({ theme });

  return (
    <Pressable
      style={[styles.button, styles.shadow]}
      onPress={() => setTheme(value ? darkStyles : lightStyles)}
    >
      {value ? <IconLightTheme /> : <IconDarkTheme />}
    </Pressable>
  );
};

const AppBar = () => {
  const { theme } = useTheme();
  const { activeTabName } = useActiveTab();
  const styles = AppBarStyles({ theme });

  return (
    <SafeAreaView style={styles.container}>
      {activeTabName !== "Settings" && <Text> konum gelecek </Text>}

      <ThemeSwitch />
    </SafeAreaView>
  );
};
export default AppBar;
