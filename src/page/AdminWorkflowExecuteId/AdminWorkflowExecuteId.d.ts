import { IDbServiceData, IExecuteWorkflow, IExecuteWorkflowNode, ReactSetState } from '@types';

export interface IAdminWorkflowExecuteId {
  id: string;
  executeId: string;
}

export interface IAdminWorkflowExecuteIdContext extends IAdminWorkflowExecuteId {
  selectedExecutedWorkflow: IExecuteWorkflow | null;
  setSelectedExecutedWorkflow: ReactSetState<IExecuteWorkflow | null>;
  selectedWorkflowNode: IExecuteWorkflowNode | null;
  setSelectedWorkflowNode: ReactSetState<IExecuteWorkflowNode | null>;
  dbServiceData: IDbServiceData[];
  setDbServiceData: ReactSetState<IDbServiceData[]>;
}

export interface IUseAdminWorkflowIdExecuteHelper {
  getExecutedWorkflow: VoidFunction<Promise<void>>;
}
