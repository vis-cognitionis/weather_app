import React from "react";
import { observer } from "mobx-react";
import { View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import mainStore from "src/screens/view-model/main_store";
import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";
import { useTheme } from "src/core/init/themes/theme_context";

const StatusBarSettings = ({ content }: { content: string }) => {
  const { theme } = useTheme();
  const { t } = useTranslate();

  return content === t("settings.general.statusBar") ? (
    <View>
      <BouncyCheckbox
        isChecked={!mainStore.hideStatusBar}
        fillColor={theme.palette.success?.main}
        style={{ width: 25 }}
        onPress={() => {
          mainStore.setHideStatusBar(!mainStore.hideStatusBar);
        }}
      />
    </View>
  ) : null;
};

export default observer(StatusBarSettings);
