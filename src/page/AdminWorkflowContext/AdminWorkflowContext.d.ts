import { IExecuteWorkflow, IWorkflow, ReactSetState } from '@types';

export interface IAdminWorkflowContextComponent {
  id?: string;
  executeId?: string;
}

export interface IAdminWorkflowContext extends IAdminWorkflowContextComponent {
  executedWorkflows: IExecuteWorkflow[];
  setExecutedWorkflows: ReactSetState<IExecuteWorkflow[]>;
  selectedExecutedWorkflow: IExecuteWorkflow | null;
  setSelectedExecutedWorkflow: ReactSetState<IExecuteWorkflow | null>;
}
