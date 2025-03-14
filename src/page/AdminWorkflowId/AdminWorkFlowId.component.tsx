'use client';
import Box from '@mui/material/Box';
import { useAdminWorkflowId } from './AdminWorkflowId.service';

export const AdminWorkflowId: React.FC = () => {
  useAdminWorkflowId();
  return <Box>This is id</Box>;
};
