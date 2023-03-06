import React from "react";

import { View, Animated, Text } from "react-native";
import { useTheme } from "src/core/init/themes/theme_context";

export const handleNotificationPress = ({
  setShowNotification,
  animation,
}: {
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
  animation: Animated.Value;
}) => {
  setShowNotification(true);
  Animated.timing(animation, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  }).start(() => {
    setTimeout(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => setShowNotification(false));
    }, 2000);
  });
};

const Notification = ({
  showNotification,
  message,
  animation,
  backgroundColor,
}: {
  showNotification: boolean;
  message: string;
  backgroundColor: string;
  animation: Animated.Value;
}) => {
  const animationStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -100],
        }),
      },
    ],
    opacity: animation,
  };
  return showNotification ? (
    <View
      style={{
        position: "absolute",
        bottom: -40,
        width: "auto",
        left: "15%",
      }}
    >
      <Animated.View
        style={[
          {
            backgroundColor: backgroundColor,
            paddingVertical: 12,
            paddingHorizontal: 18,
            borderRadius: 20,
            top: 0,
            left: 0,
            right: 0,
            zIndex: 999,
          },
          animationStyle,
        ]}
      >
        <Text
          style={{
            color: "#FFFFFF",
          }}
        >
          {message}
        </Text>
      </Animated.View>
    </View>
  ) : null;
};

const notifySuccess = ({
  message,
  animation,
  showNotification,
}: {
  message: string;
  animation: Animated.Value;
  showNotification: boolean;
}) => {
  const { theme } = useTheme();
  return (
    <Notification
      animation={animation}
      backgroundColor={theme.palette.success?.main!}
      message={message}
      showNotification={showNotification}
    />
  );
};

const notifyWarning = ({
  message,
  animation,
  showNotification,
}: {
  message: string;
  animation: Animated.Value;
  showNotification: boolean;
}) => {
  const { theme } = useTheme();

  return (
    <Notification
      animation={animation}
      backgroundColor={theme.palette.warning?.main!}
      message={message}
      showNotification={showNotification}
    />
  );
};
const notifyError = ({
  message,
  animation,
  showNotification,
}: {
  message: string;
  animation: Animated.Value;
  showNotification: boolean;
}) => {
  const { theme } = useTheme();

  return (
    <Notification
      animation={animation}
      backgroundColor={theme.palette.error?.main!}
      message={message}
      showNotification={showNotification}
    />
  );
};

const Notifies = () => {
  return { notifySuccess, notifyError, notifyWarning };
};

export const Notify = Notifies();
