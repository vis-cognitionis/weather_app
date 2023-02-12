import React from "react";
import { SafeAreaView, SectionList } from "react-native";

import SectionTitle from "./components/section_title";
import SectionContent from "./components/section_content";
import { useTheme } from "../../../core/init/themes/theme_context";
import { t } from "../../../core/init/lang/custom-hook/useTranslate";

const Settings = () => {
  const { theme } = useTheme();

  const settings = [
    {
      title: t("settings.general.title"),
      data: [
        { name: t("settings.general.location") },
        { name: t("settings.general.notifications") },
        { name: t("settings.general.language") },
        { name: t("settings.general.statusBar") },
      ],
    },
    {
      title: t("settings.temperature.title"),
      data: [
        { name: t("settings.temperature.celsius") },
        { name: t("settings.temperature.fahrenheit") },
      ],
    },
    {
      title: "",
      data: [{ name: t("settings.terms") }, { name: t("settings.about") }],
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <SectionList
        style={{
          paddingLeft: 60,
        }}
        sections={settings}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <SectionContent content={item.name} />}
        renderSectionHeader={({ section }) => (
          <SectionTitle title={section.title} />
        )}
      />
    </SafeAreaView>
  );
};
export default Settings;
