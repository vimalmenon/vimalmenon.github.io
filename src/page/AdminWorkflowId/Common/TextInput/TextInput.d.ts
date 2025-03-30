import { ChangeEvent } from 'react';

export interface ITextInput {
  placeholder: string;
  name: string;
  label: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
  required?: boolean;
}
