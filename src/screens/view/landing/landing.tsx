import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  Platform,
  SafeAreaView,
  View,
  Pressable,
} from "react-native";
import { observer } from "mobx-react";

import ActionButton from "src/core/components/buttons/action_button";
import ThemeProps from "src/core/init/themes/interface/interfaces";
import mainStore from "src/screens/view-model/main_store";
import { useTheme } from "src/core/init/themes/theme_context";
import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";
import { windowHeight } from "../common/constants/constants";
import { IconNoNetwork } from "src/core/components/icons/custom_icons";
import { useWeatherDatas } from "../common/queries/useWeatherDatas";

const Styles = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    container: {
      flexDirection: "column",
      gap: Platform.OS === "android" ? 50 : windowHeight * 0.05,
      alignItems: "center",
      backgroundColor: theme.palette.background.default,
      height: "100%",
    },
    image: {
      marginTop: windowHeight <= 736 ? "5%" : "15%",
    },
  });
};

const ErrorScreen = () => {
  const { theme } = useTheme();
  const { t } = useTranslate();

  const { refetch } = useWeatherDatas();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
      gap: 20,
    },
    icon: {
      marginBottom: 16,
    },
    message: {
      textAlign: "center",
    },

    refreshButton: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "gray",
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
    },
    refreshText: {
      color: "white",
      marginLeft: 5,
    },
  });
  const refreshApp = () => {
    if (mainStore.networkError) {
      mainStore.setNetworkError(false);
    }
  };

  return (
    <View style={styles.container}>
      <IconNoNetwork />
      <Text style={[theme.typography.content, styles.message]}>
        {t("error.noNetwork")}
      </Text>
      <Pressable
        onPress={() => {
          refreshApp();
        }}
      >
        <View style={styles.refreshButton}>
          <Text style={styles.refreshText}>Refresh</Text>
        </View>
      </Pressable>
    </View>
  );
};

const Landing = () => {
  const { theme } = useTheme();
  const styles = Styles({ theme });
  const { t } = useTranslate();

  return (
    <SafeAreaView style={styles.container}>
      {/* {mainStore.networkError ? (
        <ErrorScreen />
      ) : (
        <> */}
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
      {/* </>
      )} */}
    </SafeAreaView>
  );
};
export default observer(Landing);
