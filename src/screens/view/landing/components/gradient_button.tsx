import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LinearGradientText } from 'react-native-linear-gradient-text';

import ThemeProps from '../../../../core/init/themes/interface/interfaces';
import { useTheme } from '../../../../core/init/themes/theme_context';

const Styles = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    buttonContainer: {
      borderRadius: 32,
      backgroundColor: theme.palette.background.default,
      paddingVertical: 10,
      paddingHorizontal: 50,
    },
    borderContainer: {
      borderRadius: 32,
      padding: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
};

const GradientButton = ({
  onPress,
  text,
}: {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  text: string;
}) => {
  const { theme } = useTheme();
  const styles = Styles({ theme });

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[theme.palette.primary?.dark!, '#CB4B00']}
      style={styles.borderContainer}
    >
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <LinearGradientText
          colors={[theme.palette.primary?.dark!, '#CB4B00']}
          text={text}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 1, y: 1 }}
          textStyle={theme.typography.button}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GradientButton;
