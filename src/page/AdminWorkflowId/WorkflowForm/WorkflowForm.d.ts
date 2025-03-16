import { IWorkflow } from '@types';

export interface IWorkflowForm {
  mode: 'CREATE' | 'UPDATE';
  data?: IWorkflow;
}
