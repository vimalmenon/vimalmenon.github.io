'use client';

import Box from '@mui/material/Box';
import { IAdminWorkflowExecuteId } from './AdminWorkflowExecuteId';
import { AdminWorkflowExecuteIdContext } from './AdminWorkflowExecuteId.context';
import { SelectedWorkflow } from './SelectedWorkflow';

const Component: React.FC = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, paddingY: 2 }}>
    <SelectedWorkflow />
  </Box>
);

export const AdminWorkflowExecuteId: React.FC<IAdminWorkflowExecuteId> = ({ executeId, id }) => (
  <AdminWorkflowExecuteIdContext id={id} executeId={executeId}>
    <Component />
  </AdminWorkflowExecuteIdContext>
);
