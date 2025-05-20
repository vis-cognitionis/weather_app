import { StyleSheet, View, Text, Pressable, Linking, Platform } from 'react-native';
import RNRestart from 'react-native-restart';

import { IconNoNetwork } from '../../../../../core/components/icons/custom_icons';
import { useTranslate } from '../../../../../inits/lang/custom-hook/useTranslate';
import { useTheme } from '../../../../../inits/themes/theme_context';

const NetworkError = () => {
  const { theme } = useTheme();
  const { t } = useTranslate();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      gap: 20,
      alignSelf: 'center',
    },
    icon: {
      marginBottom: 16,
    },
    message: {
      textAlign: 'center',
    },
    refreshButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.dark,
      paddingHorizontal: 20,
      paddingVertical: 6,
      borderRadius: 16,
    },
    refreshText: {
      color: theme.palette.primary.light,
    },
  });

  const openWifiSettings = () => {
    let url = '';
    if (Platform.OS === 'android') {
      url = 'intent://wifi';
    } else if (Platform.OS === 'ios') {
      url = 'App-Prefs:root=WIFI';
    }
    Linking.openURL(url).catch((err) => console.error('Could not open Wi-Fi settings!', err));
  };

  return (
    <View style={styles.container}>
      <IconNoNetwork />
      <Text style={[theme.typography.content, styles.message]}>{t('error.noNetwork')}</Text>
      <Pressable
        onPress={() => {
          RNRestart.restart();
          openWifiSettings();
        }}
      >
        <View style={styles.refreshButton}>
          <Text style={styles.refreshText}>{t('error.refresh')}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default NetworkError;
