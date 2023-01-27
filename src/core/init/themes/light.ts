import { Platform, StyleSheet } from "react-native";

export const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  text: {
    color: "yellow",
  },
  ...Platform.select({
    ios: {
      iosSpecificStyle: {
        fontSize: 20,
      },
    },
    android: {
      androidSpecificStyle: {
        fontSize: 18,
      },
    },
  }),
});
