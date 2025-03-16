'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { INodeForm } from './NodeForm';

export const NodeForm: React.FC<INodeForm> = ({ data, onCancel }) => {
  const [name, setName] = useState<string>(data?.name ?? '');
  const [type, setType] = useState<string>(data?.type ?? '');
  const [llm, setLlm] = useState<string>(data?.llm ?? '');
  const [prompt, setPrompt] = useState<string>(data?.prompt ?? '');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <FormControl variant="outlined" fullWidth required>
        <TextField
          label="ID"
          variant="outlined"
          size="small"
          required
          defaultValue={data.id}
          disabled
        />
        {/* <FormHelperText>This is Error</FormHelperText> */}
      </FormControl>
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
      <FormControl variant="outlined" fullWidth required>
        <TextField
          label="Type"
          variant="outlined"
          size="small"
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        {/* <FormHelperText>This is Error</FormHelperText> */}
      </FormControl>
      <FormControl variant="outlined" fullWidth required>
        <TextField
          label="LLM"
          variant="outlined"
          size="small"
          required
          value={llm}
          onChange={(e) => setLlm(e.target.value)}
        />
        {/* <FormHelperText>This is Error</FormHelperText> */}
      </FormControl>
      <FormControl variant="outlined" fullWidth required>
        <TextField
          label="Prompt"
          variant="outlined"
          size="small"
          required
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        {/* <FormHelperText>This is Error</FormHelperText> */}
      </FormControl>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="contained">Update</Button>
      </Box>
    </Box>
  );
};
