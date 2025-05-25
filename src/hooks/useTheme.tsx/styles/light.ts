import { Platform } from 'react-native';
import { ThemeProps, Palette } from '../types';

const PaletteColors: Palette = {
  primary: { main: '#FCFCFC', dark: '#40516F', light: '#FCFCFC' },
  secondary: { main: '#8C9DBC', dark: '#4E6388', light: '#EEF0F2' },
  background: { default: 'red', paper: 'green' },
  text: { disabled: '#999999', primary: '#FFFFFF', secondary: '#40516F' },
};

const generalFontFamily: string = 'Poppins-Regular';

const lightTheme: ThemeProps = {
  palette: {
    common: { black: '#40516F', white: '#FFFFFF' },
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
      paper: '#F7F7F7',
    },

    error: {
      main: '#CB4B00',
    },

    warning: {
      main: '#FBC89F',
    },

    info: {
      main: '#89ADCF',
    },

    success: {
      main: '#579464',
    },
    text: {
      disabled: PaletteColors.text?.disabled,
    },
  },

  typography: {
    h1: {
      color: PaletteColors.text?.secondary,
      fontFamily: 'Poppins-SemiBold',
      fontSize: Platform.OS === 'android' ? 26 : 36,
      lineHeight: 40,
    },
    h2: {
      fontFamily: generalFontFamily,
      color: PaletteColors.text?.secondary,
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: Platform.OS === 'android' ? 18 : 22,
    },
    button: {
      fontFamily: generalFontFamily,
      color: PaletteColors.text?.primary,
      fontSize: Platform.OS === 'android' ? 16 : 20,
    },
    title: {
      fontFamily: generalFontFamily,
      fontStyle: 'normal',
      fontWeight: Platform.OS === 'android' ? '700' : '500',
      fontSize: 18,
      color: PaletteColors.primary.dark,
    },
    content: {
      fontFamily: generalFontFamily,
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,
      color: PaletteColors.primary.dark,
    },
    temperature: {
      fontFamily: generalFontFamily,
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 52,
      color: PaletteColors.primary.dark,
    },
    location: {
      fontFamily: generalFontFamily,
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 24,
      color: PaletteColors.primary.dark,
    },
    title2: {
      fontFamily: generalFontFamily,
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 18,
      color: PaletteColors.primary.dark,
    },
    caption: {
      fontFamily: generalFontFamily,
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 18,
      color: PaletteColors.primary.dark,
    },
  },
};
export default lightTheme;
