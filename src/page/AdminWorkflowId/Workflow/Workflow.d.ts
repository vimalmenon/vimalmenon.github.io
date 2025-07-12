import { IWorkflow, VoidFunction } from '@types';

export interface IWorkflowComponent {
  data: IWorkflow | null;
  onCancel: VoidFunction;
}
