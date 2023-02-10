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
      light: "#A0B3C6",
      dark: "#788897",
    },

    background: {
      default: PaletteColors.primary.main,
      paper: "#424242",
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
      fontSize: 36,
      lineHeight: 40,
      textAlign: "center",
    },
    h2: { color: "green" },
    button: { color: PaletteColors.text?.primary, fontSize: 20 },
  },
};

export default darkTheme;
