import React from "react";
import { View, Text, Button, Switch } from "react-native";
import { useTheme } from "../../core/init/themes/theme_context";

import {
  ScreenNavigationProps,
  StackScreenNames,
} from "../../navigation/interfaces/interfaces";
import lightStyles from "../../core/init/themes/styles/light";
import darkStyles from "../../core/init/themes/styles/dark";
import { Language, useLanguage } from "../../core/init/lang/language_context";
import { t } from "../../core/init/lang/custom-hook/useTranslate";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const value: boolean = theme === lightStyles;

  return (
    <View>
      <Text>Change Theme</Text>
      <Switch
        // trackColor={{ true: "blue" }}
        value={!value}
        onValueChange={() => setTheme(value ? darkStyles : lightStyles)}
      />
      <Text>{value ? "light" : "dark"}</Text>
    </View>
  );
};

const Home = ({ navigation }: ScreenNavigationProps) => {
  const { theme } = useTheme();
  const { setLanguage } = useLanguage();

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: theme.container.backgroundColor,
      }}
    >
      <ThemeSwitch />

      <View style={{ flexDirection: "row" }}>
        <Button title="Tr" onPress={() => setLanguage(Language.Turkish)} />
        <Button title="Eng" onPress={() => setLanguage(Language.English)} />
      </View>
      <Button
        title={t("navbar.nav")}
        onPress={() =>
          navigation.navigate(StackScreenNames.Splash, {
            name: StackScreenNames.Splash,
            path: StackScreenNames.Splash.toLowerCase(),
          })
        }
      />
    </View>
  );
};

export default Home;
