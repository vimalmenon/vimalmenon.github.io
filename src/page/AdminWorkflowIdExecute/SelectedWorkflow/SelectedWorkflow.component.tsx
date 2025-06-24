'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Fragment } from 'react';
import { ReactFlow, ViewData } from '@component';
import { Icons } from '@data';
import {
  IExecuteWorkflow,
  IExecuteWorkflowNode,
  IReactFlowEdge,
  IReactFlowNode,
  IViewData,
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

const convertNodesToReactFlow = (
  nodes: IExecuteWorkflowNode[],
  onExecute: VoidFunction
): IReactFlowNode[] =>
  nodes.map<IReactFlowNode>((node, index) => ({
    data: {
      id: node.id,
      label: node.node.name,
      onExecute,
      status: node.status,
      type: node.node.type,
    },
    id: node.id,
    position: { x: 0, y: index * 150 },
    type: node.node.type === 'HumanInput' ? 'HumanInput' : 'Execute',
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
  const { onExecuteWorkflowNode, setSelectedWorkflow } = useWorkflowExecuteHelper();
  const { selectedWorkflow } = useAdminWorkflowIdExecuteContext();
  return (
    <Box>
      <Button variant="text" onClick={() => setSelectedWorkflow(null)} startIcon={<Icons.Back />}>
        Back
      </Button>
      <Divider />
      {selectedWorkflow ? (
        <Fragment>
          <ViewData data={convertWorkflowToView(selectedWorkflow)} />
          <Divider />
          <Box>
            <div style={{ display: 'flex', flex: '1 1 100%', height: '600px' }}>
              <ReactFlow
                nodes={convertNodesToReactFlow(
                  selectedWorkflow?.nodes ?? [],
                  onExecuteWorkflowNode
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
