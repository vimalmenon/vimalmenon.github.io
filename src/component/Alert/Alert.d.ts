import { IAlert as IAlertType } from '@types';

export interface IAlert extends IAlertType {
  onClose: VoidFunction;
}
