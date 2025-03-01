'use client';

import { createTheme, PaletteMode } from '@mui/material/styles';
import { Theme } from '@emotion/react';

export const getTheme = (mode: PaletteMode = 'light', primaryTheme: string): Theme => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: primaryTheme,
      },
    },
  });
};
