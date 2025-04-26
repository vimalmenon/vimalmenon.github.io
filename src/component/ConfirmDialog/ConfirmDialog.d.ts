import { VoidFunction } from '@types';
export interface IConfirmDialog {
  icon: 'WARNING' | 'ERROR' | 'INFO';
  title: string;
  open: boolean;
  onConfirm: VoidFunction<Promise<void>>;
  onCancel: VoidFunction;
}

export interface IShowIcon {
  icon: 'WARNING' | 'ERROR' | 'INFO';
}

export interface IShowTitle {
  icon: 'WARNING' | 'ERROR' | 'INFO';
  title: string;
}
