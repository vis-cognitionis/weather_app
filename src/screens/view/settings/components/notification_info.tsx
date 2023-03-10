import React, { useEffect, useState } from "react";
import { Animated, View, Text } from "react-native";
import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";
import { useTheme } from "src/core/init/themes/theme_context";

import mainStore from "src/screens/view-model/main_store";

const NotificationInfo = () => {
  const { t } = useTranslate();
  const { theme } = useTheme();

  const [animation] = useState<Animated.Value>(new Animated.Value(0));

  useEffect(() => {
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
        }).start(() => {
          mainStore.setShowNotification(false);
        });
      }, 5000);
    });
  }, []);

  const animationStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60],
        }),
      },
    ],
    opacity: animation,
  };
  return (
    <View
      style={{
        position: "absolute",
        bottom: -40,
        width: "auto",
        left: "25%",
      }}
    >
      <Animated.View
        style={[
          {
            backgroundColor: theme.palette.primary.dark,
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
          style={[
            theme.typography.caption,
            { color: theme.palette.primary.light },
          ]}
        >
          {t("error.info")}
        </Text>
      </Animated.View>
    </View>
  );
};

export default NotificationInfo;
