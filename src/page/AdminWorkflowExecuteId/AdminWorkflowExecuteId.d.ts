import { IExecuteWorkflow, ReactSetState } from '@types';

export interface IAdminWorkflowExecuteId {
  id: string;
  executeId: string;
}

export interface IAdminWorkflowExecuteIdContext extends IAdminWorkflowExecuteId {
  selectedWorkflow: IExecuteWorkflow | null;
  setSelectedWorkflow: ReactSetState<IExecuteWorkflow | null>;
}
