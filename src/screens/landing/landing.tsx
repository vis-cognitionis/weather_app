import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Platform,
  SafeAreaView,
} from "react-native";

import ThemeProps from "../../core/init/themes/interface/interfaces";
import { useTheme } from "../../core/init/themes/theme_context";
import {
  ScreenNavigationProps,
  StackScreenNames,
} from "../../navigation/interfaces/interfaces";
import ActionButton from "../../core/components/buttons/action_button";
import { t } from "../../core/init/lang/custom-hook/useTranslate";

const Styles = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      gap: Platform.OS === "android" ? 15 : 66,
      alignItems: "center",
      backgroundColor: theme.palette.background.default,
    },
    image: {
      marginTop: 30,
      width: 313,
      height: 341,
    },
  });
};

const Landing = ({ navigation, route }: ScreenNavigationProps) => {
  const { theme } = useTheme();
  const styles = Styles({ theme });

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/landing_page.png")}
      />
      <View style={{ width: 254, height: 120 }}>
        <Text style={theme.typography.h1}> {t("landing.content")} </Text>
      </View>
      <ActionButton
        onPress={() =>
          navigation.navigate(StackScreenNames.Outlet, {
            name: StackScreenNames.Outlet,
            path: StackScreenNames.Outlet,
          })
        }
        children={
          <Text style={theme.typography.button}>{t("landing.button")} </Text>
        }
        customStyles={{
          paddingHorizontal: 70,
          paddingVertical: 10,
          gap: 10,
          width: 291,
          height: 62,
        }}
      />
    </SafeAreaView>
  );
};
export default Landing;
