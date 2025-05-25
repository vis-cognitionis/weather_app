import { GestureResponderEvent, FlexStyle, ViewStyle } from 'react-native';

export type Props = {
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  children?: React.ReactNode;
  customStyles?: FlexStyle | ViewStyle;
  isFocused?: boolean;
  disabled?: boolean;
};
