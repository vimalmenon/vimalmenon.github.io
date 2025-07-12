import { IExecuteWorkflow, IWorkflow, ReactSetState } from '@types';

export interface IAdminWorkflowContextComponent {
  id?: string;
  executeId?: string;
}

export interface IAdminWorkflowContext extends IAdminWorkflowContextComponent {
  workflows: IWorkflow[];
  setWorkflows: ReactSetState<IWorkflow[]>;
  selectedWorkflow: IWorkflow | null;
  setSelectedWorkflow: ReactSetState<IWorkflow | null>;
  executedWorkflows: IExecuteWorkflow[];
  setExecutedWorkflows: ReactSetState<IExecuteWorkflow[]>;
  selectedExecutedWorkflow: IExecuteWorkflow | null;
  setSelectedExecutedWorkflow: ReactSetState<IExecuteWorkflow | null>;
}
