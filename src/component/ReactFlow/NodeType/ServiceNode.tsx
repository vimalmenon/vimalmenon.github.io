'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BaseNode } from './BaseNode';
import { INodeType } from './NodeType';

export const ServiceNode: React.FC<INodeType> = ({ data }) => (
  <BaseNode data={data} onExecute={data.onExecute}>
    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <Typography sx={{ fontWeight: 'bold' }}>Label</Typography>
        <span>{data.label}</span>
      </Box>
      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <Typography sx={{ fontWeight: 'bold' }}>Type</Typography>
        <span>{data.type}</span>
      </Box>
      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <Typography sx={{ fontWeight: 'bold' }}>Service</Typography>
        <span>{data.node.service}</span>
      </Box>
    </Box>
  </BaseNode>
);
