import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { LinearGradientText } from "react-native-linear-gradient-text";
import { GestureResponderEvent } from "react-native";

import ActionButton from "../../../core/components/buttons/action_button";
import ThemeProps from "../../../core/init/themes/interface/interfaces";
import mainStore from "../../view-model/main_store";
import { useTheme } from "../../../core/init/themes/theme_context";
import { t } from "../../../core/init/lang/custom-hook/useTranslate";

const GradientButton = ({
  onPress,
  text,
}: {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  text: string;
}) => {
  const { theme } = useTheme();
  const styles = Styles2({ theme });

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[theme.palette.primary?.dark!, "#CB4B00"]}
      style={styles.buttonGradient}
    >
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <LinearGradientText
          colors={[theme.palette.primary?.dark!, "#CB4B00"]}
          text={text}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 1, y: 1 }}
          textStyle={theme.typography.button}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const Styles2 = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    buttonContainer: {
      borderRadius: 32,
      backgroundColor: theme.palette.background.default,
      paddingVertical: 10,
      paddingHorizontal: 50,
    },
    buttonGradient: {
      borderRadius: 32,
      padding: 3,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
  });
};

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
        source={require("../../../images/landing_page.png")}
      />
      <Text
        style={[theme.typography.h1, { width: "70%", textAlign: "center" }]}
      >
        {t("landing.content")}
      </Text>

      <GradientButton
        text={t("landing.button")}
        onPress={() => {
          mainStore.setNavigateLanding(false);
        }}
      />
      {/* <ActionButton
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
      /> */}
    </SafeAreaView>
  );
};
export default Landing;
