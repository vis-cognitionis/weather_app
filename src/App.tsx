import React from "react";
import { LanguageProvider } from "./core/init/lang/language_context";
import { ThemeProvider } from "./core/init/themes/theme_context";
import { ActiveTabProvider } from "./navigation/custom-hook/tab_context";
import NavigationStacks from "./navigation/navigation_stacks";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ActiveTabProvider>
          <NavigationStacks />
        </ActiveTabProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
