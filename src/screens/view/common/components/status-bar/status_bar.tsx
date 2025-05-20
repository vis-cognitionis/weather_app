import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

import mainStore from '../../../../../screens/view-model/main_store';

const StatusBarControl = () => {
  useEffect(() => {
    (async () => {
      try {
        const hideStatusBar = await AsyncStorage.getItem('hideStatusBar');
        if (hideStatusBar !== null) {
          action(() => {
            mainStore.hideStatusBar = JSON.parse(hideStatusBar);
          })();
        }
      } catch (e) {
        console.error('Error loading hideStatusBar from AsyncStorage', e);
      }
    })();
  }, []);
  return <StatusBar animated={true} hidden={mainStore.hideStatusBar} />;
};
export default observer(StatusBarControl);
