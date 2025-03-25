import { IMultiSelectOption } from '@types';

export interface IMultiSelect {
  options: IMultiSelectOption[];
  value: string[];
  label: string;
  id: string;
  onChange: (value: string[]) => void;
}
