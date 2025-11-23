import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StackScreenNames } from 'navigation/types';

interface MainStore {
    // State
    firstDefaultCity: string;
    defaultCity: string;
    city: string;
    inputValue: string;
    currentTab: string;
    previousTab: string;
    openNotification: boolean;
    showSplashScreen: boolean;
    navigateLanding: boolean;
    hideStatusBar: boolean;
    weatherUnit: string;
    timeOfDay: string;
    currentDate: Date;
    is404Err: boolean;
    inputCityValue: string;
    showNotification: boolean;
    networkError: boolean;

    // Actions
    setCurrentTab: (currentTab: string) => void;
    setPreviousTab: (previousTab: string) => void;
    setOpenNotification: (open: boolean) => void;
    setShowSplashScreen: (show: boolean) => void;
    setNavigateLanding: (navigate: boolean) => void;
    setHideStatusBar: (hide: boolean) => Promise<void>;
    setWeatherUnit: (unit: string) => void;
    setCity: (city: string) => void;
    setTimeOfDay: (timeOfDay: string) => void;
    setCurrentDate: (date: Date) => void;
    setInputValue: (value: string) => void;
    setDefaultCity: (defaultCity: string) => Promise<void>;
    setIs404Err: (err: boolean) => void;
    setInputCityValue: (value: string) => void;
    setShowNotification: (show: boolean) => void;
    setNetworkError: (network: boolean) => void;
    initializeDefaultCity: () => Promise<void>;
}

export const useMainStore = create<MainStore>((set, get) => ({
    // Initial state
    firstDefaultCity: 'Istanbul',
    defaultCity: '',
    city: '',
    inputValue: '',
    currentTab: '',
    previousTab: StackScreenNames.Home,
    openNotification: true,
    showSplashScreen: true,
    navigateLanding: false,
    hideStatusBar: false,
    weatherUnit: 'metric',
    timeOfDay: '',
    currentDate: new Date(),
    is404Err: false,
    inputCityValue: '',
    showNotification: false,
    networkError: false,

    // Actions
    setCurrentTab: (currentTab) => set({ currentTab }),
    setPreviousTab: (previousTab) => set({ previousTab }),
    setOpenNotification: (open) => set({ openNotification: open }),
    setShowSplashScreen: (show) => set({ showSplashScreen: show }),
    setNavigateLanding: (navigate) => set({ navigateLanding: navigate }),
    setHideStatusBar: async (hide) => {
        set({ hideStatusBar: hide });
        try {
            await AsyncStorage.setItem('hideStatusBar', JSON.stringify(hide));
        } catch (e) {
            console.error('Error saving hideStatusBar to AsyncStorage', e);
        }
    },
    setWeatherUnit: (unit) => set({ weatherUnit: unit }),
    setCity: (city) => set({ city }),
    setTimeOfDay: (timeOfDay) => set({ timeOfDay }),
    setCurrentDate: (date) => set({ currentDate: date }),
    setInputValue: (value) => set({ inputValue: value }),
    setDefaultCity: async (defaultCity) => {
        set({
            defaultCity,
            city: defaultCity,
            inputValue: defaultCity,
            inputCityValue: defaultCity,
        });
        await AsyncStorage.setItem('defaultCity', defaultCity);
    },
    setIs404Err: (err) => set({ is404Err: err }),
    setInputCityValue: (value) => set({ inputCityValue: value }),
    setShowNotification: (show) => set({ showNotification: show }),
    setNetworkError: (network) => set({ networkError: network }),
    initializeDefaultCity: async () => {
        const defaultCity = await AsyncStorage.getItem('defaultCity');
        const finalCity = defaultCity || get().firstDefaultCity;
        set({
            defaultCity: finalCity,
            city: finalCity,
            inputValue: finalCity,
            inputCityValue: finalCity,
        });
    },
}));

useMainStore.getState().initializeDefaultCity();
