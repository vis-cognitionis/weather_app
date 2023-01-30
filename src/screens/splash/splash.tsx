import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

import {
  ScreenNavigationProps,
  StackScreenNames,
} from "../../navigation/interfaces/interfaces";

const SplashScreen = ({ navigation, route }: ScreenNavigationProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(StackScreenNames.Home);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("./splash.png")} style={styles.image} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
