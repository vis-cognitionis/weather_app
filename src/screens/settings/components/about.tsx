import { useState } from 'react';
import { Modal, ScrollView, StyleSheet, View } from 'react-native';
import { Pressable, Text } from 'react-native';

import { IconClose, IconAbout } from 'components/icons/customIcons';
import { useTheme } from 'hooks/useTheme.tsx/useTheme';
import { useTranslate } from 'inits/lang/custom-hook/useTranslate';

const About = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: theme.palette.background.default,
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      gap: 16,

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
  });

  const [modalVisible, setModalVisible] = useState(false);
  const { t } = useTranslate();

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
              style={{ alignSelf: 'flex-end' }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <IconClose />
            </Pressable>
            <ScrollView>
              <Text style={theme.typography.caption}>{t('about.content')}</Text>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <IconAbout />
      </Pressable>
    </>
  );
};

export default About;
