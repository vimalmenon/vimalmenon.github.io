'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BaseNode } from './BaseNode';
import { INodeType } from './NodeType';

export const LlmNode: React.FC<INodeType> = ({ data }) => (
  <BaseNode
    data={data}
    onExecute={async () =>
      await data.onExecute({
        id: data.id,
      })
    }
  >
    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 1 }}>
      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <Typography sx={{ fontWeight: 'bold' }}>LLM</Typography>
        <span>{data.node.node.llm}</span>
      </Box>
      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <Typography sx={{ fontWeight: 'bold' }}>Prompt</Typography>
        <span>{data.node.node.prompt}</span>
      </Box>
      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <Typography sx={{ fontWeight: 'bold' }}>Message</Typography>
        <span>{data.node.node.message}</span>
      </Box>
    </Box>
  </BaseNode>
);
