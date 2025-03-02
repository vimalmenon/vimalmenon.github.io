'use client';

import { styled } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';

export const MobileDrawer = styled(MuiDrawer)(({ theme }) => {
  return {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  };
});
