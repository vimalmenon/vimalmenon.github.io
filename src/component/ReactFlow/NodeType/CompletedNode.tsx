'use client';

import Box from '@mui/material/Box';
import { lightGreen } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { Handle, Position } from '@xyflow/react';
import { INodeType } from './NodeType';

export const CompletedNode: React.FC<INodeType> = ({ data }) => (
  <Box
    className="text-updater-node"
    component={Paper}
    minWidth={'300px'}
    sx={{ backgroundColor: lightGreen[100], borderRadius: '5px', padding: '10px' }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
          {data.label} ({data.type})
        </Box>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
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
