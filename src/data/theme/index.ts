'use client';

import { createTheme, PaletteMode } from '@mui/material/styles';
import { PaletteColorOptions } from '@mui/material/styles';
import { Theme } from '@emotion/react';

export const getTheme = (mode: PaletteMode = 'light', primaryTheme: PaletteColorOptions): Theme => {
  return createTheme({
    palette: {
      mode,
      primary: {
        ...primaryTheme,
        main: primaryTheme[500 as any] as string,
      },
    },
  });
};
