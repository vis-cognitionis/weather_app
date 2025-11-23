import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppBar from 'components/app-bar/app_bar';
import Landing from 'screens/onboardngScreen/onboardingScreen';
import { useMainStore } from 'store/useMainStore';

import { ParamList, StackScreenNames } from './types';
import { TabNavigation } from './tabNavigation';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator<ParamList>();
  const navigateLanding = useMainStore((state) => state.navigateLanding);

  const renderScreen = () => {
    if (navigateLanding) {
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
          navigateLanding ? StackScreenNames.Landing : StackScreenNames.Outlet
        }
      >
        {renderScreen()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
