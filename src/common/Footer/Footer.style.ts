'use client';

import { styled } from '@mui/material';
import { grey } from '@mui/material/colors';

export const StyledFooter = styled('footer')(({ theme }) => {
  return {
    background: theme.palette.mode === 'dark' ? grey[900] : grey[100],
    display: 'flex',
  };
});
