import React from "react";
import { View, Button } from "react-native";
import { Language, useLanguage } from "../../core/init/lang/language_context";
import { useTheme } from "../../core/init/themes/theme_context";

const Settings = () => {
  const { setLanguage } = useLanguage();
  const { theme } = useTheme();

  return (
    <View style={{ flexDirection: "row" }}>
      <Button
        title="Tr"
        color={theme.palette.primary.main}
        onPress={() => setLanguage(Language.Turkish)}
      />
      <Button title="Eng" onPress={() => setLanguage(Language.English)} />
    </View>
  );
};
export default Settings;
