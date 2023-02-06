import React from "react";
import {
  StyleSheet,
  Platform,
  Pressable,
  GestureResponderEvent,
  FlexStyle,
  ViewStyle,
} from "react-native";

import ThemeProps from "../../init/themes/interface/interfaces";
import lightTheme from "../../init/themes/styles/light";
import { useTheme } from "../../init/themes/theme_context";

const Styles = ({ theme }: { theme: ThemeProps }) => {
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
          shadowColor: theme === lightTheme ? "#424242" : "#FCFCFC",
          shadowOpacity: theme === lightTheme ? 0.6 : 0.25,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 6 },
        },
        android: {
          elevation: 10,
          shadowColor: "#000000",
        },
      }),
    },
  });
};

interface ButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  children?: React.ReactNode;
  customStyles?: FlexStyle | ViewStyle;
}

const ActionButton = ({ onPress, children, customStyles }: ButtonProps) => {
  const { theme } = useTheme();
  const styles = Styles({ theme });

  return (
    <Pressable
      style={[styles.button, styles.shadow, customStyles]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

export default ActionButton;
