'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

export const NodeForm: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <FormControl variant="outlined" fullWidth required>
        <TextField label="ID" variant="outlined" size="small" required />
        {/* <FormHelperText>This is Error</FormHelperText> */}
      </FormControl>
      <FormControl variant="outlined" fullWidth required>
        <TextField label="Name" variant="outlined" size="small" required />
        {/* <FormHelperText>This is Error</FormHelperText> */}
      </FormControl>
      <FormControl variant="outlined" fullWidth required>
        <TextField label="Type" variant="outlined" size="small" required />
        {/* <FormHelperText>This is Error</FormHelperText> */}
      </FormControl>
      <FormControl variant="outlined" fullWidth required>
        <TextField label="LLM" variant="outlined" size="small" required />
        {/* <FormHelperText>This is Error</FormHelperText> */}
      </FormControl>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained">Update</Button>
      </Box>
    </Box>
  );
};
