'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAdminWorkflows } from './AdminWorkflows.services';
import { LLM } from './LLM';
import { Tools } from './Tools';
import { Workflows } from './Workflows';

export const AdminWorkflows: React.FC = () => {
  const { createUUID, uuid } = useAdminWorkflows();
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <LLM />
      <Box>
        <TextField required label="UUID" value={uuid} size="small" disabled={true} />
        <Button variant="outlined" onClick={createUUID}>
          Create
        </Button>
      </Box>
      <Box>
        <Workflows />
      </Box>
      <Box>
        <Tools />
      </Box>
    </Box>
  );
};
