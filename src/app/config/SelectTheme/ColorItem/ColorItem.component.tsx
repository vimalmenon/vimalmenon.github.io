'use client';

import { Typography } from '@mui/material';
import { IColorItem } from './ColorItem';
import Box from '@mui/material/Box';
import { Icons } from '@data';

const { Check } = Icons;

export const ColorItem: React.FC<IColorItem> = ({
  color,
  name,
  onClick,
  selectedColor,
  main,
  dark,
  light,
}) => {
  return (
    <Box sx={{ width: '50px', height: '150px', background: color }} onClick={onClick}>
      <Typography
        component="div"
        sx={{
          writingMode: 'vertical-rl',
          padding: 1,
          display: 'flex',
          justifyContent: 'space-between',
          height: '100%',
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
};
