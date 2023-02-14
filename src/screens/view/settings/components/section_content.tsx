import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, Text } from "react-native";
import { observer } from "mobx-react";

import {
  IconLocation,
  IconTerms,
  IconAbout,
} from "../../../../core/components/icons/custom_icons";
import LanguageAction from "./language_actions";
import NotificationAction from "./notification_action";
import StatusbarSettings from "./statusbar_settings";
import { useTheme } from "../../../../core/init/themes/theme_context";
import { t } from "../../../../core/init/lang/custom-hook/useTranslate";
import mainStore from "../../../view-model/main_store";

const SectionContent = ({ content }: { content: string }) => {
  const { theme } = useTheme();

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
  }: {
    isChecked: boolean;
    onPress: () => void;
  }) => {
    return (
      <BouncyCheckbox
        role="radio"
        style={{ width: 25 }}
        fillColor={theme.palette.success?.main}
        isChecked={isChecked}
        onPress={onPress}
      />
    );
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
      <StatusbarSettings content={content} />
      {content === t("settings.temperature.celsius") ? (
        <CustomCheckbox
          isChecked={mainStore.weatherUnit === "metric"}
          onPress={() => {
            mainStore.setWeatherUnit("metric");
          }}
        />
      ) : content === t("settings.temperature.fahrenheit") ? (
        <CustomCheckbox
          isChecked={mainStore.weatherUnit === "imperial"}
          onPress={() => {
            mainStore.setWeatherUnit("imperial");
          }}
        />
      ) : null}
    </View>
  );
};
export default observer(SectionContent);
