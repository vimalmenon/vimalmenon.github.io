import { IWorkflow, VoidFunction } from '@types';

export interface IWorkflowForm {
  mode: 'CREATE' | 'UPDATE';
  data?: IWorkflow;
  onCancel: VoidFunction;
  updateWorkflow: (data: IWorkflow) => void;
  loading: boolean;
}
