import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react';

import AppBar from 'screens/components/app-bar/app_bar';
import Landing from 'screens/landing/landing';
import mainStore from 'store/mainStore';

import { ParamList, StackScreenNames } from './types';
import { TabNavigation } from './tabNavigation';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator<ParamList>();

  const renderScreen = () => {
    if (mainStore.navigateLanding) {
      return <Stack.Screen name={StackScreenNames.Landing} component={Landing} options={{}} />;
    }

    return (
      <Stack.Screen
        name={StackScreenNames.Outlet}
        component={TabNavigation}
        options={{
          header: () => <AppBar />,
        }}
      />
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          mainStore.navigateLanding ? StackScreenNames.Landing : StackScreenNames.Outlet
        }
      >
        {renderScreen()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default observer(RootNavigation);
