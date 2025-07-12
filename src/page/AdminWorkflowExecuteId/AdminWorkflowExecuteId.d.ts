import {
  IDbServiceData,
  IExecuteWorkflow,
  IExecuteWorkflow,
  IExecuteWorkflowNode,
  IExecuteWorkflowSlim,
  ReactSetState,
} from '@types';

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
  loading: boolean;
  setLoading: ReactSetState<boolean>;
}

export interface IUseAdminWorkflowIdExecuteHelper {
  getExecutedWorkflow: VoidFunction<Promise<void>>;
}

export interface IUseWorkflowExecuteHelper {
  executeWorkflow: (data: IExecuteWorkflowSlim) => Promise<void>;
  setSelectedExecutedWorkflow: ReactSetState<IExecuteWorkflow | null>;
  convertNodesToReactFlow: (nodes: IExecuteWorkflowNode[]) => IReactFlowNode[];
  onSelectedWorkflowNode: (data: IIExecuteWorkflowNodeNode) => void;
}
export interface IUseWorkflowNodeDetailHelper {
  closeSelectedWorkflow: VoidFunction;
  selectedWorkflowNode: IExecuteWorkflowNode | null;
  onSelectedWorkflowNodeSubmit: VoidFunction<Promise<void>>;
}
