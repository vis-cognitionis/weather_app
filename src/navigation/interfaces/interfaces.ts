import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
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
  Splash: Record<string, any>;
  Home: Record<string, any>;
  Landing: Record<string, any>;
  Map: Record<string, any>;
  Settings: Record<string, any>;
  Outlet: Record<string, any>;
  // Details: { itemId: number };
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
