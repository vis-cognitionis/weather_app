import { View, Image } from 'react-native';

import { styles } from './styles';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('assets/images/splashBg.png')} style={styles.image} />
    </View>
  );
};
