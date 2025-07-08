import {
  IDbServiceData,
  IExecuteWorkflow,
  IExecuteWorkflowNode,
  IExecuteWorkflowSlim,
  IWorkflowExecuteParams,
  ReactSetState,
  VoidFunction,
} from '@types';

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
  dbServiceData: IDbServiceData[];
  setDbServiceData: ReactSetState<IDbServiceData[]>;
  selectedWorkflowNode: IExecuteWorkflowNode | null;
  setSelectedWorkflowNode: ReactSetState<IExecuteWorkflowNode | null>;
}

export interface IUseWorkflowExecuteHelper {
  getExecutedWorkflow: VoidFunction<Promise<void>>;
  executeWorkflow: (data: IExecuteWorkflowSlim) => Promise<void>;
  deleteExecutedWorkflow: (id: string) => Promise<void>;
  setSelectedWorkflow: ReactSetState<IExecuteWorkflow | null>;
  onExecuteWorkflowNode: (id: string, data: IWorkflowExecuteParams) => Promise<void>;
}
