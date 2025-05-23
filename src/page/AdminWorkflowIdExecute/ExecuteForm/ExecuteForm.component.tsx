'use client';

import Box from '@mui/material/Box';
import { TextInput } from '@component';

export const ExecuteForm: React.FC = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <TextInput
      value={""}
      label="Name"
      placeholder="Name"
      name="name"
    />
  </Box>
);
