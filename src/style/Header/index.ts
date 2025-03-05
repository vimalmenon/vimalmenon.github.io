'use client';

import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';

export const StyledMobileHeader = styled(Toolbar)(({ theme }) => {
  return {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 !important',
  };
});

export const StyledDesktopHeader = styled(Toolbar)(({ theme }) => {
  return {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 !important',
  };
});

export const StyledAppBar = styled(AppBar)(() => {
  return {
    background: 'transparent',
    position: 'relative',
    zIndex: 3000,
  };
});

export const MobileDrawer = styled(MuiDrawer)(({ theme }) => {
  return {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    position: 'relative',
    zIndex: 4000,
  };
});
