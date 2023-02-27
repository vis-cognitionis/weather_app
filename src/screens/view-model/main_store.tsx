import { makeAutoObservable } from "mobx";
import { StackScreenNames } from "src/navigation/interfaces/interfaces";

class MainStore {
  currentTab: string = "";
  previousTab: string = StackScreenNames.Home;
  openNotification: boolean = true;
  showSplashScreen: boolean = true;
  navigateLanding: boolean = false;
  hideStatusBar: boolean = false;
  weatherUnit: string = "metric";
  city = "Istanbul";
  isError: boolean = false;
  timeOfDay: string = "";
  currentDate: Date = new Date();

  constructor() {
    makeAutoObservable(this);
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

  setIsError = (error: boolean) => {
    this.isError = error;
  };

  setTimeOfDay(timeOfDay: string) {
    this.timeOfDay = timeOfDay;
  }

  setCurrentDate(date: Date) {
    this.currentDate = date;
  }
}

const mainStore = new MainStore();

export default mainStore;
