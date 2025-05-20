import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react';

import AppBar from '../screens/view/common/components/app-bar/app_bar';
import Landing from '../screens/view/landing/landing';
import mainStore from '../screens/view-model/main_store';
import OutletTabs from './components/outlet_tabs';
import { ParamList, StackScreenNames } from './interfaces/interfaces';
import { SplashScreen } from 'screens/splashScreen/splashScreen';

const NavigationStacks = () => {
  const Stack = createNativeStackNavigator<ParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={StackScreenNames.Splash}
        children={
          // mainStore.showSplashScreen ? (
          <Stack.Screen
            name={StackScreenNames.Splash}
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
          // ) : mainStore.navigateLanding ? (
          //   <Stack.Screen
          //     name={StackScreenNames.Landing}
          //     component={Landing}
          //     options={{
          //       headerShown: false,
          //     }}
          //   />
          // ) : (
          //   <Stack.Screen
          //     name={StackScreenNames.Outlet}
          //     component={OutletTabs}
          //     options={{
          //       // eslint-disable-next-line react/no-unstable-nested-components
          //   header: () => <AppBar />,
          //     }}
          //   />
          // )
        }
      />
    </NavigationContainer>
  );
};

export default observer(NavigationStacks);
