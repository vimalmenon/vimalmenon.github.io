'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { AsyncButton } from '@component';
import { Icons } from '@data';

export const CreateLink: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [reference, setReference] = useState<string>('');
  return (
    <Box>
      <FormControl variant="outlined" fullWidth required>
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          required
          multiline
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl variant="outlined" fullWidth required>
        <TextField
          label="Link"
          variant="outlined"
          size="small"
          required
          multiline
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </FormControl>
      <FormControl variant="outlined" fullWidth required>
        <TextField
          label="Reference"
          variant="outlined"
          size="small"
          required
          multiline
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />
      </FormControl>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button variant="outlined" endIcon={<Icons.Close />}>
          Cancel
        </Button>
        <AsyncButton
          variant="contained"
          startIcon={<Icons.Save />}
          loadingPosition="start"
          //   onClick={async () => await createLink(name)}
        >
          Save
        </AsyncButton>
      </Box>
    </Box>
  );
};
