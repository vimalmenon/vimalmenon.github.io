'use client';

import { styled } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

export const MobileHeader = styled(Toolbar)(({ theme }) => {
  return {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 !important',
  };
});

export const DesktopHeader = styled(Toolbar)(({ theme }) => {
  return {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 !important',
  };
});
