import React from "react";
import { makeAutoObservable } from "mobx";
import { StackScreenNames } from "../../navigation/interfaces/interfaces";

class MainStore {
  currentTab: string = "";
  previousTab: string = StackScreenNames.Home;
  openNotification: boolean = true;

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
}

export const mainStore = new MainStore();
