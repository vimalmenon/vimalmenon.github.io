'use client';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

export const CreateGroupLink: React.FC = () => (
  <Box>
    <FormControl variant="outlined" fullWidth required>
      <TextField label="Link" variant="outlined" size="small" required multiline value={prompt} />
    </FormControl>
  </Box>
);
