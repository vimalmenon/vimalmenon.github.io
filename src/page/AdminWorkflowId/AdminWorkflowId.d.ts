import { SyntheticEvent } from 'react';
import { FormMode, IReactChildren, IWorkflow, ReactSetState, VoidFunction } from '@types';

export interface IAdminWorkflowId {
  id: string;
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
  selectedTab: number;
  setSelectedTab: ReactSetState<number>;
  nodes: string[];
  setNodes: ReactSetState<string[]>;
  workflowFormMode: FormMode;
  setWorkflowFormMode: ReactSetState<FormMode>;
  loading: boolean;
  setLoading: ReactSetState<boolean>;
}

export interface IUseTabHelper {
  onTabChange: (event: SyntheticEvent, newValue: number) => void;
  selectedTab: number;
}

export interface IUseWorkflowFormHelper {
  editWorkflowFormMode: VoidFunction;
  viewWorkflowFormMode: VoidFunction;
  workflowFormMode: FormMode;
}
