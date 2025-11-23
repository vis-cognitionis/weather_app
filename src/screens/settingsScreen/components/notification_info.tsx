import { useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

import { useTranslate, useTheme } from 'hooks';
import { useMainStore } from 'store/useMainStore';

const NotificationInfo = () => {
  const { t } = useTranslate();
  const { theme } = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const setShowNotification = useMainStore((state) => state.setShowNotification);

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
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          setShowNotification(false);
        });
      }, 5000);
    });
  }, [fadeAnim]);

  const animationStyle = {
    transform: [
      {
        translateY: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60],
        }),
      },
    ],
    opacity: fadeAnim,
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
