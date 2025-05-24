import { IExecuteWorkflow, IExecuteWorkflowSlim } from '@types';
import { ReactSetState, VoidFunction } from '@types';
export interface IAdminWorkflowIdExecuteContext {
  id: string;
  workflows: IExecuteWorkflow[];
  setWorkFlows: ReactSetState<IExecuteWorkflow[]>;
  loading: boolean;
  setLoading: ReactSetState<boolean>;
}

export interface IUseWorkflowExecuteHelper {
  getExecutedWorkflow: VoidFunction<Promise<void>>;
  executeWorkflow: (data: IExecuteWorkflowSlim) => Promise<void>;
  deleteExecutedWorkflow: (id: string) => Promise<void>;
}
