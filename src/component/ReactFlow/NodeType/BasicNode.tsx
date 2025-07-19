'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BaseNode } from './BaseNode';
import { INodeType } from './NodeType';

export const BasicNode: React.FC<INodeType> = ({ data }) => (
  <BaseNode data={data} onExecute={data.onExecute}>
    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 1 }}>
      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <Typography sx={{ fontWeight: 'bold' }}>Name</Typography>
        <span>{data.label}</span>
      </Box>
      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <Typography sx={{ fontWeight: 'bold' }}>Type</Typography>
        <span>{data.type}</span>
      </Box>
      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <Typography sx={{ fontWeight: 'bold' }}>From Previous Node</Typography>
        <span>{data.node.node.dataFromPreviousNode ? 'True' : 'False'}</span>
      </Box>
    </Box>
  </BaseNode>
);
