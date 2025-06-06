import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Modal, View, Text, TextInput } from 'react-native';
import { observer } from 'mobx-react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IconClose, IconEdit } from 'components/icons/customIcons';
import { useTranslate, useTheme } from 'hooks';
import mainStore from 'store/mainStore';

const DefaultCity = () => {
  const { theme } = useTheme();
  const { t } = useTranslate();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
      width: '55%',
      backgroundColor: theme.palette.background.default,
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingTop: 8,
      paddingBottom: 20,
      alignItems: 'center',
      shadowColor: '#000',
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
      alignItems: 'center',
    },

    modalInput: {
      marginBottom: 15,
      borderColor: theme.palette.primary.dark,
      borderWidth: 1,
      width: 120,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 32,
    },
  });

  const [editable, setEditable] = useState<boolean>(false);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (editable) {
      inputRef.current?.focus();
    }
  }, [editable]);

  const handleSetDefaultCity = async () => {
    setModalVisible(!modalVisible);
    await AsyncStorage.setItem('defaultCity', mainStore.inputCityValue);
    mainStore.setDefaultCity(mainStore.inputCityValue);
    mainStore.setCity(mainStore.inputCityValue);
    setEditable(false);
  };

  const handleCloseModal = () => {
    setModalVisible(!modalVisible);
    setEditable(false);
    inputRef.current?.blur();
  };
  return (
    <>
      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={{ alignSelf: 'flex-end' }} onPress={handleCloseModal}>
              <IconClose />
            </Pressable>
            <TextInput
              ref={inputRef}
              autoCorrect={false}
              value={mainStore.inputCityValue}
              onPressIn={() => setEditable(true)}
              onChangeText={(text) => mainStore.setInputCityValue(text)}
              onSubmitEditing={handleSetDefaultCity}
              style={[
                styles.modalInput,
                {
                  color: editable ? theme.palette.primary.dark : theme.palette.text?.disabled,
                },
              ]}
            />
            <Pressable
              disabled={!editable}
              style={[
                styles.button,
                {
                  backgroundColor: !editable
                    ? theme.palette.secondary?.main
                    : theme.palette.primary.dark,
                },
              ]}
              onPress={handleSetDefaultCity}
            >
              <Text style={[theme.typography.caption, { color: theme.palette.primary.light }]}>
                {t('defaultCityButton')}
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

export default observer(DefaultCity);
