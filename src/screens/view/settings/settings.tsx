import React from "react";
import { SafeAreaView, SectionList } from "react-native";
import { observer } from "mobx-react";

import mainStore from "src/screens/view-model/main_store";
import SectionTitle from "./components/section_title";
import NetworkError from "../common/components/network-error/network_error";
import SectionContent from "./components/section_content";
import NotificationInfo from "./components/notification_info";
import { useTheme } from "src/core/init/themes/theme_context";
import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";

const Settings = () => {
  const { theme } = useTheme();
  const { t } = useTranslate();

  const settings = [
    {
      title: t("settings.general.title"),
      data: [
        { name: t("settings.general.defaultCity") },
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
      {mainStore.networkError ? (
        <NetworkError />
      ) : (
        <>
          {mainStore.showNotification && <NotificationInfo />}
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
        </>
      )}
    </SafeAreaView>
  );
};
export default observer(Settings);
