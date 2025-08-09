'use client';

import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';

import { Icons } from '@data';
import { IMultiSelectOption } from '@types';

import { IMultiSelect } from './MultiSelect';

const renderValue = (selected: string[], options: IMultiSelectOption[]): string =>
  options
    .filter((option) => selected.includes(option.value))
    .map((option) => option.label)
    .join(', ');

export const MultiSelect: React.FC<IMultiSelect> = ({
  disabled,
  id,
  label,
  name,
  onChange,
  onClear,
  options,
  value,
}) => (
  <FormControl size="small" fullWidth>
    <InputLabel id={id}>{label}</InputLabel>
    <Select
      labelId={id}
      value={value}
      onChange={onChange}
      multiple
      name={name}
      renderValue={(selected) => renderValue(selected, options)}
      disabled={disabled}
      input={
        <OutlinedInput
          label={label}
          startAdornment={
            <InputAdornment position="start">
              <IconButton aria-label={id} onClick={onClear} edge="end">
                <Icons.Close />
              </IconButton>
            </InputAdornment>
          }
        />
      }
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
          <Checkbox checked={value.includes(option.value)} />
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
