'use client';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export const CreateGroupLink: React.FC = () => {
  const [name, setName] = useState<string>('');
  return (
    <Box>
      <FormControl variant="outlined" fullWidth required>
        <TextField
          label="Link"
          variant="outlined"
          size="small"
          required
          multiline
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
    </Box>
  );
};
