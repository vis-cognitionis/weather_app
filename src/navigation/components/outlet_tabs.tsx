import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  ParamList,
  TabConfig,
  StackScreenNames,
} from '../interfaces/interfaces';
import Home from '../../screens/view/home/home';
import Detail from '../../screens/view/detail/detail';
import Settings from '../../screens/view/settings/settings';
import TabBar from '../../screens/view/common/components/tab-bar/tab_bar';

const OutletTabs = () => {
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

export default OutletTabs;
