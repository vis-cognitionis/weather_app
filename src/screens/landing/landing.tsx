import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  Platform,
  Button,
} from "react-native";

import ThemeProps from "../../core/init/themes/interface/interfaces";
import { useTheme } from "../../core/init/themes/theme_context";
import {
  ScreenNavigationProps,
  StackScreenNames,
} from "../../navigation/interfaces/interfaces";
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

    button: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 90,
      paddingVertical: 10,
      gap: 10,
      width: 291,
      height: 62,
      backgroundColor: theme.palette.primary.main,
      borderRadius: 32,
    },

    shadow: {
      ...Platform.select({
        ios: {
          shadowColor: "#424242",
          shadowOpacity: 0.6,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 6 },
        },
        android: {
          elevation: 10,
          shadowColor: "#000000",
        },
      }),
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
        <Pressable
          style={[styles.button, styles.shadow]}
          onPress={() =>
            navigation.navigate(StackScreenNames.Home, {
              name: StackScreenNames.Home,
              path: StackScreenNames.Home.toLowerCase(),
            })
          }
        >
          <Text style={theme.typography.button}>{t("landing.button")} </Text>
        </Pressable>
      </View>

      {/* <Button
        title={t("landing.button")}
        onPress={() =>
          navigation.navigate(StackScreenNames.Home, {
            name: StackScreenNames.Home,
            path: StackScreenNames.Home.toLowerCase(),
          })
        }
      /> */}
    </View>
  );
};
export default Landing;
