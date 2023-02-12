import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  ParamList,
  TabConfig,
  StackScreenNames,
} from "../interfaces/interfaces";
import Settings from "../../screens/view/settings/settings";
import TabBar from "../../screens/view/common/components/tab-bar/tab_bar";
import Home from "../../screens/view/home/home";
import Map from "../../screens/view/map/map";

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
      name: StackScreenNames.Map,
      component: Map,
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
