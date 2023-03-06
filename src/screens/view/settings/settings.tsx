import React, { useState } from "react";
import { Animated, SafeAreaView, SectionList } from "react-native";

import SectionTitle from "./components/section_title";
import SectionContent from "./components/section_content";
import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";
import { useTheme } from "src/core/init/themes/theme_context";
import { Notify } from "src/core/components/notification/notify";

const Settings = () => {
  const { theme } = useTheme();
  const { t } = useTranslate();

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

  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [animation] = useState(new Animated.Value(0));
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.palette.background.default,
      }}
    >
      {Notify.notifySuccess({
        animation: animation,
        message: t("notification.tempUnit"),
        showNotification: showNotification,
      })}
      <SectionList
        style={{
          paddingLeft: 60,
        }}
        sections={settings}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <SectionContent
            content={item.name}
            animation={animation}
            setShowNotification={setShowNotification}
          />
        )}
        renderSectionHeader={({ section }) => (
          <SectionTitle title={section.title} />
        )}
      />
    </SafeAreaView>
  );
};
export default Settings;
