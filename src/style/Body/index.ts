'use client';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Container from '@mui/material/Container';

export const StyledMain = styled('main')(({ theme }) => {
  return {
    background: theme.palette.mode === 'dark' ? grey[900] : grey[50],
    display: 'flex',
    flex: '1 1 100%',
    position: 'relative',
  };
});

export const StyledMainContainer = styled(Container)({
  display: 'flex',
  flex: '0 0 100%',
  flexDirection: 'column',
  marginY: 1,
});

export const StyledBox = styled(Box)({
  display: 'flex',
  flex: '1 1 100%',
  flexDirection: 'column',
  height: '100vh',
});
