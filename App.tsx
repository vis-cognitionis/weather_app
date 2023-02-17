import React from "react";
import { LanguageProvider } from "./src/core/init/lang/language_context";
import { ThemeProvider } from "./src/core/init/themes/theme_context";
import NavigationStacks from "./src/navigation/navigation_stacks";

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
