'use client';

import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IMultiSelect } from './MultiSelect';

export const MultiSelect: React.FC<IMultiSelect> = ({ id, label, onChange, options, value }) => {
  const handleChange = (event: SelectChangeEvent<string[]>): void => {
    const {
      target: { value },
    } = event;
    onChange(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <FormControl size="small" fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        value={value}
        onChange={handleChange}
        multiple
        renderValue={(selected) => selected.join(', ')}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Checkbox checked={false} />
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
