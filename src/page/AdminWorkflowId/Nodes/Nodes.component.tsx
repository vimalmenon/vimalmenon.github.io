'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { INodes } from './Nodes';

export const Nodes: React.FC<INodes> = ({ id, name, type }) => {
  return (
    <Box>
      <Box>
        <Box>Id: {id}</Box>
        <Box>Name: {name}</Box>
        <Box>Type: {type}</Box>
      </Box>
      <Box>
        <Button variant="outlined">Delete</Button>
        <Button variant="outlined">Save</Button>
      </Box>
    </Box>
  );
};
