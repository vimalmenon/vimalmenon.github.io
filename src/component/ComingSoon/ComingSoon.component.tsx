import React from 'react';

import Box from '@mui/material/Box';

import { IComingSoon } from './ComingSoon';

export const ComingSoon: React.FC<IComingSoon> = ({ page }) => (
  <Box>{page} Will Be Coming Soon</Box>
);
