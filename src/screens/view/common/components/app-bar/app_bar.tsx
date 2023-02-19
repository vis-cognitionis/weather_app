import React, { useState } from "react";
import {
  Button,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { observer } from "mobx-react";

import lightTheme from "src/core/init/themes/styles/light";
import ThemeProps from "src/core/init/themes/interface/interfaces";
import { useTheme } from "src/core/init/themes/theme_context";
import { StackScreenNames } from "src/navigation/interfaces/interfaces";
import {
  IconBack,
  IconDarkTheme,
  IconLightTheme,
} from "src/core/components/icons/custom_icons";
import darkTheme from "src/core/init/themes/styles/dark";
import mainStore from "src/screens/view-model/main_store";

const SwitchStyles = ({ theme }: { theme: ThemeProps }) => {
  const value: boolean = theme === lightTheme;

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
      paddingTop: 15,
      flex: 1,
    },
  });
};

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const value: boolean = theme === lightTheme;
  const styles = SwitchStyles({ theme });

  return (
    <Pressable
      style={[styles.button, styles.shadow]}
      onPress={() => setTheme(value ? darkTheme : lightTheme)}
    >
      {value ? <IconDarkTheme /> : <IconLightTheme />}
    </Pressable>
  );
};

const style = StyleSheet.create({
  location: {
    flexDirection: "row",
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});

const AppBar = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = AppBarStyles({ theme });
  console.log(mainStore.city);
  const [inputValue, setInputValue] = useState<string>(mainStore.city);

  return (
    <SafeAreaView style={styles.container}>
      {mainStore.currentTab !== StackScreenNames.Settings.toString() ? (
        <View style={style.location}>
          <TextInput value={inputValue} onChangeText={setInputValue} />
          <Button title="O" onPress={() => mainStore.setCity(inputValue)} />
        </View>
      ) : (
        <Pressable
          style={style.backButton}
          children={<IconBack />}
          onPress={() => {
            navigation.navigate(mainStore.previousTab as never);
            mainStore.setCurrentTab(mainStore.previousTab);
          }}
        />
      )}
      <ThemeSwitch />
    </SafeAreaView>
  );
};
export default observer(AppBar);
