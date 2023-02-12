import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react";

import { ParamList, StackScreenNames } from "./interfaces/interfaces";
import mainStore from "../screens/view-model/main_store";
import SplashScreen from "../screens/view/splash/splash";
import OutletTabs from "./components/outlet_tabs";
import Landing from "../screens//view/landing/landing";
import AppBar from "../screens/view/common/components/app-bar/app_bar";

const NavigationStacks = () => {
  const Stack = createNativeStackNavigator<ParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={StackScreenNames.Splash}
        children={
          mainStore.showSplashScreen ? (
            <Stack.Screen
              name={StackScreenNames.Splash}
              component={SplashScreen}
              options={{
                headerShown: false,
              }}
            />
          ) : mainStore.navigateLanding ? (
            <Stack.Screen
              name={StackScreenNames.Landing}
              component={Landing}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <Stack.Screen
              name={StackScreenNames.Outlet}
              component={OutletTabs}
              options={{
                header: () => <AppBar />,
              }}
            />
          )
        }
      />
    </NavigationContainer>
  );
};

export default observer(NavigationStacks);
