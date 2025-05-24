'use client';

import Box from '@mui/material/Box';
import { useEffect } from 'react'
import { Icons } from '@data';
import { IAdminWorkflowIdPage } from '@types';
import { AdminWorkflowIdExecuteContext } from './AdminWorkflowIdExecute.context';
import {
  useAdminWorkflowIdExecuteContext,
  useWorkflowExecuteHelper,
} from './AdminWorkflowIdExecute.service';
import { ExecuteForm } from './ExecuteForm';

const Component: React.FC = () => {
  const { workflows } = useAdminWorkflowIdExecuteContext();
  const { deleteExecutedWorkflow, getExecutedWorkflow } = useWorkflowExecuteHelper();
  useEffect(() => {
    getExecutedWorkflow();
  }, []);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, paddingY: 2 }}>
      <ExecuteForm />
      {workflows.map((workflow) => (
        <div key={workflow.id}>
          {workflow.name} |{workflow.status} |{' '}
          <Icons.Delete onClick={() => deleteExecutedWorkflow(workflow.id)} />
        </div>
      ))}
    </Box>
  );
};
export const AdminWorkflowIdExecute: React.FC<IAdminWorkflowIdPage> = ({ id }) => (
  <AdminWorkflowIdExecuteContext id={id}>
    <Component />
  </AdminWorkflowIdExecuteContext>
);
