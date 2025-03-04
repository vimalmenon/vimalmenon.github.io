'use client';
import { styled } from '@mui/material';
import { grey } from '@mui/material/colors';

export const StyledBody = styled('main')(({ theme }) => {
  return {
    background: theme.palette.mode === 'dark' ? grey[900] : grey[50],
    display: 'flex',
    position: 'relative',
    zIndex: -10,
  };
});
