import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from 'inits/query/query_client';
import { LanguageProvider } from 'inits/lang/language_context';
import { ThemeProvider } from 'hooks/useTheme.tsx/useTheme';
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
