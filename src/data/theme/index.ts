'use client';

import { Theme } from '@emotion/react';
import { createTheme, PaletteColorOptions, PaletteMode } from '@mui/material/styles';
import { AnyType } from '@types';

export const getTheme = (mode: PaletteMode = 'light', primaryTheme: PaletteColorOptions): Theme => {
  return createTheme({
    palette: {
      mode,
      primary: {
        ...primaryTheme,
        main: (primaryTheme as AnyType)[500] as string,
      },
    },
  });
};
