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
    <ActiveTabContext.Provider value={{ activeTabName, setActiveTabName }}>
      {children}
    </ActiveTabContext.Provider>
  );
};

export const useActiveTab = () => useContext(ActiveTabContext);
