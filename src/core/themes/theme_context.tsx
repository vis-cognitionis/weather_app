import React, { createContext, useState, useContext, useEffect } from "react";
import { Appearance } from "react-native";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

interface ThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContext>({
  theme: Theme.Light,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(
    Appearance.getColorScheme() === "dark" ? Theme.Dark : Theme.Light
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(
      ({ colorScheme }: { colorScheme: any }) => {
        setTheme(colorScheme === "dark" ? Theme.Dark : Theme.Light);
      }
    );
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
