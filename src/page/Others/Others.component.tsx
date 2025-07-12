'use client';

import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import { Llm } from './LLM';
import { useOthersHelper } from './Others.service';
import { Service } from './Services';
import { Tools } from './Tools';

export const Others: React.FC = () => {
  const { createUUID, uuid } = useOthersHelper();
  return (
    <Box sx={{ paddingY: 2 }}>
      <Box sx={{ marginY: 2 }}>
        <TextField required label="UUID" value={uuid} size="small" disabled={true} />
        <Button variant="outlined" onClick={createUUID}>
          Create
        </Button>
      </Box>
      <Divider />
      <Box sx={{ marginY: 2 }}>
        <Tools />
      </Box>
      <Divider />
      <Box sx={{ marginY: 2 }}>
        <Service />
      </Box>
      <Divider />
      <Box sx={{ marginY: 2 }}>
        <Llm />
      </Box>
    </Box>
  );
};
