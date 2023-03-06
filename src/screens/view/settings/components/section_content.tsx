import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, Text, Animated } from "react-native";
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
import { handleNotificationPress } from "src/core/components/notification/notify";

const SectionContent = ({
  content,
  animation,
  setShowNotification,
}: {
  content: string;
  animation: Animated.Value;
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
            handleNotificationPress({
              animation: animation,
              setShowNotification: setShowNotification,
            });
          }}
        />
      ) : content === t("settings.temperature.fahrenheit") ? (
        <CustomCheckbox
          isChecked={mainStore.weatherUnit === "imperial"}
          onPress={() => {
            mainStore.setWeatherUnit("imperial");
            handleNotificationPress({
              animation: animation,
              setShowNotification: setShowNotification,
            });
          }}
        />
      ) : null}
    </View>
  );
};
export default observer(SectionContent);
