import { teal } from '@mui/material/colors';
import MuiLink from '@mui/material/Link';
import NextLink from 'next/link';
import React from 'react';

export const Logo: React.FC = () => {
  return (
    <MuiLink
      component={NextLink}
      href={'/'}
      underline="none"
      sx={{
        alignItems: 'center',
        color: teal[500],
        display: 'flex',
        fontSize: '1.5em',
        fontWeight: 'bold',
      }}
    >
      Vimal Menon
    </MuiLink>
  );
};
