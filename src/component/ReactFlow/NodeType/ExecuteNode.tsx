'use client';

import Box from '@mui/material/Box';
import { BaseNode } from './BaseNode';
import { INodeType } from './NodeType';

export const ExecuteNode: React.FC<INodeType> = ({ data }) => (
  <BaseNode data={data} onExecute={data.onExecute}>
    <Box></Box>
  </BaseNode>
);
