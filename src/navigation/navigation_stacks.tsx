import React, { useEffect, useState } from "react";
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

const NavigationStacks = () => {
  const Stack = createNativeStackNavigator<ParamList>();

  const routes: RouteConfig[] = [
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
        header: () => <AppBar />,
      },
    },
  ];

  const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      {
        <Stack.Navigator
          initialRouteName={StackScreenNames.Landing}
          children={
            showSplashScreen ? (
              <Stack.Screen
                name={StackScreenNames.Splash}
                component={SplashScreen}
                options={{ headerShown: false }}
              />
            ) : (
              routes.map((route) => {
                return (
                  <Stack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={route.options}
                  />
                );
              })
            )
          }
        />
      }
    </NavigationContainer>
  );
};

export default NavigationStacks;
