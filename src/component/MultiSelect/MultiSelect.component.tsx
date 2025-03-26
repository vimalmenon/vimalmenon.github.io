'use client';

import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { IMultiSelect } from './MultiSelect';

export const MultiSelect: React.FC<IMultiSelect> = ({
  id,
  label,
  name,
  onChange,
  options,
  value,
}) => {
  return (
    <FormControl size="small" fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        value={value}
        onChange={onChange}
        multiple
        name={name}
        renderValue={(selected) => selected.join(', ')}
        input={<OutlinedInput label={label} />}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
            <Checkbox checked={false} />
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
