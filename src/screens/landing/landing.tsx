import { StyleSheet, Text, Image, Platform, SafeAreaView } from 'react-native';
import { observer } from 'mobx-react';

import ActionButton from '../../components/buttons/actionButton';
import mainStore from 'store/mainStore';
import { useTranslate } from '../../inits/lang/custom-hook/useTranslate';
import { windowHeight } from '../../constants/Dimesions';
import { ThemeProps } from 'hooks/useTheme.tsx/types';
import { useTheme } from 'hooks/useTheme.tsx/useTheme';
import NetworkError from 'screens/components/network-error/network_error';

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
          <Image style={styles.image} source={require('assets/images/landingPage.png')} />
          <Text style={[theme.typography.h1, { width: '70%', textAlign: 'center' }]}>
            {t('landing.content')}
          </Text>
          <ActionButton
            onPress={() => {
              mainStore.setNavigateLanding(false);
            }}
            children={<Text style={theme.typography.button}>{t('landing.button')}</Text>}
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
