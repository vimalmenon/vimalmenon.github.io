'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Handle, Position } from '@xyflow/react';
import { Icon } from '@component';
import { Icons } from '@data';
import { INodeType } from './NodeType';

export const LlmNode: React.FC<INodeType> = ({ data }) => (
  <Box
    className="text-updater-node"
    component={Paper}
    minWidth={'400px'}
    sx={{ borderRadius: '5px', padding: '10px' }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      {' '}
      <Box
        sx={{
          alignItems: 'center',
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'space-between',
          padding: 1,
        }}
      >
        <span>
          {data.label} ({data.type})
        </span>
        <Icon
          toolTip="Execute"
          icon={<Icons.Play />}
          onClick={() =>
            data.onExecute({
              id: data.id,
            })
          }
        />
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 'bold' }}>LLM</Typography>
          <span>{data.node.llm}</span>
        </Box>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 'bold' }}>Prompt</Typography>
          <span>{data.node.prompt}</span>
        </Box>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 'bold' }}>Message</Typography>
          <span>{data.node.message}</span>
        </Box>
      </Box>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </Box>
  </Box>
);
