import { SyntheticEvent } from 'react';

import { FormMode, IAlert, INode, INodeSlim, IWorkflow, ReactSetState, VoidFunction } from '@types';

export interface INodeTab {
  name: string;
  label: string;
  mode: FormMode;
  selected: boolean;
  isBroken: boolean;
}

export interface IContext {
  id: string;
  workflow: IWorkflow | null;
  setWorkflow: ReactSetState<IWorkflow | null>;
  workflowLoading: boolean;
  setWorkflowLoading: ReactSetState<boolean>;
  workflowFormMode: FormMode;
  setWorkflowFormMode: ReactSetState<FormMode>;
  loading: boolean;
  setLoading: ReactSetState<boolean>;
  nodeTabs: INodeTab[];
  setNodeTabs: ReactSetState<INodeTab[]>;
  nodeFormMode: FormMode;
  setNodeFormMode: ReactSetState<FormMode>;
  error: string | null;
  setError: ReactSetState<string | null>;
  isStart: boolean;
  setIsStart: ReactSetState<boolean>;
  alert: IAlert | null;
  setAlert: ReactSetState<IAlert | null>;
  showCreate: boolean;
  setShowCreate: ReactSetState<boolean>;
}

export interface IUseTabHelper {
  onTabChange: (event: SyntheticEvent, newValue: number) => void;
  selectedTab: number;
  onAddNodeTab: VoidFunction;
  onAddNodeCancel: VoidFunction;
  nodeFormMode: FormMode;
  setNodeMode: (index: number, mode: FormMode) => void;
}

export interface IUseWorkflowFormHelper {
  editWorkflowFormMode: VoidFunction;
  viewWorkflowFormMode: VoidFunction;
  workflowFormMode: FormMode;
  deleteWorkflow: VoidFunction<Promise<void>>;
}

export interface IUseWorkflowDataHelper {
  createNode: (data: INodeSlim) => Promise<void>;
  id: string;
  updateNode: (nodeId: string, data: INode) => Promise<void>;
  updateWorkflow: (data: IWorkflow) => Promise<void>;
  deleteNodeConfirm: (data?: INodeFull) => Promise<void>;
  getAllData: VoidFunction<Promise<void>>;
  deleteExecutedWorkflow: (executedWorkflows: IExecuteWorkflow) => Promise<void>;
  getWorkFlow: (skipLoading?: boolean) => Promise<void>;
  onAlertClose: VoidFunction;
}

export interface IUseExecuteWorkflowHelper {
  executeWorkflow: (data: IExecuteWorkflowSlim) => Promise<void>;
  id: string;
  setShowCreate: ReactSetState<boolean>;
}
