import React, { createContext, useState, useContext, useEffect } from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ThemeProps from "./interface/interfaces";
import darkTheme from "./styles/dark";
import lightTheme from "./styles/light";

interface ThemeContext {
  theme: ThemeProps;
  setTheme: (theme: ThemeProps) => void;
}

const ThemeContext = createContext<ThemeContext>({
  theme: lightTheme,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeProps>(lightTheme);

  useEffect(() => {
    (async () => {
      const themeFromStorage = await AsyncStorage.getItem("userTheme");

      if (themeFromStorage !== null && themeFromStorage === "light") {
        setTheme(lightTheme);
      } else if (themeFromStorage === "dark") {
        setTheme(darkTheme);
      } else {
        const colorScheme = Appearance.getColorScheme();
        if (colorScheme === "dark") {
          setTheme(darkTheme);
        } else {
          setTheme(lightTheme);
        }
      }
    })();
  }, []);

  const handleSetTheme = async (theme: ThemeProps) => {
    try {
      setTheme(theme);
      const setUserTheme = theme === lightTheme ? "light" : "dark";
      await AsyncStorage.setItem("userTheme", setUserTheme);
    } catch (e) {
      console.log("Error setting theme to storage:", e);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
