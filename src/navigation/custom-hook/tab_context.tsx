import React, { createContext, useContext, useState } from "react";

interface TabContext {
  activeTabName: string;
  setActiveTabName: (activeTabName: string) => void;
}

const ActiveTabContext = createContext<TabContext>({
  activeTabName: "",
  setActiveTabName: () => {},
});

export const ActiveTabProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeTabName, setActiveTabName] = useState<string>("");

  return (
    <ActiveTabContext.Provider
      children={children}
      value={{ activeTabName, setActiveTabName }}
    />
  );
};

export const useActiveTab = () => useContext(ActiveTabContext);

interface TabPreviousContext {
  previousTabName: string;
  setPreviousTabName: (activeTabName: string) => void;
}

const PreviousTabContext = createContext<TabPreviousContext>({
  previousTabName: "",
  setPreviousTabName: () => {},
});

export const PreviousTabProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [previousTabName, setPreviousTabName] = useState<string>("Home");

  return (
    <PreviousTabContext.Provider
      children={children}
      value={{ previousTabName, setPreviousTabName }}
    />
  );
};

export const usePreviousTab = () => useContext(PreviousTabContext);
