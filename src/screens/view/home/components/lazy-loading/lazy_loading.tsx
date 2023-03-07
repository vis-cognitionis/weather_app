import React, { useEffect, useState } from "react";
import { StyleSheet, ViewStyle, Animated, Easing, View } from "react-native";

const lazyStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  box1: {
    width: 255,
    height: 38,
    backgroundColor: "#D9D9D9",
    marginBottom: 20,
  },
  box2: {
    width: 329,
    height: 231,
    backgroundColor: "#D9D9D9",
    marginBottom: 20,
  },
  box3: {
    width: 127,
    height: 38,
    backgroundColor: "#D9D9D9",
    marginBottom: 8,
  },
  box4: {
    width: 117,
    height: 20,
    backgroundColor: "#D9D9D9",
    marginBottom: 8,
  },
  box5: {
    width: 80,
    height: 20,
    backgroundColor: "#D9D9D9",
    marginBottom: 8,
  },
  box6: {
    width: 157,
    height: 20,
    backgroundColor: "#D9D9D9",
    marginBottom: 8,
  },
  container2: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  box: {
    width: 66,
    height: 129,
    backgroundColor: "#D9D9D9",
    marginRight: 14,
  },
  boxGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
});

const LazyLoading = () => {
  const LoadingAnimationView = ({ style }: { style: ViewStyle }) => {
    const [fadeAnim] = useState(new Animated.Value(0.3));
    const [bounceAnim] = useState(new Animated.Value(0.9));

    useEffect(() => {
      const fadeInOut = () => {
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0.3,
            duration: 2000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]).start(() => fadeInOut());
      };
      fadeInOut();

      const loadingAnim = () => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(bounceAnim, {
              toValue: 1,
              duration: 1500,
              easing: Easing.inOut(Easing.ease),
              useNativeDriver: true,
            }),
            Animated.timing(bounceAnim, {
              toValue: 1,
              duration: 1500,
              easing: Easing.inOut(Easing.ease),
              useNativeDriver: true,
            }),
          ])
        ).start();
      };
      loadingAnim();
    }, []);

    return (
      <Animated.View
        style={{
          ...style,

          opacity: fadeAnim,
          transform: [{ scaleY: bounceAnim }],
        }}
      />
    );
  };

  return (
    <View style={lazyStyles.container}>
      <LoadingAnimationView style={lazyStyles.box1} />
      <LoadingAnimationView style={lazyStyles.box2} />
      <LoadingAnimationView style={lazyStyles.box3} />
      <LoadingAnimationView style={lazyStyles.box4} />
      <LoadingAnimationView style={lazyStyles.box5} />
      <LoadingAnimationView style={lazyStyles.box6} />

      <View style={lazyStyles.container2}>
        <View style={lazyStyles.boxGroup}>
          <LoadingAnimationView style={lazyStyles.box} />
          <LoadingAnimationView style={lazyStyles.box} />
          <LoadingAnimationView style={lazyStyles.box} />
          <LoadingAnimationView style={lazyStyles.box} />
        </View>
      </View>
    </View>
  );
};

export default LazyLoading;
