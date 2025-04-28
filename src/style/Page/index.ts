'use client';
import { styled } from '@mui/material';

export const StyledPage = styled('section')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 100%',
  flexDirection: 'column',
  marginTop: theme.spacing(2),
}));
