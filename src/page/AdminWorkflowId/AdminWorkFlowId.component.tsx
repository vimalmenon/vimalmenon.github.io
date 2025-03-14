'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { IAdminWorkflowId } from './AdminWorkflowId';
import { useAdminWorkflowId } from './AdminWorkflowId.service';

export const AdminWorkflowId: React.FC<IAdminWorkflowId> = ({ id }) => {
  useAdminWorkflowId(id);
  return (
    <Box>
      <Box>Workflow {id}</Box>
      <Box>
        <Button variant="outlined">Create Node</Button>
      </Box>
    </Box>
  );
};
