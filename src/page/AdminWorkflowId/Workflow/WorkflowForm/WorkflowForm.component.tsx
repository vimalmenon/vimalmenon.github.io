'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Icons } from '@data';
import { IWorkflowForm } from './WorkflowForm';

export const WorkflowForm: React.FC<IWorkflowForm> = ({
  data,
  loading,
  mode,
  onCancel,
  updateWorkflow,
}) => {
  const [name, setName] = useState<string>(data?.name ?? '');
  const [detail, setDetail] = useState<string>(data?.detail ?? '');
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
            defaultValue={data?.id}
            disabled
          />
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
          disabled={loading}
        />
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
            disabled={loading}
          />
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
                disabled={loading}
              />
            }
            label="Complete"
            labelPlacement="end"
          />
        </FormControl>
      ) : null}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={onCancel} endIcon={<Icons.Close />} loading={loading}>
          Cancel
        </Button>
        {data ? (
          <Button
            variant="contained"
            loading={loading}
            loadingPosition="start"
            startIcon={<Icons.Save />}
            onClick={() => updateWorkflow({ ...data, complete, detail, name })}
          >
            Update
          </Button>
        ) : null}
      </Box>
    </Box>
  );
};
