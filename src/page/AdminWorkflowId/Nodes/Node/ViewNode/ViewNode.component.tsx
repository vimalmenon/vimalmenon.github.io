'use client';

import Box from '@mui/material/Box';

import { Enums } from '@data';
import { INode, INodeFull } from '@types';
import { formatDate } from '@utility';

import { useWorkflowContext } from '../../../AdminWorkflowId.service';
import { nodeType } from '../Node.service';

import { INodeViewData, IViewNode } from './ViewNode';

const convertNextToString = (nodes: Record<string, INode>, next: string): string =>
  nodes[next].name;

const getViewData = (data: INodeFull, values: string[]): INodeViewData[] => {
  //TODO :  Convert data to for easy use
  const result = [
    { id: 'id', title: 'ID', value: data.id },
    { id: 'name', title: 'Name', value: data.name },
  ];
  if (data.type) {
    result.push({ id: 'type', title: 'Type', value: data.type });
  }
  if (values.includes(Enums.WorkflowNodeFields.LLM)) {
    result.push({ id: 'llm', title: 'LLM', value: data.llm ?? '' });
  }
  if (values.includes(Enums.WorkflowNodeFields.Prompt)) {
    result.push({ id: 'prompt', title: 'Prompt', value: data.prompt ?? '' });
  }
  if (data.dataFromPreviousNode) {
    result.push({
      id: 'dataFromPreviousNode',
      title: 'Get message from previous node',
      value: 'True',
    });
  }
  if (values.includes(Enums.WorkflowNodeFields.Message) && !data.dataFromPreviousNode) {
    result.push({
      id: 'message',
      title: 'Message',
      value: data.message ?? '',
    });
  }
  if (values.includes(Enums.WorkflowNodeFields.Tools) && data.tools.length) {
    result.push({
      id: 'tools',
      title: 'Tools',
      value: data.tools.join(', '),
    });
  }
  if (values.includes(Enums.WorkflowNodeFields.Tool)) {
    result.push({
      id: 'tool',
      title: 'Tool',
      value: data.tool ?? '',
    });
  }
  if (values.includes(Enums.WorkflowNodeFields.Service)) {
    result.push({
      id: 'service',
      title: 'Service',
      value: data.service ?? '',
    });
  }
  return result;
};

export const ViewNode: React.FC<IViewNode> = ({ data }) => {
  const value = nodeType(data.type, data.service);
  const { workflow } = useWorkflowContext();
  getViewData(data, value);
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
      {value.includes(Enums.WorkflowNodeFields.LLM) ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>LLM</Box>
          <Box>{data.llm}</Box>
        </Box>
      ) : null}
      {value.includes(Enums.WorkflowNodeFields.Prompt) ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Prompt</Box>
          <Box>{data.prompt}</Box>
        </Box>
      ) : null}

      {data.dataFromPreviousNode ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Get message from previous node</Box>
          <Box>True</Box>
        </Box>
      ) : null}
      {value.includes(Enums.WorkflowNodeFields.Message) && !data.dataFromPreviousNode ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Message</Box>
          <Box>{data.message}</Box>
        </Box>
      ) : null}
      {value.includes(Enums.WorkflowNodeFields.Tools) && data.tools.length ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Tools</Box>
          <Box>{data.tools.join(', ')}</Box>
        </Box>
      ) : null}
      {value.includes(Enums.WorkflowNodeFields.Tool) ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Tool</Box>
          <Box>{data.tool}</Box>
        </Box>
      ) : null}
      {value.includes(Enums.WorkflowNodeFields.Service) ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>Service</Box>
          <Box>{data.service}</Box>
        </Box>
      ) : null}
      {value.includes(Enums.WorkflowNodeFields.Next) && workflow && data.next ? (
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
        <Box>{formatDate(data.updatedAt)}</Box>
      </Box>
    </Box>
  );
};
