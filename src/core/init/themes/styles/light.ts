import { Platform } from "react-native";
import ThemeProps, { Palette } from "../interface/interfaces";

const PaletteColors: Palette = {
  primary: { main: "#FCFCFC", dark: "#40516F", light: "#FCFCFC" },
  background: { default: "red", paper: "green" },
  text: { disabled: "purple", primary: "#FFFFFF", secondary: "#40516F" },
};

const lightTheme: ThemeProps = {
  palette: {
    common: { black: "#40516F", white: "#FFFFFF" },
    primary: {
      main: PaletteColors.primary.main,
      dark: PaletteColors.primary.dark,
      light: PaletteColors.primary.light,
    },

    secondary: {
      main: "#BF6767",
      light: "#A0B3C6",
      dark: "#788897",
    },

    background: {
      default: PaletteColors.primary.main,
      paper: "#F7F7F7",
    },

    error: {
      main: "#CB4B00",
    },

    warning: {
      main: "#FBC89F",
    },

    info: {
      main: "#89ADCF",
    },

    success: {
      main: "#579464",
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
    title: {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: 18,
      color: PaletteColors.primary.dark,
    },
    content: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 16,
      color: PaletteColors.primary.dark,
    },
  },
};
export default lightTheme;
