import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

import {
  ScreenNavigationProps,
  StackScreenNames,
} from "../../navigation/interfaces/interfaces";
import ActionBar from "../home/components/tab-bar/tab_bar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

const SplashScreen = ({ navigation, route }: ScreenNavigationProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(StackScreenNames.Landing, "Landing");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/* <ActionBar route={route} navigation={navigation} /> */}
      <Image source={require("./splash.png")} style={styles.image} />
    </View>
  );
};

export default SplashScreen;
