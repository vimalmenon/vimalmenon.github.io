'use client';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const StyledAdminNavigation = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  display: 'flex',
  flex: '0 0 200px',
  flexDirection: 'column',
  margin: theme.spacing(2, 0),
}));
