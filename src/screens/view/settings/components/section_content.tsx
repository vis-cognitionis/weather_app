import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, Text, StyleSheet } from "react-native";
import { observer } from "mobx-react";

import mainStore from "src/screens/view-model/main_store";
import LanguageAction from "./language_actions";
import StatusbarSettings from "./statusbar_settings";
import NotificationAction from "./notification_action";
import {
  IconLocation,
  IconTerms,
  IconAbout,
} from "src/core/components/icons/custom_icons";
import { useTheme } from "src/core/init/themes/theme_context";
import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "88%",
  },
});

const SectionContent = ({ content }: { content: string }) => {
  const { theme } = useTheme();
  const { t } = useTranslate();

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

  const CustomCheckbox = ({
    isChecked,
    onPress,
    disabled,
  }: {
    isChecked: boolean;
    onPress: () => void;
    disabled: boolean;
  }) => {
    return (
      <BouncyCheckbox
        role="radio"
        style={{ width: 25 }}
        fillColor={theme.palette.success?.main}
        isChecked={isChecked}
        onPress={onPress}
        disabled={disabled}
      />
    );
  };

  return (
    <View style={styles.listContainer}>
      <Text style={theme.typography.content}>{content}</Text>
      <GeneralAction />
      <StatusbarSettings content={content} />

      {content === t("settings.temperature.celsius") ? (
        <CustomCheckbox
          isChecked={mainStore.weatherUnit === "metric"}
          onPress={() => {
            mainStore.setWeatherUnit("metric");
          }}
          disabled={mainStore.weatherUnit === "metric"}
        />
      ) : content === t("settings.temperature.fahrenheit") ? (
        <CustomCheckbox
          isChecked={mainStore.weatherUnit === "imperial"}
          onPress={() => {
            mainStore.setWeatherUnit("imperial");
          }}
          disabled={mainStore.weatherUnit === "imperial"}
        />
      ) : null}
    </View>
  );
};
export default observer(SectionContent);
