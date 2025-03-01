'use client';

import { Typography } from '@mui/material';
import { IColorItem } from './ColorItem';
import Box from '@mui/material/Box';

export const ColorItem: React.FC<IColorItem> = ({ color, name, onClick }) => {
  return (
    <Box sx={{ width: '50px', height: '150px', background: color }} onClick={onClick}>
      <Typography sx={{ writingMode: 'vertical-rl', padding: 1 }}>{name}</Typography>
    </Box>
  );
};
