import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, View } from 'react-native';
import { Pressable, Text } from 'react-native';

import { IconClose, IconTerms } from '../../../../core/components/icons/custom_icons';
import { useTranslate } from '../../../../inits/lang/custom-hook/useTranslate';
import { useTheme } from '../../../../inits/themes/theme_context';

const TermsAndServices = () => {
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

  const TermsAndServices = () => {
    const { t } = useTranslate();
    return (
      <View style={{ gap: 20 }}>
        <View>
          <Text style={[theme.typography.caption, { fontWeight: 'bold' }]}>
            {t('terms&services.welcome')}
          </Text>
          <Text style={theme.typography.caption}>{t('terms&services.welcomeContent')}</Text>
        </View>
        <View>
          <Text style={[theme.typography.caption, { fontWeight: 'bold' }]}>
            {t('terms&services.termsOfUse')}
          </Text>
          <Text style={theme.typography.caption}>{t('terms&services.termsOfUseContent')}</Text>
        </View>
        <View>
          <Text style={[theme.typography.caption, { fontWeight: 'bold' }]}>
            {t('terms&services.openWeather')}
          </Text>
          <Text style={theme.typography.caption}>{t('terms&services.openWeatherContent')}</Text>
        </View>
        <View>
          <Text style={[theme.typography.caption, { fontWeight: 'bold' }]}>
            {t('terms&services.privacy')}
          </Text>
          <Text style={theme.typography.caption}>{t('terms&services.privacyContent')}</Text>
        </View>
        <View>
          <Text style={[theme.typography.caption, { fontWeight: 'bold' }]}>
            {t('terms&services.changes')}
          </Text>
          <Text style={theme.typography.caption}>{t('terms&services.changesContent')}</Text>
        </View>
      </View>
    );
  };

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
              <TermsAndServices />
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <IconTerms />
      </Pressable>
    </>
  );
};

export default TermsAndServices;
