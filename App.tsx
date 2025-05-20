import { StatusBar } from 'react-native';
import { QueryClientProvider } from '@tanstack/react-query';

import { LanguageProvider } from 'inits/lang/language_context';
import { queryClient } from 'inits/query/query_client';
import NavigationStacks from 'navigation/navigation_stacks';
import { ThemeProvider } from 'inits/themes/theme_context';

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <ThemeProvider>
            <NavigationStacks />
          </ThemeProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
