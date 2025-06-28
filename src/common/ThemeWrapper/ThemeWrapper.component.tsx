'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { useAppContext } from '@context';
import { getTheme } from '@data';
import { IReactChildren } from '@types';

export const ThemeWrapper: React.FC<IReactChildren> = ({ children }) => {
  const { mode, primaryTheme } = useAppContext();
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={getTheme(primaryTheme, mode)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
