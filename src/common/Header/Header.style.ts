'use client';

import { styled } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

export const MobileHeader = styled(Toolbar)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  };
});

export const DesktopHeader = styled(Toolbar)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  };
});
