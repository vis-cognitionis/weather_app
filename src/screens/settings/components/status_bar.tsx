import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

// const STYLES = ["default", "dark-content", "light-content"] as const;

const StatusBarSettings = () => {
  //   const { theme } = useTheme();
  //   const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
  //     STYLES[0]
  //   );

  //   const changeStatusBarStyle = () => {
  //     const styleId = STYLES.indexOf(statusBarStyle) + 1;
  //     if (styleId === STYLES.length || theme === lightTheme) {
  //       setStatusBarStyle(STYLES[1]);
  //     } else {
  //       setStatusBarStyle(STYLES[styleId]);
  //     }
  //   };

  //   useEffect(() => {
  //     changeStatusBarStyle();
  //   }, [theme]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        //barStyle={statusBarStyle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ECF0F1",
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: "center",
    marginBottom: 8,
  },
});

export default StatusBarSettings;
