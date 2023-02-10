import React from "react";
import {
  StyleSheet,
  Platform,
  Pressable,
  FlexStyle,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";

import ThemeProps from "../../init/themes/interface/interfaces";
import lightStyles from "../../init/themes/styles/light";
import { useTheme } from "../../init/themes/theme_context";

const Styles = ({ theme }: { theme: ThemeProps }) => {
  const value: boolean = theme === lightStyles;

  return StyleSheet.create({
    button: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: 64,
      height: 48,
      backgroundColor: theme.palette.primary.dark,
      borderRadius: 32,
    },

    shadow: {
      ...Platform.select({
        ios: {
          shadowColor: "#424242",
          shadowOpacity: value ? 0.5 : 1,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 6 },
        },
        android: {
          elevation: 10,
          shadowColor: "#000000",
          shadowOpacity: value ? 0.5 : 1,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 6 },
        },
      }),
    },
  });
};

interface ButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  children?: React.ReactNode;
  customStyles?: FlexStyle | ViewStyle;
  isFocused?: boolean;
}

const ActionButton = ({
  onPress,
  children,
  customStyles,
  isFocused = true,
}: ButtonProps) => {
  const { theme } = useTheme();
  const styles = Styles({ theme });

  return (
    <Pressable
      style={[styles.button, isFocused && styles.shadow, customStyles]}
      children={children}
      onPress={onPress}
    />
  );
};

export default ActionButton;
