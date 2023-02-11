import React from "react";
import { View, Text } from "react-native";

import { useTheme } from "../../../../core/init/themes/theme_context";
import { t } from "../../../../core/init/lang/custom-hook/useTranslate";

const SectionTitle = ({ title }: { title: string }) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        padding: 20,
        marginTop: title === t("settings.temperature.title") ? 20 : 0,
      }}
    >
      <Text style={theme.typography.title}>{title}</Text>
    </View>
  );
};

export default SectionTitle;
