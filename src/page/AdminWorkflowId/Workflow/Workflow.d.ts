import { FormMode, IWorkflow, VoidFunction } from '@types';

export interface IWorkflowComponent {
  mode: FormMode;
  data?: IWorkflow;
  onCancel: VoidFunction;
  updateWorkflow: (data: IWorkflow) => void;
  onEdit: VoidFunction;
}
