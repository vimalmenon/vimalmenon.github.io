import { SyntheticEvent } from 'react';
import {
  FormMode,
  IExecuteWorkflow,
  INode,
  INodeSlim,
  IWorkflow,
  ReactSetState,
  VoidFunction,
} from '@types';

export interface INodeTab {
  name: string;
  label: string;
  mode: FormMode;
  selected: boolean;
}

export interface IContext {
  id: string;
  workflow?: IWorkflow;
  setWorkflow: ReactSetState<IWorkflow | undefined>;
  workflowLoading: boolean;
  setWorkflowLoading: ReactSetState<boolean>;
  nodes: string[];
  setNodes: ReactSetState<string[]>;
  workflowFormMode: FormMode;
  setWorkflowFormMode: ReactSetState<FormMode>;
  loading: boolean;
  setLoading: ReactSetState<boolean>;
  nodeTabs: INodeTab[];
  setNodeTabs: ReactSetState<INodeTab[]>;
  nodeFormMode: FormMode;
  setNodeFormMode: ReactSetState<FormMode>;
  selectedNode: INode | null;
  setSelectedNode: ReactSetState<INode | null>;
  error: string | null;
  setError: ReactSetState<string | null>;
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
}

export interface IUseWorkflowDataHelper {
  createNode: (data: INodeSlim) => Promise<void>;
  deleteNode: (nodeId: string) => Promise<void>;
  id: string;
  updateNode: (nodeId: string, data: INode) => Promise<void>;
  updateWorkflow: (data: IWorkflow) => Promise<void>;
  deleteNodeConfirm: VoidFunction<Promise<void>>;
  deleteNodeCancel: VoidFunction;
  getAllData: VoidFunction<Promise<void>>;
}

export interface IUseWorkflowExecuteHelper {
  getExecutedWorkflow: VoidFunction<Promise<void>>;
  executeWorkflow: (data: IExecuteWorkflow) => Promise<void>;
}
