import { IExecuteWorkflow, IExecuteWorkflowSlim } from '@types';
import { ReactSetState, VoidFunction } from '@types';
export interface IAdminWorkflowIdExecuteContext {
  id: string;
  workflows: IExecuteWorkflow[];
  setWorkFlows: ReactSetState<IExecuteWorkflow[]>;
  loading: boolean;
  setLoading: ReactSetState<boolean>;
  showCreate: boolean;
  setShowCreate: ReactSetState<boolean>;
  selectedWorkflow: IExecuteWorkflow | null;
  setSelectedWorkflow: ReactSetState<IExecuteWorkflow | null>;
}

export interface IUseWorkflowExecuteHelper {
  getExecutedWorkflow: VoidFunction<Promise<void>>;
  executeWorkflow: (data: IExecuteWorkflowSlim) => Promise<void>;
  deleteExecutedWorkflow: (id: string) => Promise<void>;
  setSelectedWorkflow: ReactSetState<IExecuteWorkflow | null>;
  onExecuteWorkflowNode: VoidFunction<Promise<void>>;
}
