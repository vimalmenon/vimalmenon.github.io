'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Fragment, useEffect } from 'react';
import { Alert, Icon, WorkflowHeader } from '@component';
import { Icons } from '@data';
import { IAdminWorkflowExecuteId } from './AdminWorkflowExecuteId';
import { AdminWorkflowExecuteIdContext } from './AdminWorkflowExecuteId.context';
import { useAdminWorkflowIdExecuteHelper } from './AdminWorkflowExecuteId.service';
import { SelectedWorkflow } from './SelectedWorkflow';

const Component: React.FC = () => {
  const { alert, deleteExecutedWorkflow, getDatabaseData, getExecutedWorkflow, onAlertClose } =
    useAdminWorkflowIdExecuteHelper();
  useEffect(() => {
    getExecutedWorkflow();
    getDatabaseData();
  }, []);
  return (
    <Fragment>
      <WorkflowHeader
        title="Executed Workflow"
        action={<Icon toolTip="Delete" icon={<Icons.Delete />} onClick={deleteExecutedWorkflow} />}
      />
      <Divider />
      <Box sx={{ margin: 1 }}>
        {alert ? (
          <Alert severity={alert.severity} onClose={onAlertClose}>
            {alert.children}
          </Alert>
        ) : null}
      </Box>
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
