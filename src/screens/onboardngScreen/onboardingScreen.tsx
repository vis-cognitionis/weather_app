import { Text, Image, SafeAreaView } from 'react-native';
import { observer } from 'mobx-react';

import ActionButton from '../../components/buttons/actionButton';
import { useTranslate, useTheme } from 'hooks';
import NetworkError from 'components/network-error/network_error';
import mainStore from 'store/mainStore';

import { Styles } from './styles';

const OnboardngScreen = () => {
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
            customStyles={styles.actionButton}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default observer(OnboardngScreen);
