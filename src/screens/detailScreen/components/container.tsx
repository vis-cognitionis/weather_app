import React from 'react';
import { StyleSheet, Text, View, DimensionValue } from 'react-native';

import { useTheme } from 'hooks';

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    width: 'auto',
    height: 'auto',
    minWidth: 140,
    minHeight: 93,
    paddingTop: 22,
    padding: 12,
    gap: 10,
    alignSelf: 'center',
  },
});

const Container = ({
  children,
  title,
  width,
}: {
  children: React.ReactNode;
  title: string;
  width?: DimensionValue;
}) => {
  const { theme } = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.palette.secondary?.light,
          width: width,
        },
      ]}
    >
      <Text style={theme.typography.title2}> {title} </Text>
      {children}
    </View>
  );
};

export default Container;
