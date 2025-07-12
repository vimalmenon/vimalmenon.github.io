import {
  IExecuteWorkflow,
  IExecuteWorkflowNode,
  IExecuteWorkflowSlim,
  ReactSetState,
  VoidFunction,
} from '@types';

export interface IAdminWorkflowIdExecuteContext {
  id: string;
  executedWorkflows: IExecuteWorkflow[];
  setExecutedWorkflows: ReactSetState<IExecuteWorkflow[]>;
  loading: boolean;
  setLoading: ReactSetState<boolean>;
  showCreate: boolean;
  setShowCreate: ReactSetState<boolean>;
  selectedWorkflowNode: IExecuteWorkflowNode | null;
  setSelectedWorkflowNode: ReactSetState<IExecuteWorkflowNode | null>;
}

export interface IUseWorkflowExecuteHelper {
  getExecutedWorkflow: VoidFunction<Promise<void>>;
  executeWorkflow: (data: IExecuteWorkflowSlim) => Promise<void>;
  deleteExecutedWorkflow: (id: string) => Promise<void>;
  onSelectedWorkflowNode: (data: IExecuteWorkflowNodeNode) => void;
}
