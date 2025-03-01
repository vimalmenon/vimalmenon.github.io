'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { IReactChildren } from '@types';
import { getTheme } from '@data';
import { useAppContext } from '@context';

export const ThemeWrapper: React.FC<IReactChildren> = ({ children }) => {
  const { theme, primaryTheme } = useAppContext();
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={getTheme(theme, primaryTheme)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
