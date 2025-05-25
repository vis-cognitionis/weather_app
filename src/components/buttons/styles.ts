import { StyleSheet, Platform } from 'react-native';

import lightTheme from 'hooks/useTheme.tsx/styles/light';
import { ThemeProps } from 'hooks/useTheme.tsx/types';

export const Styles = ({ theme }: { theme: ThemeProps }) => {
  const value: boolean = theme === lightTheme;

  return StyleSheet.create({
    button: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 64,
      height: 48,
      backgroundColor: theme.palette.primary.dark,
      borderRadius: 32,
    },

    shadow: {
      ...Platform.select({
        ios: {
          shadowColor: '#424242',
          shadowOpacity: value ? 0.5 : 1,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 6 },
        },
        android: {
          elevation: 10,
          shadowColor: '#000000',
          shadowOpacity: value ? 0.5 : 1,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 6 },
        },
      }),
    },
  });
};
