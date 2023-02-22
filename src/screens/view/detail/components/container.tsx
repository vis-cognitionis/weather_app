import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useTheme } from "src/core/init/themes/theme_context";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEF0F2",
    borderRadius: 16,
    width: "auto",
    height: "auto",
    minWidth: 162,
    minHeight: 93,
    paddingTop: 22,
    padding: 12,
    gap: 10,
  },
});

const Container = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={theme.typography.title2}> {title} </Text>
      {children}
    </View>
  );
};

export default Container;
