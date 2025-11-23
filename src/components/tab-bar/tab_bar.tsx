import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { SafeAreaView, View } from 'react-native';

import { useMainStore } from 'store/useMainStore';
import ActionButton from 'components/buttons/actionButton';
import { IconDetail, IconHomeWeather, IconSettings } from 'components/icons/customIcons';
import { StackScreenNames } from 'navigation/types';
import { useTheme } from 'hooks';

import { useWeatherDatas } from '../../services/queries/useWeatherDatas';

const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const { theme } = useTheme();
  const { isLoading } = useWeatherDatas();
  const setPreviousTab = useMainStore((state) => state.setPreviousTab);
  const setCurrentTab = useMainStore((state) => state.setCurrentTab);

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.palette.background.default,
        height: '12%',
        position: 'relative',
      }}
    >
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          gap: 15,
          top: 14,
          position: 'absolute',
          alignSelf: 'center',
        }}
      >
        {state.routes.map((route, index) => {
          const isFocused: boolean = state.index === index;

          const stroke: string = isFocused
            ? theme.palette.primary.light!
            : theme.palette.primary.dark!;

          const TabIcon = () => {
            return route.name === 'Detail' ? (
              <IconDetail stroke={stroke} />
            ) : route.name === 'Home' ? (
              <IconHomeWeather stroke={stroke} />
            ) : route.name === 'Settings' ? (
              <IconSettings stroke={stroke} />
            ) : null;
          };

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }

            if (route.name === StackScreenNames.Home) {
              setPreviousTab(StackScreenNames.Home);
            }

            if (route.name === StackScreenNames.Detail) {
              setPreviousTab(StackScreenNames.Detail);
            }

            setCurrentTab(route.name);
          };

          return (
            <ActionButton
              disabled={isLoading}
              isFocused={isFocused}
              key={index}
              children={<TabIcon />}
              customStyles={{
                flex: 1,
                width: 20,
                maxWidth: 70,
                backgroundColor: isFocused ? theme.palette.primary.dark : 'transparent',
              }}
              onPress={onPress}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default TabBar;
