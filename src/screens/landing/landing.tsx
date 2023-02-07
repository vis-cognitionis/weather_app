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
import ActionButton from "../../core/components/buttons/button";
import { t } from "../../core/init/lang/custom-hook/useTranslate";
import Svg, { Circle, Rect } from "react-native-svg";

const MySVG = () => {
  return (
    <Svg style={styles3.container} height="100" width="100">
      <Circle cx="50" cy="50" r="45" fill="blue" />
      <Rect x="15" y="15" width="70" height="70" fill="red" />
    </Svg>
  );
};

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Styles = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      gap: Platform.OS === "android" ? 15 : 66,
      alignItems: "center",
      marginTop: 100,
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
    </SafeAreaView>
  );
};
export default Landing;
