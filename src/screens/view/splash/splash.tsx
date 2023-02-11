import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/splash.png")}
        style={styles.image}
      />
    </View>
  );
};

export default SplashScreen;
