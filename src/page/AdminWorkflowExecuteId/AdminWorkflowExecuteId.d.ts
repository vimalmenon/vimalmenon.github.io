import {
  IAlert,
  IDbServiceData,
  IExecuteWorkflow,
  IExecuteWorkflowNode,
  IExecuteWorkflowSlim,
  IWorkflowExecuteParams,
  ReactSetState,
  VoidFunction,
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
  alert: IAlert | null;
  setAlert: ReactSetState<IAlert | null>;
}

export interface IUseAdminWorkflowIdExecuteHelper {
  getExecutedWorkflow: VoidFunction<Promise<void>>;
  getDatabaseData: VoidFunction<Promise<void>>;
  dbServiceDelete: (data: IDbServiceData) => Promise<void>;
  onAlertClose: VoidFunction;
  alert: IAlert | null;
  deleteExecutedWorkflow: VoidFunction<Promise<void>>;
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
  onSelectedWorkflowNodeSubmit: (data: IWorkflowExecuteParams) => Promise<void>;
}
