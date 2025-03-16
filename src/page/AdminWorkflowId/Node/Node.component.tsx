'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { INode } from './Node';

export const Node: React.FC<INode> = ({ data }) => {
  return (
    <Box>
      <Box>
        <Box>Id: {data.id}</Box>
        <Box>Name: {data.name}</Box>
        <Box>Type: </Box>
      </Box>
      <Box>
        <Button variant="outlined">Save</Button>
        <Button variant="outlined">Delete</Button>
      </Box>
    </Box>
  );
};
