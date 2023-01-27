import React from "react";
import BeforeApp from "./App_before";
import { LanguageProvider } from "./core/init/lang/language_context";
import { ThemeProvider } from "./core/init/themes/theme_context";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <BeforeApp />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
