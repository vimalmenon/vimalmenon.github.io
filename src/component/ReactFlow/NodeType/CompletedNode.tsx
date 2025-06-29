'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { Handle, Position } from '@xyflow/react';
import { INodeType } from './NodeType';

export const CompletedNode: React.FC<INodeType> = ({ data }) => (
  <Box
    className="text-updater-node"
    component={Paper}
    minWidth={'300px'}
    sx={{ borderRadius: '5px', padding: '10px' }}
  >
    <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
      <Box
        sx={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <Box sx={{ display: 'flex' }}>
          {data.label} ({data.type})
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <span>Type</span>
          <span>{data.type}</span>
        </Box>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <span>Label</span>
          <span>{data.label}</span>
        </Box>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <span>Data</span>
          {data.data}
        </Box>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <span>Status</span>
          {data.status}
        </Box>
      </Box>
    </Box>
    <Handle type="target" position={Position.Top} />
    <Handle type="source" position={Position.Bottom} />
  </Box>
);
