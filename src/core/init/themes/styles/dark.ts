import ThemeProps, { Palette } from "../interface/interfaces";

const PaletteColors: Palette = {
  primary: {
    main: "#40516F",
    dark: "#FCFCFC",
    light: "#40516F",
  },
  background: { default: "red", paper: "green" },
  text: { disabled: "purple", primary: "#40516F", secondary: "#FCFCFC" },
};

const darkTheme: ThemeProps = {
  palette: {
    common: { black: "#40516F", white: "#FFFFFF" },

    primary: {
      main: PaletteColors.primary.main,
      dark: PaletteColors.primary.dark,
      light: PaletteColors.primary.light,
    },

    secondary: {
      main: "#F1AAAA",
      light: "#A0B3C6",
      dark: "#788897",
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
  },
  typography: {
    h1: {
      color: PaletteColors.text?.secondary,
      // fontFamily: "Poppins-Regular",r
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: 36,
      lineHeight: 40,
      textAlign: "center",
    },
    h2: {
      color: PaletteColors.text?.secondary,
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: 24,
    },
    button: { color: PaletteColors.text?.primary, fontSize: 20 },
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
    temperature: {
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: 52,
      color: PaletteColors.primary.dark,
    },
    location: {
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: 24,
      color: PaletteColors.primary.dark,
    },
    weather: {
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: 12,
      lineHeight: 18,
      color: PaletteColors.primary.dark,
    },
  },
};

export default darkTheme;
