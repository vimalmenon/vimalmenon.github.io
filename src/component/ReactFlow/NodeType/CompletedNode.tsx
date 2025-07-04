'use client';

import Box from '@mui/material/Box';
import { lightGreen } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Handle, Position } from '@xyflow/react';
import { INodeType } from './NodeType';

export const CompletedNode: React.FC<INodeType> = ({ data }) => (
  <Box
    className="text-updater-node"
    component={Paper}
    minWidth={'400px'}
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
          <Typography sx={{ fontWeight: 'bold' }}>Type</Typography>
          <span>{data.type}</span>
        </Box>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 'bold' }}>Label</Typography>
          <span>{data.label}</span>
        </Box>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 'bold' }}>Data</Typography>
          <span>{data.data.slice(0, 30)}...</span>
        </Box>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 'bold' }}>Status</Typography>
          <span>{data.status}</span>
        </Box>
      </Box>
    </Box>
    <Handle type="target" position={Position.Top} />
    <Handle type="source" position={Position.Bottom} />
  </Box>
);
