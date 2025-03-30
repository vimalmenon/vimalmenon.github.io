'use client';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import React from 'react';
import { ITextInput } from './TextInput';

export const TextInput: React.FC<ITextInput> = ({
  defaultValue,
  disabled,
  label,
  name,
  onChange,
  placeholder,
  required,
  value,
}) => {
  return (
    <FormControl variant="outlined" fullWidth required>
      <TextField
        label={label}
        variant="outlined"
        size="small"
        required={required}
        value={value}
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {/* <FormHelperText>This is Error</FormHelperText> */}
    </FormControl>
  );
};
