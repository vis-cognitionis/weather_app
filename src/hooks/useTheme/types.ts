import { TextStyle } from 'react-native';

type CommonColors = {
  black?: string;
  white?: string;
};

type PaletteColor = {
  main?: string;
  light?: string;
  dark?: string;
};

type TextColor = {
  primary?: string;
  secondary?: string;
  disabled?: string;
};

type TypeBackground = {
  default?: string;
  paper?: string;
};

export type Palette = {
  common?: CommonColors;
  primary: PaletteColor;
  secondary?: PaletteColor;
  error?: PaletteColor;
  warning?: PaletteColor;
  info?: PaletteColor;
  success?: PaletteColor;
  text?: TextColor;
  background: TypeBackground;
};

type Variant =
  | 'h1'
  | 'h2'
  | 'button'
  | 'title'
  | 'content'
  | 'temperature'
  | 'location'
  | 'title2'
  | 'caption';

interface Typography extends Record<Variant, TextStyle> {}

export type ThemeProps = {
  palette: Palette;
  typography: Typography;
};
