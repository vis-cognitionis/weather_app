import { StyleSheet, Platform } from 'react-native';

import { windowHeight } from 'constants/Dimesions';
import { ThemeProps } from 'hooks/useTheme/types';

export const Styles = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'column',
      gap: Platform.OS === 'android' ? 50 : windowHeight * 0.05,
      alignItems: 'center',
      backgroundColor: theme.palette.background.default,
      height: '100%',
    },
    image: {
      marginTop: windowHeight <= 736 ? '5%' : '15%',
    },
    actionButton: {
      paddingHorizontal: 70,
      paddingVertical: 10,
      gap: 10,
      width: 291,
      height: 62,
    },
  });
};
