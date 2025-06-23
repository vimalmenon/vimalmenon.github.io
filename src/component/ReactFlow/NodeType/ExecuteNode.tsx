'use client';
import Box from '@mui/material/Box';
import { Handle, Position } from '@xyflow/react';
import { Icon } from '@component';
import { Icons } from '@data';

export const ExecuteNode: React.FC = () => (
  <Box className="text-updater-node">
    <Icon toolTip="Execute" icon={<Icons.Play />} />
    <Handle type="target" position={Position.Top} />
    <Handle type="source" position={Position.Bottom} />
  </Box>
);
