import { IWorkflow, VoidFunction } from '@types';

export interface IViewWorkflow {
  data: IWorkflow;
  onEdit: VoidFunction;
}
