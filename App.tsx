import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import NavigationStacks from "./src/navigation/navigation_stacks";
import { LanguageProvider } from "./src/core/init/lang/language_context";
import { ThemeProvider } from "./src/core/init/themes/theme_context";
import { queryClient } from "src/core/init/query/query_client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <ThemeProvider>
          <NavigationStacks />
        </ThemeProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
