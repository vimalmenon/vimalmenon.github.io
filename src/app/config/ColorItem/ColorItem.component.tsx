'use client';

import { useAppContext } from '@context';
import { IColorItem } from './ColorItem';
import Box from '@mui/material/Box';

export const ColorItem: React.FC<IColorItem> = ({ color }) => {
  const { changeTheme, primaryTheme } = useAppContext();
  return (
    <Box
      sx={{ width: '100px', height: '50px', background: color }}
      onClick={() => changeTheme({ theme: color })}
    >
      {primaryTheme}
    </Box>
  );
};
