import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  ParamList,
  RouteConfig,
  StackScreenNames,
} from "./interfaces/interfaces";
import SplashScreen from "../screens/splash/splash";
import Home from "../screens/home/home";
import { useTheme } from "../core/init/themes/theme_context";

const NavigationStacks = () => {
  const Stack = createNativeStackNavigator<ParamList>();
  const { theme } = useTheme();

  const routes: RouteConfig[] = [
    {
      name: StackScreenNames.Splash,
      component: SplashScreen,
      params: { name: "splash" },
      options: {
        title: "",
        headerShown: false,
      },
    },

    {
      name: StackScreenNames.Home,
      component: Home,
      params: { name: "home" },
      options: {
        title: "Home Page",
        headerStyle: {
          backgroundColor: theme.palette.primary.main,
        },
        headerTintColor: "#fff",
        headerShown: false,
      },
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={StackScreenNames.Splash}>
        {routes.map((route) => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{
              title: route.options.title,
              headerStyle: route.options.headerStyle,
              headerTintColor: route.options.headerTintColor,
              headerShown: route.options.headerShown,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStacks;
