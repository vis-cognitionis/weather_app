import { TextStyle } from "react-native";

interface CommonColors {
  black?: string;
  white?: string;
}

interface PaletteColor {
  main?: string;
  light?: string;
  dark?: string;
}

interface TextColor {
  primary?: string;
  secondary?: string;
  disabled?: string;
}

interface TypeBackground {
  default?: string;
  paper?: string;
}

export interface Palette {
  common?: CommonColors;
  primary: PaletteColor;
  secondary?: PaletteColor;
  error?: PaletteColor;
  warning?: PaletteColor;
  info?: PaletteColor;
  success?: PaletteColor;
  text?: TextColor;
  background: TypeBackground;
}

type Variant =
  | "h1"
  | "h2"
  | "button"
  | "title"
  | "content"
  | "temperature"
  | "location"
  | "title2"
  | "caption";

interface Typography extends Record<Variant, TextStyle> {}

export default interface ThemeProps {
  palette: Palette;
  typography: Typography;
}
