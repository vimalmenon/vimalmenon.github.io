'use client';

import Box from '@mui/material/Box';

import { Enums } from '@data';
import { INode, INodeFull, IWorkflow } from '@types';
import { formatDate } from '@utility';

import { useWorkflowContext } from '../../../AdminWorkflowId.service';
import { nodeType } from '../Node.service';

import { INodeViewData, IViewNode } from './ViewNode';

const convertNextToString = (nodes: Record<string, INode>, next: string): string =>
  nodes[next].name;

const getViewData = (
  data: INodeFull,
  values: string[],
  workflow: IWorkflow | null
): INodeViewData[] => {
  // TODO :  This is not Working
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
  if (values.includes(Enums.WorkflowNodeFields.Next) && workflow && data.next) {
    result.push({
      id: 'next',
      title: 'Next',
      value: convertNextToString(workflow?.nodes, data.next),
    });
  }
  if (data.requestAtRunTime) {
    result.push({
      id: 'request_at_run_time',
      title: 'Request at run time',
      value: data.requestAtRunTime ? 'True' : 'False',
    });
  }
  if (data.isStart) {
    result.push({
      id: 'is_start',
      title: 'Is Start',
      value: 'True',
    });
  }
  result.push({
    id: 'updated_at',
    title: 'Updated at',
    value: formatDate(data.updatedAt),
  });
  return result;
};

export const ViewNode: React.FC<IViewNode> = ({ data }) => {
  const value = nodeType(data.type, data.service);
  const { workflow } = useWorkflowContext();
  const pages = getViewData(data, value, workflow);
  return (
    <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column', gap: 2 }}>
      {pages.map((page) => (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }} key={page.id}>
          <Box>{page.title}</Box>
          <Box>{page.value}</Box>
        </Box>
      ))}
    </Box>
  );
};
