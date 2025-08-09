'use client';

import React from 'react';

import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { Llm } from './LLM';
import { useOthersHelper } from './Others.service';
import { Service } from './Services';
import { StructuredOutput } from './StructuredOutput';
import { Tools } from './Tools';

export const Others: React.FC = () => {
  const { createUUID, uuid } = useOthersHelper();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, paddingY: 2 }}>
      <Divider />
      <Box sx={{ paddingX: 2 }}>
        <TextField required label="UUID" value={uuid} size="small" disabled={true} />
        <Button variant="outlined" onClick={createUUID}>
          Create
        </Button>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', flex: 1, gap: 2, paddingX: 2 }}>
        <Box sx={{ display: 'flex', flex: 1 }}>
          <Tools />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ display: 'flex', flex: 1 }}>
          <Service />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ display: 'flex', flex: 1 }}>
          <StructuredOutput />
        </Box>
      </Box>
      <Divider />
      <Box sx={{ paddingX: 2 }}>
        <Llm />
      </Box>
    </Box>
  );
};
