'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Fragment } from 'react';
import { ReactFlow, ViewData } from '@component';
import { Enums } from '@data';
import {
  IExecuteWorkflow,
  IExecuteWorkflowNode,
  IReactFlowEdge,
  IReactFlowNode,
  IViewData,
  IWorkflowExecuteParams,
  ReactFlowType,
} from '@types';
import {
  useAdminWorkflowIdExecuteContext,
  useWorkflowExecuteHelper,
} from '../AdminWorkflowIdExecute.service';

const convertWorkflowToView = (data: IExecuteWorkflow): IViewData[] => {
  const result: IViewData[] = [];
  if (data.id) {
    result.push({
      label: 'ID',
      value: data.id,
    });
  }
  if (data.name) {
    result.push({
      label: 'Name',
      value: data.name,
    });
  }
  if (data.status) {
    result.push({
      label: 'Status',
      value: data.status,
    });
  }
  if (data.createdAt) {
    result.push({
      label: 'Created At',
      value: new Date(data.createdAt).toLocaleString(),
    });
  }
  if (data.completedAt) {
    result.push({
      label: 'Completed At',
      value: new Date(data.completedAt).toLocaleString(),
    });
  }
  return result;
};

const getNodeType = (node: IExecuteWorkflowNode): ReactFlowType => {
  if (node.status === 'COMPLETED') {
    return 'Completed';
  }
  switch (node.node.type) {
    case 'HumanInput':
      return Enums.WorkflowNodeType.HumanInput;
    case Enums.WorkflowNodeType.LLM:
      return Enums.WorkflowNodeType.LLM;
    case 'Service':
      return Enums.WorkflowNodeType.Service;
    default:
      return 'Execute';
  }
};
const convertNodesToReactFlow = (
  nodes: IExecuteWorkflowNode[],
  onExecute: (data: IWorkflowExecuteParams) => Promise<void>
): IReactFlowNode[] =>
  nodes.map<IReactFlowNode>((node, index) => ({
    data: {
      data: node.content,
      id: node.id,
      label: node.node.name,
      node: node.node,
      onExecute,
      status: node.status,
      type: node.node.type ?? '',
    },
    id: node.id,
    position: { x: 0, y: index * 200 },
    type: getNodeType(node),
  }));

const createEdgesForNode = (nodes: IExecuteWorkflowNode[]): IReactFlowEdge[] =>
  nodes
    .map<IReactFlowEdge | null>((node, index, nodes) => {
      if (node.id && nodes[index + 1]?.id) {
        return {
          id: `${node.id}-${nodes[index + 1].id}`,
          source: node.id,
          target: nodes[index + 1].id,
        };
      }
      return null;
    })
    .filter((node) => node !== null);

export const SelectedWorkflow: React.FC = () => {
  const { onExecuteWorkflowNode } = useWorkflowExecuteHelper();
  const { selectedWorkflow } = useAdminWorkflowIdExecuteContext();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {selectedWorkflow ? (
        <Fragment>
          <ViewData data={convertWorkflowToView(selectedWorkflow)} />
          <Divider />
          <Box>
            <div style={{ display: 'flex', flex: '1 1 100%', height: '600px' }}>
              <ReactFlow
                nodes={convertNodesToReactFlow(
                  selectedWorkflow?.nodes ?? [],
                  async (data: IWorkflowExecuteParams) => {
                    if (selectedWorkflow?.id) {
                      await onExecuteWorkflowNode(selectedWorkflow.id, data);
                    }
                  }
                )}
                edges={createEdgesForNode(selectedWorkflow?.nodes ?? [])}
              />
            </div>
          </Box>
        </Fragment>
      ) : null}
    </Box>
  );
};
