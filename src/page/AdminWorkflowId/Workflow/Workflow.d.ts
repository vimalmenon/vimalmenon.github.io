import { FormMode, IWorkflow, VoidFunction } from '@types';

export interface IWorkflowComponent {
  mode: FormMode;
  data?: IWorkflow;
  onCancel: VoidFunction;
  onEdit: VoidFunction;
}
