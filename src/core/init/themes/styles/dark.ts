import ThemeProps, { Palette } from "../interface/interfaces";

const PaletteColors: Palette = {
  primary: {
    main: "#40516F",
  },
  background: { default: "red", paper: "green" },
  text: { disabled: "purple", primary: "blue", secondary: "black" },
};

const darkTheme: ThemeProps = {
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
      default: "#666666",
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

    text: {
      primary: "#252525",
      secondary: "#F7F7F7",
      disabled: "#A9A9A9",
    },

    success: {
      main: "#6BB27B",
    },
  },
  typography: {
    h1: {
      color: PaletteColors.primary.main,
      // fontFamily: "Poppins-Regular",r
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: 36,
      lineHeight: 40,
      textAlign: "center",
    },
    h2: { color: "green" },
    button: { color: PaletteColors.primary.main, fontSize: 20 },
  },
};

export default darkTheme;
