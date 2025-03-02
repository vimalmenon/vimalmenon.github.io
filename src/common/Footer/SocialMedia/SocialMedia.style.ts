'use client';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const SocialMediaBox = styled(Box)(({ theme }) => {
  return {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  };
});
