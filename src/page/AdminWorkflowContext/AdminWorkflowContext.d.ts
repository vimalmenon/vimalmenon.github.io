import { IExecuteWorkflow, ReactSetState } from '@types';

export interface IAdminWorkflowContextComponent {
  id?: string;
  executeId?: string;
}

export interface IAdminWorkflowContext extends IAdminWorkflowContextComponent {
  selectedExecutedWorkflow: IExecuteWorkflow | null;
  setSelectedExecutedWorkflow: ReactSetState<IExecuteWorkflow | null>;
}
