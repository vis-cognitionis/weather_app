import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Platform,
  SafeAreaView,
} from "react-native";

import ActionButton from "../../../core/components/buttons/action_button";
import ThemeProps from "../../../core/init/themes/interface/interfaces";
import mainStore from "../../view-model/main_store";
import { useTheme } from "../../../core/init/themes/theme_context";
import { t } from "../../../core/init/lang/custom-hook/useTranslate";

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

const Landing = () => {
  const { theme } = useTheme();
  const styles = Styles({ theme });

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/landing_page.png")}
      />
      <Text style={[theme.typography.h1, { width: "70%" }]}>
        {t("landing.content")}
      </Text>
      <ActionButton
        onPress={() => {
          mainStore.setNavigateLanding(false);
        }}
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
