'use client';

import { createTheme, PaletteMode } from '@mui/material/styles';
import { PaletteColorOptions } from '@mui/material/styles';
import { Theme } from '@emotion/react';
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
