import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export enum StackScreenNames {
  Home = "Home",
  Splash = "Splash",
  Landing = "Landing",
  //Details = "Details",
}

export type ParamList = {
  Splash: any;
  Home: any;
  Landing: any;

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
