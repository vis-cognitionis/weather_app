import { makeAutoObservable } from 'mobx';
import { StackScreenNames } from '../../navigation/interfaces/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';

class MainStore {
  firstDefaultCity: string = 'Istanbul';
  defaultCity: string = '';
  city: string = this.defaultCity;
  inputValue: string = this.city;
  currentTab: string = '';
  previousTab: string = StackScreenNames.Home;
  openNotification: boolean = true;
  showSplashScreen: boolean = true;
  navigateLanding: boolean = false;
  hideStatusBar: boolean = false;
  weatherUnit: string = 'metric';
  timeOfDay: string = '';
  currentDate: Date = new Date();
  is404Err: boolean = false;
  inputCityValue: string = this.defaultCity;
  showNotification: boolean = false;
  networkError: boolean = false;

  constructor() {
    makeAutoObservable(this);
    AsyncStorage.getItem('defaultCity').then((defaultCity) => {
      this.defaultCity = defaultCity || this.firstDefaultCity;
      this.city = this.defaultCity;
      this.inputValue = this.city;
      this.inputCityValue = this.defaultCity;
    });
  }

  setCurrentTab = (currentTab: string) => {
    this.currentTab = currentTab;
  };

  setPreviousTab = (previousTab: string) => {
    this.previousTab = previousTab;
  };

  setOpenNotification = (open: boolean) => {
    this.openNotification = open;
  };

  setShowSplashScreen = (show: boolean) => {
    this.showSplashScreen = show;
  };

  setNavigateLanding = (navigate: boolean) => {
    this.navigateLanding = navigate;
  };

  setHideStatusBar = async (hide: boolean) => {
    this.hideStatusBar = hide;
    try {
      await AsyncStorage.setItem('hideStatusBar', JSON.stringify(hide));
    } catch (e) {
      console.error('Error saving hideStatusBar to AsyncStorage', e);
    }
  };

  setWeatherUnit = (unit: string) => {
    this.weatherUnit = unit;
  };

  setCity = (city: string) => {
    this.city = city;
  };

  setTimeOfDay(timeOfDay: string) {
    this.timeOfDay = timeOfDay;
  }

  setCurrentDate(date: Date) {
    this.currentDate = date;
  }

  setInputValue(value: string) {
    this.inputValue = value;
  }

  setDefaultCity = async (defaultCity: string) => {
    this.defaultCity = defaultCity;
    this.city = defaultCity;
    this.inputValue = defaultCity;
    this.inputCityValue = this.defaultCity;
    await AsyncStorage.setItem('defaultCity', defaultCity);
  };

  setIs404Err(err: boolean) {
    this.is404Err = err;
  }

  setInputCityValue(value: string) {
    this.inputCityValue = value;
  }

  setShowNotification(show: boolean) {
    this.showNotification = show;
  }

  setNetworkError(network: boolean) {
    this.networkError = network;
  }
}

const mainStore = new MainStore();

export default mainStore;
