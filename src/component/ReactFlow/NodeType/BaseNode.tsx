'use client';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Handle, Position } from '@xyflow/react';
import { IReactChildren } from '@types';

export const BaseNode: React.FC<IReactChildren> = ({ children }) => (
  <Box
    className="text-updater-node"
    component={Paper}
    minWidth={'400px'}
    sx={{ borderRadius: '5px', padding: '10px' }}
  >
    {children}
    <Handle type="target" position={Position.Top} />
    <Handle type="source" position={Position.Bottom} />
  </Box>
);
