'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Fragment, useEffect } from 'react';
import { WorkflowHeader } from '@component';
import { IAdminWorkflowExecuteId } from './AdminWorkflowExecuteId';
import { AdminWorkflowExecuteIdContext } from './AdminWorkflowExecuteId.context';
import { useAdminWorkflowIdExecuteHelper } from './AdminWorkflowExecuteId.service';
import { SelectedWorkflow } from './SelectedWorkflow';

const Component: React.FC = () => {
  const { getDatabaseData, getExecutedWorkflow } = useAdminWorkflowIdExecuteHelper();
  useEffect(() => {
    getExecutedWorkflow();
    getDatabaseData();
  }, []);
  return (
    <Fragment>
      <WorkflowHeader title="Executed Workflow" />
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, margin: 1 }}>
        <SelectedWorkflow />
      </Box>
    </Fragment>
  );
};

export const AdminWorkflowExecuteId: React.FC<IAdminWorkflowExecuteId> = ({ executeId, id }) => (
  <AdminWorkflowExecuteIdContext id={id} executeId={executeId}>
    <Component />
  </AdminWorkflowExecuteIdContext>
);
