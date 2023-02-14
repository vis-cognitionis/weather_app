import React from "react";
import { Pressable } from "react-native";
import { observer } from "mobx-react";

import {
  IconNotifications,
  IconNotificationsOff,
} from "../../../../core/components/icons/custom_icons";
import mainStore from "../../../view-model/main_store";

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
