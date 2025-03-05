'use client';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';

export const StyledFooter = styled('footer')(({ theme }) => {
  return {
    background: theme.palette.mode === 'dark' ? theme.palette.background.paper : grey[200],
    display: 'flex',
  };
});

export const StyledSocialMedia = styled(Box)(({ theme }) => {
  return {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  };
});
