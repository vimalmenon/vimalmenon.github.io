'use client';
import { styled } from '@mui/material';

export const StyledPage = styled('section')(({ theme }) => {
  return {
    display: 'flex',
    flex: '1 1 100%',
    marginTop: theme.spacing(2),
  };
});
