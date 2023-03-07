import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Modal,
  View,
  Text,
  TextInput,
} from "react-native";
import { observer } from "mobx-react";

import { IconClose, IconEdit } from "src/core/components/icons/custom_icons";
import { useTranslate } from "src/core/init/lang/custom-hook/useTranslate";
import { useTheme } from "src/core/init/themes/theme_context";
import mainStore from "src/screens/view-model/main_store";

const NotificationAction = () => {
  const { theme } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const { t } = useTranslate();

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalView: {
      width: "55%",
      height: "18%",
      backgroundColor: theme.palette.background.default,
      borderRadius: 20,
      padding: 15,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      width: 120,
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      backgroundColor: theme.palette.primary.dark,
    },

    modalInput: {
      marginBottom: 15,
      borderColor: theme.palette.primary.dark,
      borderWidth: 1,
      width: 120,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 32,
      color: theme.palette.primary.dark,
    },
  });

  return (
    <>
      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={{ alignSelf: "flex-end" }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <IconClose />
            </Pressable>
            <TextInput
              placeholderTextColor={theme.palette.text?.disabled}
              placeholder={mainStore.city}
              style={styles.modalInput}
            />
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text
                style={[
                  theme.typography.caption,
                  { color: theme.palette.primary.light },
                ]}
              >
                {t("defaultCityButton")}
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={{
          padding: 2,
        }}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
        children={<IconEdit />}
      />
    </>
  );
};

export default observer(NotificationAction);
