import { TextStyle, Platform } from "react-native";

interface CommonColors {
  black: string;
  white: string;
}

interface PaletteColor {
  main?: string;
  light?: string;
  dark?: string;
}

interface TypeText {
  primary: string;
  secondary: string;
  disabled: string;
}

interface TypeBackground {
  default: string;
  paper: string;
}

interface Palette {
  common: CommonColors;
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  text: TypeText;
  background: TypeBackground;
}

//  type Variant =
//   | "h1"
//   | "h2"
//   | "h3"
//   | "h4"
//   | "h5"
//   | "h6"
//   | "subtitle1"
//   | "subtitle2"
//   | "body1"
//   | "body2"
//   | "caption"
//   | "button"
//   | "overline";

type Variant = "h1" | "h2";
// or appbar, appsection etc.

interface Typography extends Record<Variant, TextStyle> {}

export default interface ThemeProps {
  palette: Palette;
  typography: Typography;
}
