'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AsyncButton, TextInput } from '@component';
import { Icons } from '@data';

export const ExecuteForm: React.FC = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <TextInput value={''} label="Name" placeholder="Name" name="name" />
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button
        variant="outlined"
        onClick={() => false}
        endIcon={<Icons.Close />}
        //   disabled={loading}
        // loading={loading}
        // loadingPosition="end"
      >
        {' '}
        Cancel
      </Button>
      <AsyncButton
        variant="contained"
        startIcon={<Icons.Save />}
        loadingPosition="start"
        onClick={() => false}
      >
        Update
      </AsyncButton>
    </Box>
  </Box>
);
