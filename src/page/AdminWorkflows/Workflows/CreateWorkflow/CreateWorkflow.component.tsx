'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useAdminWorkflows } from '../../AdminWorkflows.services';
import { ICreateWorkflow } from './CreateWorkflow';

export const CreateWorkflow: React.FC<ICreateWorkflow> = ({ cancelWorkflow }) => {
  const [name, setName] = useState<string>('');
  const { createWorkflow } = useAdminWorkflows();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box>
        {' '}
        <TextField
          required
          label="Name"
          size="small"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
      <Box>
        <Button variant="outlined" onClick={cancelWorkflow}>
          Cancel
        </Button>
        <Button variant="outlined" onClick={() => createWorkflow(name)}>
          Create
        </Button>
      </Box>
    </Box>
  );
};
