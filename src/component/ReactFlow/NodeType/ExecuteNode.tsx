'use client';

import Box from '@mui/material/Box';
import { Handle, Position } from '@xyflow/react';
import { Icon } from '@component';
import { Icons } from '@data';
import { INodeType } from './NodeType';

export const ExecuteNode: React.FC<INodeType> = ({ data }) => (
  <Box
    className="text-updater-node"
    sx={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px' }}
  >
    <Box>{data.label}</Box>
    <Icon toolTip="Execute" icon={<Icons.Play />} />
    <Handle type="target" position={Position.Top} />
    <Handle type="source" position={Position.Bottom} />
  </Box>
);
