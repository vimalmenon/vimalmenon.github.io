'use client';

import Box from '@mui/material/Box';
import { AdminWorkflowsContext } from './AdminWorkflows.context';
import { Workflows } from './Workflows';

export const AdminWorkflows: React.FC = () => (
  <AdminWorkflowsContext>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, paddingY: 2 }}>
      <Workflows />
    </Box>
  </AdminWorkflowsContext>
);
