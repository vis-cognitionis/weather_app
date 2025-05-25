import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from 'screens/mainScreen/mainScreen';
import DetailScreen from 'screens/detailScreen/detailScreen';
import SettingsScreen from 'screens/settingsScreen/settingsScreen';
import TabBar from 'components/tab-bar/tab_bar';

import { ParamList, StackScreenNames, TabConfig } from './types';

export const TabNavigation = () => {
  const Tab = createBottomTabNavigator<ParamList>();

  const tabRoutes: TabConfig[] = [
    {
      name: StackScreenNames.Home,
      component: MainScreen,
      options: {
        headerShown: false,
      },
    },
    {
      name: StackScreenNames.Detail,
      component: DetailScreen,
      options: {
        headerShown: false,
      },
    },
    {
      name: StackScreenNames.Settings,
      component: SettingsScreen,
      options: {
        headerShown: false,
      },
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName={StackScreenNames.Home}
      tabBar={(props) => <TabBar {...props} />}
      children={tabRoutes.map((tab) => {
        return (
          <Tab.Screen
            key={tab.name}
            options={tab.options}
            component={tab.component}
            name={tab.name}
          />
        );
      })}
    />
  );
};
