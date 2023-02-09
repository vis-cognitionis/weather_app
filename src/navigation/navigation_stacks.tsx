import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  ParamList,
  RouteConfig,
  TabConfig,
  StackScreenNames,
} from "./interfaces/interfaces";
import SplashScreen from "../screens/splash/splash";
import Landing from "../screens/landing/landing";
import AppBar from "../screens/home/components/app-bar/app_bar";
import Home from "../screens/home/home";
import Map from "../screens/map/map";
import TabBar from "../screens/home/components/tab-bar/tab_bar";
import Settings from "../screens/settings/settings";

const OutletTabs = () => {
  const Tab = createBottomTabNavigator<ParamList>();

  const tabRoutes: TabConfig[] = [
    {
      name: StackScreenNames.Home,
      component: Home,
      options: {
        header: () => <AppBar />,
      },
    },
    {
      name: StackScreenNames.Map,
      component: Map,
      options: {
        header: () => <AppBar />,
      },
    },
    {
      name: StackScreenNames.Settings,
      component: Settings,
      options: {
        header: () => <AppBar />,
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

const NavigationStacks = () => {
  const Stack = createNativeStackNavigator<ParamList>();

  const routes: RouteConfig[] = [
    {
      name: StackScreenNames.Splash,
      component: SplashScreen,
      params: { name: "Splash" },
      options: {
        title: "",
        headerShown: false,
      },
    },

    {
      name: StackScreenNames.Landing,
      component: Landing,
      params: { name: "Landing" },
      options: {
        headerShown: false,
      },
    },

    {
      name: StackScreenNames.Outlet,
      component: OutletTabs,
      params: { name: "Outlet" },
      options: {
        headerShown: false,
      },
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={StackScreenNames.Splash}
        children={routes.map((route) => {
          return (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
              options={route.options}
            />
          );
        })}
      />
    </NavigationContainer>
  );
};

export default NavigationStacks;
