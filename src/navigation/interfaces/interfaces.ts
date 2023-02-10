import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export enum StackScreenNames {
  Home = "Home",
  Splash = "Splash",
  Landing = "Landing",
  Map = "Map",
  Settings = "Settings",
  Outlet = "Outlet",
}

export type ParamList = {
  Splash: any;
  Home: any;
  Landing: any;
  Map: any;
  Settings: any;
  Outlet: any;
  // Details: { itemId: number };
};

export interface ScreenNavigationProps {
  navigation: StackNavigationProp<ParamList>;
  route?: RouteProp<ParamList>;
}

export interface RouteConfig {
  name: StackScreenNames;
  component: ({ navigation, route }: ScreenNavigationProps) => JSX.Element;
  params: Record<string, any>;
  options: NativeStackNavigationOptions;
}

export interface TabConfig {
  name: StackScreenNames;
  component: ({ navigation, route }: ScreenNavigationProps) => JSX.Element;
  options: BottomTabNavigationOptions;
}
