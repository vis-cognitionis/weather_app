import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { queryClient } from 'inits/query/query_client';
import { LanguageProvider } from 'hooks/useTranslate/languageContext';
import { ThemeProvider } from 'hooks';
import { Props } from './types';

export const Providers = ({ children }: Props) => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};
