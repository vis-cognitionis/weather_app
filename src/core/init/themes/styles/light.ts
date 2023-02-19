import { Platform } from "react-native";
import ThemeProps, { Palette } from "../interface/interfaces";

const PaletteColors: Palette = {
  primary: { main: "#FCFCFC", dark: "#40516F", light: "#FCFCFC" },
  background: { default: "red", paper: "green" },
  text: { disabled: "purple", primary: "#FFFFFF", secondary: "#40516F" },
};

const generalFontFamily: string = "Poppins-Regular";

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
      fontFamily: "Poppins-SemiBold",
      fontSize: Platform.OS === "android" ? 26 : 36,
      lineHeight: 40,
    },
    h2: {
      fontFamily: generalFontFamily,
      color: PaletteColors.text?.secondary,
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: 24,
    },
    button: {
      fontFamily: generalFontFamily,
      color: PaletteColors.text?.primary,
      fontSize: Platform.OS === "android" ? 16 : 20,
    },
    title: {
      fontFamily: generalFontFamily,
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: 18,
      color: PaletteColors.primary.dark,
    },
    content: {
      fontFamily: generalFontFamily,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 16,
      color: PaletteColors.primary.dark,
    },
    temperature: {
      fontFamily: generalFontFamily,
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: 52,
      color: PaletteColors.primary.dark,
    },
    location: {
      fontFamily: generalFontFamily,
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: 24,
      color: PaletteColors.primary.dark,
    },
    weather: {
      fontFamily: generalFontFamily,
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: 12,
      lineHeight: 18,
      color: PaletteColors.primary.dark,
    },
    appbar: {
      fontFamily: generalFontFamily,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 14,
      lineHeight: 18,
      color: PaletteColors.primary.dark,
    },
  },
};
export default lightTheme;
