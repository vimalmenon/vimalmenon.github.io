'use client';

import { Typography } from '@mui/material';
import { IColorItem } from './ColorItem';
import Box from '@mui/material/Box';
import { Icons } from '@data';

const { Check } = Icons;

export const ColorItem: React.FC<IColorItem> = ({ color, name, onClick, selectedColor }) => {
  return (
    <Box sx={{ width: '50px', height: '150px', background: color }} onClick={onClick}>
      <Typography sx={{ writingMode: 'vertical-rl', padding: 1 }}>
        {name} {selectedColor === color ? <Check /> : null}{' '}
      </Typography>
    </Box>
  );
};
