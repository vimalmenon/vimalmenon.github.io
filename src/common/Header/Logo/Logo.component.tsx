import React from 'react';
import MuiLink from '@mui/material/Link';
import NextLink from 'next/link';
import { teal } from '@mui/material/colors';

export const Logo: React.FC = () => {
  return (
    <MuiLink
      component={NextLink}
      href={'/'}
      underline="none"
      sx={{
        paddingX: 1,
        display: 'flex',
        fontSize: '1.5em',
        color: teal[500],
        alignItems: 'center',
        fontWeight: 'bold',
      }}
    >
      Vimal Menon
    </MuiLink>
  );
};
