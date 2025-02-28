'use client';

import { createTheme, PaletteMode } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import { Theme } from '@emotion/react';

export const getTheme = (mode: PaletteMode = 'light'): Theme => {
  return createTheme({
    palette: {
      mode,
      primary: teal,
    },
  });
};
