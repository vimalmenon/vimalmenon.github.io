'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Fragment } from 'react';
import { ReactFlow, ViewData } from '@component';
import { Icons } from '@data';
import { IExecuteWorkflow, IViewData } from '@types';
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

export const SelectedWorkflow: React.FC = () => {
  const { setSelectedWorkflow } = useWorkflowExecuteHelper();
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
              <ReactFlow nodes={[]} />
            </div>
          </Box>
        </Fragment>
      ) : null}
    </Box>
  );
};
