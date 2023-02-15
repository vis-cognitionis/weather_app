import React from "react";
import { Pressable } from "react-native";
import { observer } from "mobx-react";

import mainStore from "src/screens/view-model/main_store";
import {
  IconNotifications,
  IconNotificationsOff,
} from "src/core/components/icons/custom_icons";

const NotificationAction = () => {
  return (
    <Pressable
      style={{
        padding: 5,
      }}
      onPress={() => {
        mainStore.setOpenNotification(!mainStore.openNotification);
      }}
      children={
        mainStore.openNotification ? (
          <IconNotifications />
        ) : (
          <IconNotificationsOff />
        )
      }
    />
  );
};

export default observer(NotificationAction);
