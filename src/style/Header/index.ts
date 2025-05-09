'use client';

import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';

export const StyledMobileHeader = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 !important',
}));

export const StyledDesktopHeader = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 !important',
}));

export const StyledAppBar = styled(AppBar)(() => ({
  background: 'transparent',
  display: 'flex',
  flex: 0,
  position: 'relative',
  zIndex: 3000,
}));

export const StyledMobileDrawer = styled(MuiDrawer)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  position: 'relative',
  zIndex: 4000,
}));
