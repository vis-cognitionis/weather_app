import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView, SectionList } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import {
  IconAbout,
  IconLocation,
  IconNotifications,
  IconNotificationsOff,
  IconTerms,
} from "../../core/components/icons/custom_icons";
import { Language, useLanguage } from "../../core/init/lang/language_context";
import { useTheme } from "../../core/init/themes/theme_context";
import { t } from "../../core/init/lang/custom-hook/useTranslate";

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
const SectionContent = ({ content }: { content: string }) => {
  const { theme } = useTheme();

  const NotificationAction = () => {
    const [openNotification, setopenNotification] = useState<boolean>(true);

    return openNotification ? (
      <Pressable
        onPress={() => {
          setopenNotification(false);
        }}
      >
        <IconNotifications />
      </Pressable>
    ) : (
      <Pressable
        onPress={() => {
          setopenNotification(true);
        }}
      >
        <IconNotificationsOff />
      </Pressable>
    );
  };

  const LanguageAction = () => {
    const { language, setLanguage } = useLanguage();

    const isTr: boolean = language === Language.Turkish;

    return isTr ? (
      <Pressable
        onPress={() => {
          setLanguage(Language.English);
        }}
      >
        <Text
          style={{ color: theme.palette.secondary?.main }}
          children={Language.English.toLocaleUpperCase()}
        />
      </Pressable>
    ) : (
      <Pressable
        onPress={() => {
          setLanguage(Language.Turkish);
        }}
      >
        <Text
          style={{ color: theme.palette.secondary?.main }}
          children={Language.Turkish.toLocaleUpperCase()}
        />
      </Pressable>
    );
  };

  const GeneralAction = () => {
    switch (content) {
      case t("settings.general.location"):
        return <IconLocation />;
      case t("settings.general.notifications"):
        return <NotificationAction />;
      case t("settings.general.language"):
        return <LanguageAction />;
      case t("settings.terms"):
        return <IconTerms />;
      case t("settings.about"):
        return <IconAbout />;
      default:
        return null;
    }
  };

  return (
    <View
      style={{
        padding: 10,
        paddingLeft: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "88%",
      }}
    >
      <Text style={theme.typography.content}>{content}</Text>

      <GeneralAction />
      {content === t("settings.temperature.celsius") ? (
        <BouncyCheckbox
          style={{ width: 20 }}
          fillColor={theme.palette.success?.main}
          isChecked={true}
        />
      ) : content === t("settings.temperature.fahrenheit") ? (
        <BouncyCheckbox
          style={{ width: 20 }}
          fillColor={theme.palette.success?.main}
          isChecked={false}
        />
      ) : null}
    </View>
  );
};

const Settings = () => {
  const { theme } = useTheme();

  const settings = [
    {
      title: t("settings.general.title"),
      data: [
        { name: t("settings.general.location") },
        { name: t("settings.general.notifications") },
        { name: t("settings.general.language") },
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
          paddingTop: 20,
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
