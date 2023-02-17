import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export enum StackScreenNames {
  Home = "Home",
  Splash = "Splash",
  Landing = "Landing",
  Detail = "Detail",
  Settings = "Settings",
  Outlet = "Outlet",
}

export type ParamList = {
  Splash: Record<string, any>;
  Home: Record<string, any>;
  Landing: Record<string, any>;
  Detail: Record<string, any>;
  Settings: Record<string, any>;
  Outlet: Record<string, any>;
};

export interface ScreenNavigationProps {
  navigation: StackNavigationProp<ParamList>;
  route?: RouteProp<ParamList>;
}

export interface TabConfig {
  name: StackScreenNames;
  component: ({ navigation, route }: ScreenNavigationProps) => JSX.Element;
  options: BottomTabNavigationOptions;
}
