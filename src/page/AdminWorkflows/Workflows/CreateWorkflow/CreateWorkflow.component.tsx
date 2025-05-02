'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Icons } from '@data';
import { useAdminWorkflows } from '../../AdminWorkflows.services';
import { ICreateWorkflow } from './CreateWorkflow';

export const CreateWorkflow: React.FC<ICreateWorkflow> = ({ cancelWorkflow }) => {
  const [name, setName] = useState<string>('');
  const { createWorkflow } = useAdminWorkflows();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <FormControl variant="outlined" fullWidth required>
        <TextField
          required
          label="Name"
          size="small"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="outlined"
          endIcon={<Icons.Close />}
          disabled={false}
          onClick={cancelWorkflow}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => createWorkflow(name)}
          startIcon={<Icons.Save />}
          loadingPosition="start"
        >
          Create
        </Button>
      </Box>
    </Box>
  );
};
