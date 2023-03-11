import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { observer } from "mobx-react";

import mainStore from "src/screens/view-model/main_store";
import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";
import { useTheme } from "src/core/init/themes/theme_context";

const StatusBarSettings = ({ content }: { content: string }) => {
  const { theme } = useTheme();
  const { t } = useTranslate();

  return content === t("settings.general.statusBar") ? (
    <BouncyCheckbox
      isChecked={!mainStore.hideStatusBar}
      fillColor={theme.palette.success?.main}
      style={{ width: 25 }}
      onPress={() => {
        mainStore.setHideStatusBar(!mainStore.hideStatusBar);
      }}
    />
  ) : null;
};

export default observer(StatusBarSettings);
