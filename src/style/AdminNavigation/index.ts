'use client';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const StyledAdminNavigation = styled(Box)(({ theme }) => {
  return {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2, 0),
    width: '100px',
  };
});
