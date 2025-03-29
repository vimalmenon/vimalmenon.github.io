'use client';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import React from 'react';
import { ITextInput } from './TextInput';

export const TextInput: React.FC<ITextInput> = ({ label, name, onChange, placeholder, value }) => {
  return (
    <FormControl variant="outlined" fullWidth required>
      <TextField
        label={label}
        variant="outlined"
        size="small"
        required
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {/* <FormHelperText>This is Error</FormHelperText> */}
    </FormControl>
  );
};
