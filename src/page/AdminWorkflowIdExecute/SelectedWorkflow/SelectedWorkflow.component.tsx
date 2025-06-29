'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Fragment } from 'react';
import { ReactFlow, ViewData } from '@component';
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
  return result;
};

const getNodeType = (node: IExecuteWorkflowNode): ReactFlowType => {
  if (node.status === 'COMPLETED') {
    return 'Completed';
  }
  switch (node.node.type) {
    case 'HumanInput':
      return 'HumanInput';
    default:
      return 'Execute';
  }
};
const convertNodesToReactFlow = (
  nodes: IExecuteWorkflowNode[],
  onExecute: (data: IWorkflowExecuteParams) => void
): IReactFlowNode[] =>
  nodes.map<IReactFlowNode>((node, index) => ({
    data: {
      data: node.content,
      id: node.id,
      label: node.node.name,
      onExecute,
      status: node.status,
      type: node.node.type,
    },
    id: node.id,
    position: { x: 0, y: index * 150 },
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
                  (data: IWorkflowExecuteParams) => {
                    if (selectedWorkflow?.id) {
                      onExecuteWorkflowNode(selectedWorkflow.id, data);
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
