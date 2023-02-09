import React from "react";
import { SafeAreaView, Button } from "react-native";

import { Language, useLanguage } from "../../core/init/lang/language_context";
import { useTheme } from "../../core/init/themes/theme_context";

const Settings = () => {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  const isEng: boolean = language === Language.English;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Button
        color={isEng ? "black" : "red"}
        title="Tr"
        onPress={() => setLanguage(Language.Turkish)}
      />
      <Button
        color={isEng ? "red" : "black"}
        title="Eng"
        onPress={() => setLanguage(Language.English)}
      />
    </SafeAreaView>
  );
};
export default Settings;
