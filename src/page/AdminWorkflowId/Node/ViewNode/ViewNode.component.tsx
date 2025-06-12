'use client';

import Box from '@mui/material/Box';
import { INode } from '@types';
import { useWorkflowContext } from '../../AdminWorkflowId.service';
import { fields, nodeType } from '../Node.service';
import { IViewNode } from './ViewNode';

const convertNextToString = (nodes: Record<string, INode>, next: string): string =>
  nodes[next].name;

export const ViewNode: React.FC<IViewNode> = ({ data }) => {
  const value = nodeType(data.type);
  const { workflow } = useWorkflowContext();
  return (
    <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>ID</Box>
        <Box>{data.id}</Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>Name</Box>
        <Box>{data.name}</Box>
      </Box>
      {data.type ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Type</Box>
          <Box>{data.type}</Box>
        </Box>
      ) : null}
      {value.includes(fields.LLM) ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>LLM</Box>
          <Box>{data.llm}</Box>
        </Box>
      ) : null}
      {value.includes(fields.Prompt) ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Prompt</Box>
          <Box>{data.prompt}</Box>
        </Box>
      ) : null}
      {value.includes(fields.Message) ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Message</Box>
          <Box>{data.message}</Box>
        </Box>
      ) : null}
      {value.includes(fields.Tools) && data.tools.length ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Tools</Box>
          <Box>{data.tools.join(', ')}</Box>
        </Box>
      ) : null}
      {value.includes(fields.Tool) ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Tool</Box>
          <Box>{data.tool}</Box>
        </Box>
      ) : null}
      {value.includes(fields.Service) ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Service</Box>
          <Box>{data.service}</Box>
        </Box>
      ) : null}
      {value.includes(fields.Next) && workflow && data.next ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Next</Box>
          <Box>{convertNextToString(workflow?.nodes, data.next)}</Box>
        </Box>
      ) : null}
      {data.requestAtRunTime ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Request at run time</Box>
          <Box>{data.requestAtRunTime ? 'True' : 'False'}</Box>
        </Box>
      ) : null}
      {data.isStart ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Is Start</Box>
          <Box>True</Box>
        </Box>
      ) : null}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>Updated at</Box>
        <Box>{data.updatedAt}</Box>
      </Box>
    </Box>
  );
};
