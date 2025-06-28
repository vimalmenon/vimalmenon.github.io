'use client';

import { Theme } from '@emotion/react';
import { createTheme, PaletteColorOptions, PaletteMode } from '@mui/material/styles';
import { AnyType } from '@types';

export const getTheme = (primaryTheme: PaletteColorOptions, mode: PaletteMode = 'light'): Theme =>
  createTheme({
    palette: {
      mode,
      primary: {
        ...primaryTheme,
        main: (primaryTheme as AnyType)[500] as string,
      },
    },
  });
