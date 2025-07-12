'use client';

import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { IAdminWorkflowIdPage } from '@types';
import { SelectedWorkflow } from '../AdminWorkflowExecuteId/SelectedWorkflow';
import { AdminWorkflowIdExecuteContext } from './AdminWorkflowIdExecute.context';
import {
  useAdminWorkflowIdExecuteContext,
  useWorkflowExecuteHelper,
} from './AdminWorkflowIdExecute.service';
import { ExecuteForm } from './ExecuteForm';
import { Header } from './Header';
import { ListWorkflow } from './ListWorkflow';

const Component: React.FC = () => {
  const { selectedWorkflow, showCreate } = useAdminWorkflowIdExecuteContext();
  const { getExecutedWorkflow } = useWorkflowExecuteHelper();
  useEffect(() => {
    getExecutedWorkflow();
  }, []);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, paddingY: 2 }}>
      <Header />
      {showCreate ? <ExecuteForm /> : selectedWorkflow ? <SelectedWorkflow /> : <ListWorkflow />}
    </Box>
  );
};
export const AdminWorkflowIdExecute: React.FC<IAdminWorkflowIdPage> = ({ id }) => (
  <AdminWorkflowIdExecuteContext id={id}>
    <Component />
  </AdminWorkflowIdExecuteContext>
);
