import React, { useState } from "react";
import { StatusBar } from "react-native";
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
  const { language, setLanguage } = useLanguage();
  const [openNotification, setopenNotification] = useState<boolean>(true);

  const NotificationAction = () => {
    return (
      <Pressable
        onPress={() => {
          setopenNotification(!openNotification);
        }}
        children={
          openNotification ? <IconNotifications /> : <IconNotificationsOff />
        }
      />
    );
  };

  const LanguageAction = () => {
    const isTr: boolean = language === Language.Turkish;

    return (
      <Pressable
        onPress={() => {
          isTr ? setLanguage(Language.English) : setLanguage(Language.Turkish);
        }}
        children={
          isTr ? (
            <Text
              style={{ color: theme.palette.secondary?.main }}
              children={Language.English.toLocaleUpperCase()}
            />
          ) : (
            <Text
              style={{ color: theme.palette.secondary?.main }}
              children={Language.Turkish.toLocaleUpperCase()}
            />
          )
        }
      />
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
  const [hidden, setHidden] = useState<boolean>(false);

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
      {content === t("settings.general.statusBar") && (
        <View>
          <StatusBar animated={true} hidden={hidden} />
          <BouncyCheckbox
            isChecked={!hidden}
            fillColor={theme.palette.success?.main}
            style={{ width: 20 }}
            onPress={() => {
              setHidden(!hidden);
            }}
          ></BouncyCheckbox>
        </View>
      )}
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
          paddingTop: 20,
        }}
        sections={settings}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <SectionContent content={item.name} />}
        renderSectionHeader={({ section }) => (
          <SectionTitle title={section.title} />
        )}
      />
      {/* <StatusBarSettings /> */}
    </SafeAreaView>
  );
};
export default Settings;
