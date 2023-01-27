import { StyleSheet, Platform } from "react-native";

export const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  text: {
    color: "green",
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
