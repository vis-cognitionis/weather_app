import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'screens/home/home';
import Detail from 'screens/detail/detail';
import Settings from 'screens/settings/settings';
import TabBar from 'screens/components/tab-bar/tab_bar';

import { ParamList, StackScreenNames, TabConfig } from './types';

export const TabNavigation = () => {
  const Tab = createBottomTabNavigator<ParamList>();

  const tabRoutes: TabConfig[] = [
    {
      name: StackScreenNames.Home,
      component: Home,
      options: {
        headerShown: false,
      },
    },
    {
      name: StackScreenNames.Detail,
      component: Detail,
      options: {
        headerShown: false,
      },
    },
    {
      name: StackScreenNames.Settings,
      component: Settings,
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
