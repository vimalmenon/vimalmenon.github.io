'use client';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import { Icons } from '@data';

import { IColorItem } from './ColorItem';

const { Check } = Icons;

export const ColorItem: React.FC<IColorItem> = ({
  color,
  dark,
  light,
  main,
  name,
  onClick,
  selectedColor,
}) => (
  <Box sx={{ background: color, height: '150px', width: '50px' }} onClick={onClick}>
    <Typography
      component="div"
      sx={{
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between',
        padding: 1,
        writingMode: 'vertical-rl',
      }}
    >
      <span>{name}</span>{' '}
      <span>
        {selectedColor === color ? <Check /> : null}
        {main === color && main ? 'M' : null}
        {dark === color && main ? 'D' : null}
        {light === color && main ? 'L' : null}
      </span>
    </Typography>
  </Box>
);
