'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BaseNode } from './BaseNode';
import { INodeType } from './NodeType';

export const CompletedNode: React.FC<INodeType> = ({ data }) => (
  <BaseNode data={data} onExecute={data.onExecute}>
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
    </Box>
  </BaseNode>
);
