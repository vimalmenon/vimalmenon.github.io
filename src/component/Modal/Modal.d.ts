import { ReactElement } from 'react';
import { IReactChildren, VoidFunction } from '@types';

export interface IModal extends IReactChildren {
  open: boolean;
  title: ReactElement;
  onClose: VoidFunction;
  onConfirm: VoidFunction<Promise<void>>;
}
