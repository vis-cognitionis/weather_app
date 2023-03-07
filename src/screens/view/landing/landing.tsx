import React from "react";
import { StyleSheet, Text, Image, Platform, SafeAreaView } from "react-native";

import ActionButton from "src/core/components/buttons/action_button";
import ThemeProps from "src/core/init/themes/interface/interfaces";
import mainStore from "src/screens/view-model/main_store";
import { useTheme } from "src/core/init/themes/theme_context";
import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";
import { windowHeight } from "../common/constants/constants";

const Styles = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    container: {
      flexDirection: "column",
      gap: Platform.OS === "android" ? 15 : windowHeight * 0.05,
      alignItems: "center",
      backgroundColor: theme.palette.background.default,
      height: "100%",
    },
    image: {
      marginTop: windowHeight <= 736 ? "5%" : "15%",
    },
  });
};

const Landing = () => {
  const { theme } = useTheme();
  const styles = Styles({ theme });
  const { t } = useTranslate();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../images/landing_page.png")}
      />
      <Text
        style={[theme.typography.h1, { width: "70%", textAlign: "center" }]}
      >
        {t("landing.content")}
      </Text>

      {/* <GradientButton
        text={t("landing.button")}
        onPress={() => {
          mainStore.setNavigateLanding(false);
        }}
      /> */}
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
