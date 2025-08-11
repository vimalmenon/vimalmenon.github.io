import MuiAutocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { IMultiSelectOption } from '@types';

import { IAutoComplete } from './AutoComplete';

// TODO: This should align to multiselect
export const AutoComplete: React.FC<IAutoComplete> = ({
  label,
  onChange,
  options,
  size = 'medium',
  value,
}) => (
  <MuiAutocomplete
    getOptionLabel={(option: IMultiSelectOption) => option.label}
    renderInput={(params) => <TextField {...params} label={label} variant="outlined" size={size} />}
    options={options}
    value={value}
    onChange={(event, newValue) => onChange(newValue)}
  />
);
