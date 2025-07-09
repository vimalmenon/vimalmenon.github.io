import { IReactChildren, VoidFunction } from '@types';

export interface IModal extends IReactChildren {
  open: boolean;
  title: string;
  onClose: VoidFunction;
  onConfirm: VoidFunction<Promise<void>>;
}
