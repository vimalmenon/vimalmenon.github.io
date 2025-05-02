'use client';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';
import { ISelect } from './Select';

export const Select: React.FC<ISelect> = ({ error, label, name, onchange, options, value }) => (
  <FormControl fullWidth required size="small">
    <InputLabel id="node-type">{label}</InputLabel>
    <MuiSelect value={value} labelId="node-type" label={label} name={name} onChange={onchange}>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {options.map((option) => (
        <MenuItem value={option.value} key={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </MuiSelect>
    {error ? <FormHelperText error={!!error}>{error}</FormHelperText> : null}{' '}
  </FormControl>
);
