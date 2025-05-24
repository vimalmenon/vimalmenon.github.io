import { IExecuteWorkflow, IExecuteWorkflowSlim } from '@types';

export interface IAdminWorkflowIdExecuteContext {
  id: string;
  workflows: IExecuteWorkflow[];
  setWorkFlows: ReactSetState<IExecuteWorkflow[]>;
}

export interface IUseWorkflowExecuteHelper {
  getExecutedWorkflow: VoidFunction<Promise<void>>;
  executeWorkflow: (data: IExecuteWorkflowSlim) => Promise<void>;
  deleteExecutedWorkflow: (id: string) => Promise<void>;
}
