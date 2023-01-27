import React from "react";
import { StyleSheet, Platform } from "react-native";
import ThemeProps from "../interface/theme_interface";

const darkTheme: ThemeProps = StyleSheet.create({
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

export default darkTheme;
