'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { IWorkflowForm } from './WorkflowForm';

export const WorkflowForm: React.FC<IWorkflowForm> = ({ data, mode }) => {
  const [id, setId] = useState<string>(data?.id || '');
  const [name, setName] = useState<string>(data?.name || '');
  const [detail, setDetail] = useState<string>(data?.detail || '');
  const [complete, setComplete] = useState<boolean>(data?.complete || false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {mode === 'UPDATE' ? (
        <FormControl variant="outlined" fullWidth required>
          <TextField
            label="ID"
            variant="outlined"
            size="small"
            required
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          {/* <FormHelperText>This is Error</FormHelperText> */}
        </FormControl>
      ) : null}
      <FormControl variant="outlined" fullWidth required>
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <FormHelperText>This is Error</FormHelperText> */}
      </FormControl>
      {mode === 'UPDATE' ? (
        <FormControl variant="outlined" fullWidth required>
          <TextField
            label="Detail"
            variant="outlined"
            size="small"
            required
            multiline
            rows={5}
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
          {/* <FormHelperText>This is Error</FormHelperText> */}
        </FormControl>
      ) : null}
      {mode === 'UPDATE' ? (
        <FormControl>
          <FormControlLabel
            control={
              <Switch
                checked={complete}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setComplete(event.target.checked);
                }}
              />
            }
            label="Complete"
            labelPlacement="end"
          />
        </FormControl>
      ) : null}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained">Update</Button>
      </Box>
    </Box>
  );
};
