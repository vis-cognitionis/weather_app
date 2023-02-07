import { Platform } from "react-native";
import ThemeProps, { Palette } from "../interface/interfaces";

const PaletteColors: Palette = {
  primary: { main: "#40516F", dark: "#40516F", light: "#FCFCFC" },
  background: { default: "red", paper: "green" },
  text: { disabled: "purple", primary: "#FFFFFF", secondary: "#40516F" },
};

const lightTheme: ThemeProps = {
  palette: {
    common: { black: "#424242", white: "#F7F7F7" },
    primary: {
      main: PaletteColors.primary.main,
      dark: PaletteColors.primary.dark,
      light: PaletteColors.primary.light,
    },

    secondary: {
      light: "#A0B3C6",
      dark: "#788897",
    },

    background: {
      default: "#F8F8F8",
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

    success: {
      main: "#6BB27B",
    },
  },

  typography: {
    h1: {
      color: PaletteColors.text?.secondary,
      // fontFamily: "Poppins-Regular",r
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: Platform.OS === "android" ? 26 : 36,
      lineHeight: 40,
      textAlign: "center",
    },
    h2: { color: "green" },
    button: {
      color: PaletteColors.text?.primary,
      fontSize: Platform.OS === "android" ? 16 : 20,
    },
  },
};
export default lightTheme;
