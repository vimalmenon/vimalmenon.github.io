'use client';

import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import { LLM } from './LLM';
import { useOthersHelper } from './Others.service';
import { Service } from './Services';
import { Tools } from './Tools';

export const Others: React.FC = () => {
  const { createUUID, uuid } = useOthersHelper();
  return (
    <div>
      <Box>
        <TextField required label="UUID" value={uuid} size="small" disabled={true} />
        <Button variant="outlined" onClick={createUUID}>
          Create
        </Button>
      </Box>
      <br />
      <Divider />
      <br />
      <Tools />
      <br />
      <Divider />
      <br />
      <Service />
      <br />
      <Divider />
      <br />
      <LLM />
    </div>
  );
};
