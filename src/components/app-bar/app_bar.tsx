import { useEffect, useRef, useState } from 'react';
import { Platform, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  IconBack,
  IconDarkTheme,
  IconEdit,
  IconLightTheme,
  IconSearch,
} from 'components/icons/customIcons';
import { StackScreenNames } from 'navigation/types';
import { useTheme } from 'hooks';
import { useMainStore } from 'store/useMainStore';
import { ThemeProps } from 'hooks/useTheme/types';
import lightTheme from 'hooks/useTheme/styles/light';
import darkTheme from 'hooks/useTheme/styles/dark';

import { useWeatherDatas } from '../../services/queries/useWeatherDatas';

const SwitchStyles = ({ theme }: { theme: ThemeProps }) => {
  const value: boolean = theme === lightTheme;

  return StyleSheet.create({
    button: {
      justifyContent: 'center',
      paddingLeft: 9,
      width: 38,
      height: 38,
      borderRadius: 16,
      backgroundColor: theme.palette.common?.white,
    },

    shadow: {
      ...Platform.select({
        ios: {
          shadowColor: '#424242',
          shadowOpacity: value ? 0.1 : 1,
          shadowRadius: 7,
          shadowOffset: { width: 0, height: 6 },
        },
        android: {
          elevation: 10,
          shadowColor: '#000000',
          shadowOpacity: value ? 0.6 : 0.25,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 6 },
        },
      }),
    },
  });
};

const AppBarStyles = ({
  theme,
  editable,
  topPadding,
}: {
  theme: ThemeProps;
  editable: boolean;
  topPadding: number;
}) => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.palette.background.default,
      paddingLeft: 30,
      paddingRight: 20,
      paddingTop: topPadding + 10,
      paddingBottom: 10,
    },

    input: {
      alignSelf: 'flex-end',
      paddingBottom: 1,
      width: 'auto',
      textDecorationLine: editable ? 'underline' : 'none',
      textTransform: 'capitalize',
    },

    locationContainer: {
      flexDirection: 'row',
      height: 32,
      alignItems: 'center',
      gap: 16,
      justifyContent: 'space-between',
    },

    backButton: {
      width: 32,
      height: 32,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const value: boolean = theme === lightTheme;
  const styles = SwitchStyles({ theme });

  return (
    <Pressable
      style={[styles.button, styles.shadow]}
      onPress={() => setTheme(value ? darkTheme : lightTheme)}
    >
      {value ? <IconDarkTheme /> : <IconLightTheme />}
    </Pressable>
  );
};

const AppBar = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { isLoading } = useWeatherDatas();
  const insets = useSafeAreaInsets();

  const inputValue = useMainStore((state) => state.inputValue);
  const city = useMainStore((state) => state.city);
  const currentTab = useMainStore((state) => state.currentTab);
  const previousTab = useMainStore((state) => state.previousTab);
  const setCity = useMainStore((state) => state.setCity);
  const setInputValue = useMainStore((state) => state.setInputValue);
  const setCurrentTab = useMainStore((state) => state.setCurrentTab);

  const [editable, setEditable] = useState<boolean>(false);
  const inputRef = useRef<TextInput>(null);
  const styles = AppBarStyles({ theme, editable, topPadding: insets.top });

  useEffect(() => {
    if (editable) {
      inputRef.current?.focus();
    }
  }, [editable]);

  const handleSearch = () => {
    if (inputValue.trim().length !== 0) {
      setCity(inputValue);
      setEditable(false);
      inputRef.current?.blur();
    }
  };

  const handleEditPress = () => {
    setEditable(true);
  };

  const handleOnBlur = () => {
    if (inputValue.trim().length === 0) {
      setEditable(false);
      setInputValue(city);
    }
  };

  return (
    <View style={styles.container}>
      {currentTab !== StackScreenNames.Settings.toString() ? (
        <View style={styles.locationContainer}>
          <TextInput
            ref={inputRef}
            autoCorrect={false}
            defaultValue={city}
            value={inputValue}
            onPressIn={handleEditPress}
            onChangeText={(text) => setInputValue(text)}
            onSubmitEditing={() => {
              if (inputValue.trim().length !== 0) {
                handleSearch();
              }
            }}
            onBlur={handleOnBlur}
            style={[styles.input, theme.typography.caption]}
          />
          {editable ? (
            <Pressable
              onPress={() => {
                inputValue.length !== 0 && handleSearch();
              }}
            >
              <IconSearch />
            </Pressable>
          ) : (
            <Pressable onPress={handleEditPress}>
              <IconEdit />
            </Pressable>
          )}
        </View>
      ) : (
        <Pressable
          disabled={isLoading}
          style={styles.backButton}
          children={<IconBack />}
          onPress={() => {
            console.log('Navigating back to:', previousTab);
            try {
              (navigation as any).navigate(StackScreenNames.Outlet, {
                screen: previousTab,
              });
              setCurrentTab(previousTab);
            } catch (error) {
              console.error('Navigation error:', error);
            }
          }}
        />
      )}
      <ThemeSwitch />
    </View>
  );
};
export default AppBar;
