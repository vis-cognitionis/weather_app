import React from "react";
import { LanguageProvider } from "./core/init/lang/language_context";
import { ThemeProvider } from "./core/init/themes/theme_context";
import NavigationStacks from "./navigation/navigation_stacks";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <NavigationStacks />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
