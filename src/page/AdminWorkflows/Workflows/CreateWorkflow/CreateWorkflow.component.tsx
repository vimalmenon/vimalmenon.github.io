'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useAdminWorkflows } from '../../AdminWorkflows.services';

export const CreateWorkflow: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
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
        {' '}
        <TextField
          required
          label="Detail"
          size="small"
          multiline={true}
          rows={5}
          fullWidth
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
      </Box>
      <Box>
        <Button variant="outlined" onClick={() => createWorkflow(name, detail)}>
          Create Workflow
        </Button>
      </Box>
    </Box>
  );
};
