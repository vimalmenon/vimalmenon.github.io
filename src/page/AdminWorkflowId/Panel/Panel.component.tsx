'use client';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Icons } from '@data';
import { IPanel } from './Panel';

export const Panel: React.FC<IPanel> = ({ onCreateNode }) => {
  return (
    <Box>
      <IconButton onClick={onCreateNode}>
        <Icons.Add />
      </IconButton>
      <IconButton>
        <Icons.Play />
      </IconButton>
    </Box>
  );
};
