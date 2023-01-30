import React from "react";
import ThemeProps from "../interface/interfaces";

const lightTheme: ThemeProps = {
  palette: {
    common: { black: "#424242", white: "#F7F7F7" },
    primary: {
      dark: "#424242",
      light: "#F7F7F7",
    },

    secondary: {
      light: "#A0B3C6",
      dark: "#788897",
    },

    background: {
      default: "#CDCDCD",
      paper: "#F7F7F7",
    },

    error: {
      main: "#F9D4D1",
    },

    warning: {
      main: "#FBC89F",
    },

    info: {
      main: "#89ADCF",
    },

    text: {
      primary: "#252525",
      secondary: "#F7F7F7",
      disabled: "#A9A9A9",
    },

    success: {
      main: "#6BB27B",
    },
  },

  typography: { h1: { color: "red" }, h2: { color: "green" } },
};
export default lightTheme;
