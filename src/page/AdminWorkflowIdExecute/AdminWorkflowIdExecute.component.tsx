'use client';

import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { IAdminWorkflowIdPage } from '@types';
import { AdminWorkflowIdExecuteContext } from './AdminWorkflowIdExecute.context';
import {
  useAdminWorkflowIdExecuteContext,
  useWorkflowExecuteHelper,
} from './AdminWorkflowIdExecute.service';
import { ExecuteForm } from './ExecuteForm';

const Component: React.FC = () => {
  const { id } = useAdminWorkflowIdExecuteContext();
  const { getExecutedWorkflow } = useWorkflowExecuteHelper();
  useEffect(() => {
    getExecutedWorkflow();
  }, []);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, paddingY: 2 }}>
      This is execute workflow {id}
      <ExecuteForm />
    </Box>
  );
};
export const AdminWorkflowIdExecute: React.FC<IAdminWorkflowIdPage> = ({ id }) => (
  <AdminWorkflowIdExecuteContext id={id}>
    <Component />
  </AdminWorkflowIdExecuteContext>
);
