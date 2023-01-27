import React, { createContext, useState, useContext, useEffect } from "react";
import { Appearance } from "react-native";
import ThemeProps from "./interface/theme_interface";
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
  const [theme, setTheme] = useState<ThemeProps>(
    Appearance.getColorScheme() === "dark" ? darkTheme : lightTheme
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(
      ({ colorScheme }: { colorScheme: any }) => {
        setTheme(colorScheme === "dark" ? darkTheme : lightTheme);
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
