import { SelectChangeEvent } from '@mui/material/Select';
import { IMultiSelectOption } from '@types';

export interface IMultiSelect {
  options: IMultiSelectOption[];
  value: string[];
  label: string;
  id: string;
  name: string;
  onChange: (event: SelectChangeEvent<string[]>) => void;
}
