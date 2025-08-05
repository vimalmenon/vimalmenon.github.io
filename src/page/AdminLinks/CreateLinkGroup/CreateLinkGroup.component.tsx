'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { AsyncButton } from '@component';
import { Icons } from '@data';
import { useLinkContext, useLinkHelper } from '../AdminLinks.service';

export const CreateLinkGroup: React.FC = () => {
  const [name, setName] = useState<string>('');
  const { createLinkGroup } = useLinkHelper();
  const { setShowCreate } = useLinkContext();

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
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button variant="outlined" endIcon={<Icons.Close />} onClick={() => setShowCreate(false)}>
          Cancel
        </Button>
        <AsyncButton
          variant="contained"
          startIcon={<Icons.Save />}
          loadingPosition="start"
          onClick={async () => await createLinkGroup(name)}
        >
          Save
        </AsyncButton>
      </Box>
    </Box>
  );
};
