import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export enum StackScreenNames {
  Home = "Home",
  Splash = "Splash",
  //Details = "Details",
}

export type ParamList = {
  Splash: { name: string; path: string };
  Home: undefined;
  // Details: { itemId: number };
};

export interface ScreenNavigationProps {
  navigation: StackNavigationProp<ParamList>;
  route: RouteProp<ParamList>;
}

export interface RouteConfig {
  name: StackScreenNames;
  component: ({ navigation, route }: ScreenNavigationProps) => JSX.Element;
  params: Record<string, any>;
  options: NativeStackNavigationOptions;
}
