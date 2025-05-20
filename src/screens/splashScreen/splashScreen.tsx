import React from 'react';
import { View, Image } from 'react-native';

import mainStore from '../view-model/main_store';
import { styles } from './styles';
import { ScreenNavigationProps } from 'navigation/interfaces/interfaces';

export const SplashScreen = ({}: ScreenNavigationProps) => {
  React.useEffect(() => {
    setTimeout(() => {
      mainStore.setShowSplashScreen(false);
      mainStore.setNavigateLanding(true);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/splashBg.png')} style={styles.image} />
    </View>
  );
};
