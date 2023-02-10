import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView, Button, SectionList } from "react-native";

import { Language, useLanguage } from "../../core/init/lang/language_context";
import { useTheme } from "../../core/init/themes/theme_context";
import { t } from "../../core/init/lang/custom-hook/useTranslate";

const Settings = () => {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  const isEng: boolean = language === Language.English;

  const data = [
    {
      title: t("settings.general.title"),
      data: [
        { name: t("settings.general.notifications") },
        { name: t("settings.general.location") },
        { name: t("settings.general.language") },
      ],
    },
    {
      title: t("settings.temperature.title"),
      data: [
        { name: t("settings.temperature.fahrenheit") },
        { name: t("settings.temperature.celsius") },
      ],
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* <Button
        color={isEng ? "black" : "red"}
        title="Tr"
        onPress={() => setLanguage(Language.Turkish)}
      />
      <Button
        color={isEng ? "red" : "black"}
        title="Eng"
        onPress={() => setLanguage(Language.English)}
      /> */}
      <SectionList
        sections={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={{ padding: 20 }}>
            <Text>{item.name}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={{ padding: 20, backgroundColor: "#f2f2f2" }}>
            <Text style={{ fontWeight: "bold" }}>{section.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default Settings;
