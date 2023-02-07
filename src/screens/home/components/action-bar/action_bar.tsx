import React from "react";
import { StyleSheet, View } from "react-native";

import ActionButton from "../../../../core/components/buttons/button";
import ThemeProps from "../../../../core/init/themes/interface/interfaces";
import { ScreenNavigationProps } from "../../../../navigation/interfaces/interfaces";
import { useTheme } from "../../../../core/init/themes/theme_context";
import { IconHomeWeather } from "../../../../core/components/icons/custom_icons";

const Styles = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    container: {
      display: "flex",
      alignSelf: "center",
      flexDirection: "row",
      gap: 15,
      bottom: 36,
      position: "absolute",
      width: 222,
      height: 48,
    },
  });
};

const ActionBar = ({ navigation }: ScreenNavigationProps) => {
  const { theme } = useTheme();
  const styles = Styles({ theme });

  const ActionButtons = [
    {
      icon: (
        <View>
          <IconHomeWeather />
        </View>
      ),
      onPress: () => {},
    },
    { icon: <View></View>, onPress: () => {} },
    { icon: <View></View>, onPress: () => {} },
  ];

  return (
    <View style={styles.container}>
      {ActionButtons.map((button, index) => {
        return (
          <ActionButton
            key={index}
            children={button.icon}
            onPress={button.onPress}
          />
        );
      })}
    </View>
  );
};
export default ActionBar;
