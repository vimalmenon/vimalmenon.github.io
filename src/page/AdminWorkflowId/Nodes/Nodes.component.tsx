'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { INode } from '@types';

export const Nodes: React.FC<INode> = ({ id, name }) => {
  return (
    <Box>
      <Box>
        <Box>Id: {id}</Box>
        <Box>Name: {name}</Box>
        <Box>Type: </Box>
      </Box>
      <Box>
        <Button variant="outlined">Delete</Button>
        <Button variant="outlined">Save</Button>
      </Box>
    </Box>
  );
};
