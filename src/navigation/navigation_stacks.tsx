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
import SplashScreen from "../screens/view/splash/splash";
import Settings from "../screens/view/settings/settings";
import Landing from "../screens//view/landing/landing";
import AppBar from "../screens/view/common/components/app-bar/app_bar";
import TabBar from "../screens/view/common/components/tab-bar/tab_bar";
import Home from "../screens/view/home/home";
import Map from "../screens/view/map/map";

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
    // <PreviousTabProvider>
    //   <ActiveTabProvider>
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
    // </ActiveTabProvider>
    //</PreviousTabProvider>
  );
};

export default NavigationStacks;
