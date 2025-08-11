import { IMultiSelectOption } from '@types';

export interface IAutoComplete {
  label: string;
  size?: 'small' | 'medium';
  options: IMultiSelectOption[];
  value: IMultiSelectOption;
  onChange: (value: IMultiSelectOption | null) => void;
}
