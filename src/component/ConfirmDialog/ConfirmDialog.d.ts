import { VoidFunction } from '@types';

type IconType = 'WARNING' | 'ERROR' | 'INFO';

export interface IConfirmDialog extends IShowTitle {
  open: boolean;
  onConfirm: VoidFunction<Promise<void>>;
  onCancel: VoidFunction;
}

export interface IShowIcon {
  icon: IconType;
}

export interface IShowTitle extends IShowIcon {
  title: string | JSX.Element;
}
