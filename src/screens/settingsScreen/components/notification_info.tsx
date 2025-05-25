import { useEffect, useState } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

import { useTranslate, useTheme } from 'hooks';
import mainStore from 'store/mainStore';

const NotificationInfo = () => {
  const { t } = useTranslate();
  const { theme } = useTheme();
  const [animation] = useState<Animated.Value>(new Animated.Value(0));

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignSelf: 'center',
      position: 'absolute',
      bottom: -40,
      width: 'auto',
    },
    animStyle: {
      backgroundColor: theme.palette.primary.dark,
      paddingVertical: 12,
      paddingHorizontal: 18,
      borderRadius: 20,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
    },
  });

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
  }, [animation]);

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
    <View style={styles.container}>
      <Animated.View style={[styles.animStyle, animationStyle]}>
        <Text style={[theme.typography.caption, { color: theme.palette.primary.light }]}>
          {t('error.info')}
        </Text>
      </Animated.View>
    </View>
  );
};

export default NotificationInfo;
