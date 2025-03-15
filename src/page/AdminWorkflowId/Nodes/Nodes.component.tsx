'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { INodes } from './Nodes';

export const Nodes: React.FC<INodes> = () => {
  return (
    <Box>
      <Box>
        <Button variant="outlined">Save</Button>
      </Box>
    </Box>
  );
};
