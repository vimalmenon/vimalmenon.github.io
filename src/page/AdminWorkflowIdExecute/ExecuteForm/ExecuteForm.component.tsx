'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { AsyncButton, TextInput } from '@component';
import { Icons } from '@data';
import {
  useAdminWorkflowIdExecuteContext,
  useWorkflowExecuteHelper,
} from '../AdminWorkflowIdExecute.service';

export const ExecuteForm: React.FC = () => {
  const { executeWorkflow } = useWorkflowExecuteHelper();
  const { loading } = useAdminWorkflowIdExecuteContext();
  const [name, setName] = useState<string>('');
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextInput
        value={name}
        label="Name"
        placeholder="Name"
        name="name"
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="outlined"
          onClick={() => false}
          endIcon={<Icons.Close />}
          disabled={loading}
          // loading={loading}
          // loadingPosition="end"
        >
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
