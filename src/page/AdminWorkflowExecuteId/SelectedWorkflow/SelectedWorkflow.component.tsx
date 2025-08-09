'use client';

import { Fragment } from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { ReactFlow, ReactFlowLegend, ViewData } from '@component';
import { IExecuteWorkflow, IExecuteWorkflowNode, IReactFlowEdge, IViewData } from '@types';

import {
  useAdminWorkflowIdExecuteIdContext,
  useWorkflowExecuteHelper,
} from '../AdminWorkflowExecuteId.service';

import { WorkflowNodeDetail } from './WorkflowNodeDetail';

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
  const { convertNodesToReactFlow } = useWorkflowExecuteHelper();
  const { selectedExecutedWorkflow } = useAdminWorkflowIdExecuteIdContext();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <WorkflowNodeDetail />
      {selectedExecutedWorkflow ? (
        <Fragment>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <ViewData data={convertWorkflowToView(selectedExecutedWorkflow)} />
            <Divider orientation="vertical" flexItem />
            <ReactFlowLegend />
          </Box>

          <Divider />
          <Box>
            <div style={{ display: 'flex', flex: '1 1 100%', height: '600px' }}>
              <ReactFlow
                nodes={convertNodesToReactFlow(selectedExecutedWorkflow?.nodes ?? [])}
                edges={createEdgesForNode(selectedExecutedWorkflow?.nodes ?? [])}
              />
            </div>
          </Box>
        </Fragment>
      ) : null}
    </Box>
  );
};
