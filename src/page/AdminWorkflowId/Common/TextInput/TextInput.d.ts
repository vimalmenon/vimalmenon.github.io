import { ChangeEvent } from 'react';

export interface ITextInput {
  value: string;
  label: string;
  placeholder: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
