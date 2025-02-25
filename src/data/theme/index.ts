'use client';

import { createTheme } from '@mui/material/styles';
import { palette } from './palette';


export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1266,
      xl: 1440,
    },
  },
  palette: palette(),
});
