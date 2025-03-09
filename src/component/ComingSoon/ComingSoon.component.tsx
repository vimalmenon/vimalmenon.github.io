import Box from '@mui/material/Box';
import React from 'react';
import { IComingSoon } from './ComingSoon';

export const ComingSoon: React.FC<IComingSoon> = ({ page }) => {
  return <Box>{page} Will Be Coming Soon</Box>;
};
