import React, { useCallback, useState } from "react";
import { SafeAreaView, View, Button, StyleSheet, Text } from "react-native";
import { t } from "../../core/init/lang/custom-hook/useTranslate";
import ThemeProps from "../../core/init/themes/interface/interfaces";
import { useTheme } from "../../core/init/themes/theme_context";
import {
  ScreenNavigationProps,
  StackScreenNames,
} from "../../navigation/interfaces/interfaces";

const Landing = ({ navigation }: ScreenNavigationProps) => {
  const { theme } = useTheme();
  const styles = Styles({ theme });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title={"GO TO HOME"}
          onPress={() =>
            navigation.navigate(StackScreenNames.Home, {
              name: StackScreenNames.Home,
              path: StackScreenNames.Home.toLowerCase(),
            })
          }
        />
        <Text style={theme.typography.h1}> {t("landing.content")} </Text>
      </View>
    </SafeAreaView>
  );
};
export default Landing;

const Styles = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.palette.background.default,
    },
  });
};
