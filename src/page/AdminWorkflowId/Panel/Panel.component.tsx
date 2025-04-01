'use client';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Icons } from '@data';

export const Panel: React.FC = () => {
  return (
    <Box>
      <IconButton>
        <Icons.Add />
      </IconButton>
    </Box>
  );
};
