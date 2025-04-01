'use client';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import React from 'react';
import { ITextInput } from './TextInput';

export const TextInput: React.FC<ITextInput> = ({
  defaultValue,
  disabled,
  error,
  label,
  multiline,
  name,
  onChange,
  placeholder,
  required,
  rows,
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
        multiline={multiline}
        rows={rows}
      />
      {error ? <FormHelperText error={!!error}>{error}</FormHelperText> : null}
    </FormControl>
  );
};
