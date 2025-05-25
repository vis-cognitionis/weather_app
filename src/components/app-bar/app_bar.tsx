import { useEffect, useRef, useState } from 'react';
import { Platform, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';

import {
  IconBack,
  IconDarkTheme,
  IconEdit,
  IconLightTheme,
  IconSearch,
} from 'components/icons/customIcons';
import { StackScreenNames } from 'navigation/types';
import { windowHeight } from 'constants/Dimesions';
import { useTheme } from 'hooks';
import mainStore from 'store/mainStore';
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

const AppBarStyles = ({ theme, editable }: { theme: ThemeProps; editable: boolean }) => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.palette.background.default,
      paddingLeft: 30,
      paddingRight: 20,
      paddingTop: windowHeight >= 852 ? 0 : 5,
      paddingBottom: -10,
      height: windowHeight >= 852 ? 110 : 'auto',
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

  const [editable, setEditable] = useState<boolean>(false);
  const inputRef = useRef<TextInput>(null);
  const styles = AppBarStyles({ theme, editable });

  useEffect(() => {
    if (editable) {
      inputRef.current?.focus();
    }
  }, [editable]);

  const handleSearch = () => {
    if (mainStore.inputValue.trim().length !== 0) {
      mainStore.setCity(mainStore.inputValue);
      setEditable(false);
      inputRef.current?.blur();
    }
  };

  const handleEditPress = () => {
    setEditable(true);
  };

  const handleOnBlur = () => {
    if (mainStore.inputValue.trim().length === 0) {
      setEditable(false);
      mainStore.setInputValue(mainStore.city);
    }
  };

  return (
    <>
      {mainStore.currentTab !== StackScreenNames.Settings.toString() ? (
        <View style={styles.locationContainer}>
          <TextInput
            ref={inputRef}
            autoCorrect={false}
            defaultValue={mainStore.city}
            value={mainStore.inputValue}
            onPressIn={handleEditPress}
            onChangeText={(text) => mainStore.setInputValue(text)}
            onSubmitEditing={() => {
              if (mainStore.inputValue.trim().length !== 0) {
                handleSearch();
              }
            }}
            onBlur={handleOnBlur}
            style={[styles.input, theme.typography.caption]}
          />
          {editable ? (
            <Pressable
              onPress={() => {
                mainStore.inputValue.length !== 0 && handleSearch();
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
            navigation.navigate(mainStore.previousTab as never);
            mainStore.setCurrentTab(mainStore.previousTab);
          }}
        />
      )}
      <ThemeSwitch />
    </>
  );
};
export default observer(AppBar);
