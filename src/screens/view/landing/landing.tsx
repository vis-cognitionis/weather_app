import React from 'react';
import { StyleSheet, Text, Image, Platform, SafeAreaView } from 'react-native';
import { observer } from 'mobx-react';

import ActionButton from '../../../core/components/buttons/action_button';
import NetworkError from '../common/components/network-error/network_error';
import ThemeProps from '../../../core/init/themes/interface/interfaces';
import mainStore from '../../../screens/view-model/main_store';
import { useTranslate } from '../../../core/init/lang/custom-hook/useTranslate';
import { windowHeight } from '../common/constants/constants';
import { useTheme } from '../../../core/init/themes/theme_context';

const Styles = ({ theme }: { theme: ThemeProps }) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'column',
      gap: Platform.OS === 'android' ? 50 : windowHeight * 0.05,
      alignItems: 'center',
      backgroundColor: theme.palette.background.default,
      height: '100%',
    },
    image: {
      marginTop: windowHeight <= 736 ? '5%' : '15%',
    },
  });
};

const Landing = () => {
  const { theme } = useTheme();
  const styles = Styles({ theme });
  const { t } = useTranslate();

  return (
    <SafeAreaView style={styles.container}>
      {mainStore.networkError ? (
        <NetworkError />
      ) : (
        <>
          <Image
            style={styles.image}
            source={require('../../../images/landing_page.png')}
          />
          <Text
            style={[theme.typography.h1, { width: '70%', textAlign: 'center' }]}
          >
            {t('landing.content')}
          </Text>
          {/* <GradientButton
        text={t("landing.button")}
        onPress={() => {
          mainStore.setNavigateLanding(false);
        }}
      /> */}
          <ActionButton
            onPress={() => {
              mainStore.setNavigateLanding(false);
            }}
            children={
              <Text style={theme.typography.button}>{t('landing.button')}</Text>
            }
            customStyles={{
              paddingHorizontal: 70,
              paddingVertical: 10,
              gap: 10,
              width: 291,
              height: 62,
            }}
          />
        </>
      )}
    </SafeAreaView>
  );
};
export default observer(Landing);
