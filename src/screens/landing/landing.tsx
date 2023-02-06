import React from "react";
import { View, StyleSheet, Text, Image, Platform } from "react-native";

import ThemeProps from "../../core/init/themes/interface/interfaces";
import { useTheme } from "../../core/init/themes/theme_context";
import {
  ScreenNavigationProps,
  StackScreenNames,
} from "../../navigation/interfaces/interfaces";
import ActionButton from "../../core/components/buttons/button";
import { t } from "../../core/init/lang/custom-hook/useTranslate";

const Styles = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      flex: 1,
      backgroundColor: theme.palette.background.default,
      paddingTop: 80,
      paddingRight: 30,
      paddingBottom: 77,
      paddingLeft: 30,
    },
    image: {
      width: 313,
      height: 341,
    },
  });
};

const Landing = ({ navigation }: ScreenNavigationProps) => {
  const { theme } = useTheme();
  const styles = Styles({ theme });

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: Platform.OS === "android" ? 15 : 66,
          alignItems: "center",
        }}
      >
        <Image
          style={styles.image}
          source={require("../../assets/landing_page.png")}
        />
        <View style={{ width: 254, height: 120 }}>
          <Text style={theme.typography.h1}> {t("landing.content")} </Text>
        </View>

        <ActionButton
          onPress={() =>
            navigation.navigate(StackScreenNames.Home, {
              name: StackScreenNames.Home,
              path: StackScreenNames.Home.toLowerCase(),
            })
          }
          children={
            <Text style={theme.typography.button}>{t("landing.button")} </Text>
          }
          customStyles={{
            paddingHorizontal: 90,
            paddingVertical: 10,
            gap: 10,
            width: 291,
            height: 62,
          }}
        />
      </View>
    </View>
  );
};
export default Landing;
