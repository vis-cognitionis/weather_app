import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Modal,
  View,
  Text,
  TextInput,
} from "react-native";

import { IconClose, IconEdit } from "src/core/components/icons/custom_icons";
import { useTheme } from "src/core/init/themes/theme_context";

const NotificationAction = () => {
  const { theme } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalView: {
      margin: 20,
      backgroundColor: theme.palette.background.default,
      borderRadius: 20,
      padding: 35,
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
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      borderColor: "red",
      borderWidth: 1,
      width: 120,
    },
  });

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={{ alignSelf: "flex-end" }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <IconClose />
            </Pressable>
            <TextInput style={styles.modalText}></TextInput>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Set As Default</Text>
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

export default NotificationAction;
