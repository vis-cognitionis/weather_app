import { Pressable } from 'react-native';
import { useTheme } from 'hooks/useTheme/useTheme';

import { Props } from './types';
import { Styles } from './styles';

const ActionButton = ({
  onPress,
  children,
  customStyles,
  isFocused = true,
  disabled = false,
}: Props) => {
  const { theme } = useTheme();
  const styles = Styles({ theme });

  return (
    <Pressable
      disabled={disabled}
      style={[styles.button, isFocused && styles.shadow, customStyles]}
      children={children}
      onPress={onPress}
    />
  );
};

export default ActionButton;
