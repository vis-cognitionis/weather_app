import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from 'inits/query/query_client';
import { LanguageProvider } from 'hooks/useTranslate/languageContext';
import { ThemeProvider } from 'hooks/useTheme/useTheme';
import { Props } from './types';

export const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};
