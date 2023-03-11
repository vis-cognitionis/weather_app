import { Platform } from "react-native";
import ThemeProps, { Palette } from "../interface/interfaces";

const PaletteColors: Palette = {
  primary: {
    main: "#40516F",
    dark: "#FCFCFC",
    light: "#40516F",
  },
  secondary: { main: "#BDBDBD", dark: "#EEF0F2", light: "#4E6388" },
  background: { default: "red", paper: "green" },
  text: { disabled: "#999999", primary: "#40516F", secondary: "#FCFCFC" },
};

const generalFontFamily: string = "Poppins-Regular";

const darkTheme: ThemeProps = {
  palette: {
    common: { black: "#40516F", white: "#FFFFFF" },

    primary: {
      main: PaletteColors.primary.main,
      dark: PaletteColors.primary.dark,
      light: PaletteColors.primary.light,
    },

    secondary: {
      main: PaletteColors.secondary?.main,
      light: PaletteColors.secondary?.light,
      dark: PaletteColors.secondary?.dark,
    },

    background: {
      default: PaletteColors.primary.main,
      paper: "#424242",
    },

    error: {
      main: "#FF9455",
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

    text: {
      disabled: PaletteColors.text?.disabled,
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
      fontSize: Platform.OS === "android" ? 18 : 22,
    },
    button: {
      fontFamily: generalFontFamily,
      color: PaletteColors.text?.primary,
      fontSize: 20,
    },
    title: {
      fontFamily: generalFontFamily,
      fontStyle: "normal",
      fontWeight: Platform.OS === "android" ? "700" : "500",
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
    title2: {
      fontFamily: generalFontFamily,
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: 16,
      lineHeight: 18,
      color: PaletteColors.primary.dark,
    },
    caption: {
      fontFamily: generalFontFamily,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 14,
      lineHeight: 18,
      color: PaletteColors.primary.dark,
    },
  },
};

export default darkTheme;
