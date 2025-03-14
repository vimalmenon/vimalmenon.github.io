'use client';
import Box from '@mui/material/Box';
import { IAdminWorkflowId } from './AdminWorkflowId';
import { useAdminWorkflowId } from './AdminWorkflowId.service';

export const AdminWorkflowId: React.FC<IAdminWorkflowId> = ({ id }) => {
  useAdminWorkflowId();
  return <Box>This is id {id}</Box>;
};
