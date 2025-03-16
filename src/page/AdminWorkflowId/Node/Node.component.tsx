'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { INode } from './Node';
import { NodeForm } from './NodeForm';
import { ViewNode } from './ViewNode';

export const Node: React.FC<INode> = ({ data, deleteNode }) => {
  return (
    <Box>
      <Box>
        <Box>Id: {data.id}</Box>
        <Box>Name: {data.name}</Box>
        <Box>Type: </Box>
      </Box>
      <ViewNode />
      <NodeForm data={data} />
      <Box>
        <Button variant="outlined" onClick={deleteNode}>
          Delete
        </Button>
      </Box>
    </Box>
  );
};
