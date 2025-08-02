'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { AsyncButton, TextInput } from '@component';
import { Icons } from '@data';
import { useExecuteWorkflowHelper } from '../AdminWorkflowId.service';

export const ExecuteForm: React.FC = () => {
  const { executeWorkflow, setShowCreate } = useExecuteWorkflowHelper();
  const [name, setName] = useState<string>('');
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextInput
        value={name}
        label="Name"
        placeholder="Name"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={() => setShowCreate(false)} endIcon={<Icons.Close />}>
          Cancel
        </Button>
        <AsyncButton
          variant="contained"
          startIcon={<Icons.Save />}
          loadingPosition="start"
          onClick={() =>
            executeWorkflow({
              name,
            })
          }
        >
          Execute
        </AsyncButton>
      </Box>
    </Box>
  );
};
