import { makeAutoObservable } from "mobx";
import { StackScreenNames } from "src/navigation/interfaces/interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";

class MainStore {
  defaultCity: string = "";
  city: string = this.defaultCity;
  inputValue: string = this.city;
  currentTab: string = "";
  previousTab: string = StackScreenNames.Home;
  openNotification: boolean = true;
  showSplashScreen: boolean = true;
  navigateLanding: boolean = false;
  hideStatusBar: boolean = false;
  weatherUnit: string = "metric";
  timeOfDay: string = "";
  currentDate: Date = new Date();

  constructor() {
    makeAutoObservable(this);
    AsyncStorage.getItem("defaultCity").then((defaultCity) => {
      this.defaultCity = defaultCity || "Istanbul";
      this.city = this.defaultCity;
      this.inputValue = this.city;
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

  setHideStatusBar = (hide: boolean) => {
    this.hideStatusBar = hide;
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
    await AsyncStorage.setItem("defaultCity", defaultCity);
  };
}

const mainStore = new MainStore();

export default mainStore;
