import { Divider } from '@mui/material';
import React from 'react';
import { LLM } from './LLM';
import { Tools } from './Tools';

export const Others: React.FC = () => (
  <div>
    <Tools />
    <br />
    <Divider />
    <LLM />
  </div>
);
