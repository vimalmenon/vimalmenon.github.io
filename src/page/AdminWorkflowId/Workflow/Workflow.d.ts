import { IWorkflow, VoidFunction } from '@types';

export interface IWorkflowComponent {
  data?: IWorkflow;
  onCancel: VoidFunction;
}
