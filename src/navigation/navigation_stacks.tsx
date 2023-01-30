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

const routes: RouteConfig[] = [
  {
    name: StackScreenNames.Splash,
    component: SplashScreen,
    params: { name: "splash" },
    options: {
      title: "Splash Screen",
    },
  },

  {
    name: StackScreenNames.Home,
    component: Home,
    params: { name: "home" },
    options: {
      title: "Home Page",
    },
  },
];

const NavigationStacks = () => {
  const Stack = createNativeStackNavigator<ParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={StackScreenNames.Splash}>
        {routes.map((route) => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{ title: route.options.title }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStacks;
