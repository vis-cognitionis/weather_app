import React from "react";
import { Platform, StyleSheet } from "react-native";
import ThemeProps from "../interface/theme_interface";

const lightTheme: ThemeProps = StyleSheet.create({
  container: {
    backgroundColor: "#CDCDCD",
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

export default lightTheme;
