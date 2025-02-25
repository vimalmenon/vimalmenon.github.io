'use client';

import { createTheme } from '@mui/material/styles';
import { purple, pink } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#764f06',
    },
    error: pink,
    background: {
      default: '#e3f2fd',
      paper: '#bbdefb',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});
