import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { ScreenNavigationProps } from '../../../navigation/interfaces/interfaces';
import mainStore from '../../../screens/view-model/main_store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

const SplashScreen = ({ }: ScreenNavigationProps) => {
  useEffect(() => {
    setTimeout(() => {
      mainStore.setShowSplashScreen(false);
      mainStore.setNavigateLanding(true);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../images/splash.png')}
        style={styles.image}
      />
    </View>
  );
};

export default SplashScreen;
