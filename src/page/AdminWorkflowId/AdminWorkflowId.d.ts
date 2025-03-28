import { IReactChildren, IWorkflow, ReactSetState } from '@types';

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
}
