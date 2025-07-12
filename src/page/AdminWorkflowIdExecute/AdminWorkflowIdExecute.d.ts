import {
  IDbServiceData,
  IExecuteWorkflow,
  IExecuteWorkflowNode,
  IExecuteWorkflowSlim,
  IReactFlowNode,
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
  onSelectedWorkflowNode: (data: IIExecuteWorkflowNodeNode) => void;
  convertNodesToReactFlow: (nodes: IExecuteWorkflowNode[]) => IReactFlowNode[];
}

export interface IUseWorkflowNodeDetailHelper {
  closeSelectedWorkflow: VoidFunction;
  selectedWorkflowNode: IExecuteWorkflowNode | null;
  onSelectedWorkflowNodeSubmit: VoidFunction<Promise<void>>;
}
