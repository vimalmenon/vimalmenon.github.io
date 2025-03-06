'use client';
import { styled } from '@mui/material';
import { grey } from '@mui/material/colors';
import Container from '@mui/material/Container';

export const StyledBody = styled('main')(({ theme }) => {
  return {
    background: theme.palette.mode === 'dark' ? grey[900] : grey[50],
    display: 'flex',
    position: 'relative',
  };
});

export const StyledBodyContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  marginY: 1,
  minHeight: 'calc(100vh - 160px)',
});
