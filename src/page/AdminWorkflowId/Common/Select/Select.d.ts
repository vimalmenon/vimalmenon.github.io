import { SelectChangeEvent } from '@mui/material';

import { IMultiSelectOption } from '@types';

export interface ISelect {
  label: string;
  name: string;
  value: string;
  options: IMultiSelectOption[];
  onchange: (event: SelectChangeEvent<string>) => void;
  error?: string;
}
