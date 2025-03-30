'use client';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
// import FormHelperText from '@mui/material/FormHelperText';
import React from 'react';
import { ITextInput } from './TextInput';

export const TextInput: React.FC<ITextInput> = ({
  defaultValue,
  disabled,
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
      {/* <FormHelperText>This is Error</FormHelperText> */}
    </FormControl>
  );
};
