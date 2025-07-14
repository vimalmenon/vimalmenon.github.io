'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Fragment, useEffect } from 'react';
import { Icon, WorkflowHeader } from '@component';
import { Icons } from '@data';
import { IAdminWorkflowIdPage } from '@types';
import { AdminWorkflowIdExecuteContext } from './AdminWorkflowIdExecute.context';
import {
  useAdminWorkflowIdExecuteContext,
  useWorkflowExecuteHelper,
} from './AdminWorkflowIdExecute.service';
import { ExecuteForm } from './ExecuteForm';
import { ListWorkflow } from './ListWorkflow';

const Component: React.FC = () => {
  const { setShowCreate, showCreate } = useAdminWorkflowIdExecuteContext();
  const { getExecutedWorkflow } = useWorkflowExecuteHelper();

  useEffect(() => {
    getExecutedWorkflow();
  }, []);
  return (
    <Fragment>
      <WorkflowHeader
        title="Execute Workflow"
        action={<Icon toolTip="Add" icon={<Icons.Add />} onClick={() => setShowCreate(true)} />}
      />
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, margin: 1 }}>
        {showCreate ? <ExecuteForm /> : <ListWorkflow />}
      </Box>
    </Fragment>
  );
};
export const AdminWorkflowIdExecute: React.FC<IAdminWorkflowIdPage> = ({ id }) => (
  <AdminWorkflowIdExecuteContext id={id}>
    <Component />
  </AdminWorkflowIdExecuteContext>
);
