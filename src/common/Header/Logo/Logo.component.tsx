import React from 'react';

import { teal } from '@mui/material/colors';
import MuiLink from '@mui/material/Link';

import NextLink from 'next/link';

export const Logo: React.FC = () => (
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
