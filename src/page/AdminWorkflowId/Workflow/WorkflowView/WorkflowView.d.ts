import { IWorkflow, VoidFunction } from '@types';

export interface IWorkflowView {
  data: IWorkflow;
  onEdit: VoidFunction;
}
