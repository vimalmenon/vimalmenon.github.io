import { SyntheticEvent } from 'react';
import {
  FormMode,
  INodeSlim,
  IReactChildren,
  IWorkflow,
  ReactSetState,
  VoidFunction,
} from '@types';

export interface IAdminWorkflowId {
  id: string;
}

export interface INodeTab {
  name: string;
  mode: FormMode;
  selected: boolean;
}

export interface IAdminWorkflowIdContext extends IReactChildren {
  id: string;
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
}

export interface IUseTabHelper {
  onTabChange: (event: SyntheticEvent, newValue: number) => void;
  selectedTab: number;
  onAddNodeTab: VoidFunction;
  onAddNodeCancel: VoidFunction;
  nodeFormMode: FormMode;
}

export interface IUseWorkflowFormHelper {
  editWorkflowFormMode: VoidFunction;
  viewWorkflowFormMode: VoidFunction;
  workflowFormMode: FormMode;
}

export interface IUseWorkflowDataHelper {
  createNode: (data: INodeSlim) => Promise<void>;
  deleteNode: (nodeId: string) => Promise<void>;
  executeWorkflow: VoidFunction<Promise<void>>;
  getLLMs: VoidFunction<Promise<void>>;
  getTools: VoidFunction<Promise<void>>;
  getWorkFlow: VoidFunction<Promise<void>>;
  id: string;
  updateNode: (nodeId: string, data: INode) => Promise<void>;
  updateWorkflow: (data: IWorkflow) => Promise<void>;
}

export interface IUseNodeTabsHelper {
  nodeTabs: INodeTab[];
  setNodeMode: (index: number, mode: FormMode) => void;
}
