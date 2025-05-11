import { FormMode, IWorkflow, ReactSetState, VoidFunction } from '@types';

export interface IUseAdminWorkflows {
  createWorkflow: (name: string) => Promise<void>;
  deleteWorkflow: (workflow: IWorkflow) => Promise<void>;
  getWorkflows: () => Promise<void>;
  workflows: IWorkflow[];
  loading: boolean;
  setLoading: ReactSetState<boolean>;
  deleteWorkflowConfirm: () => Promise<void>;
  deleteWorkflowCancel: VoidFunction;
}

export interface IContext {
  mode: FormMode;
  setMode: ReactSetState<FormMode>;
  loading: boolean;
  setLoading: ReactSetState<boolean>;
  workflows: IWorkflow[];
  setWorkflows: ReactSetState<IWorkflow[]>;
  selectedWorkflow: IWorkflow | null;
  setSelectedWorkflow: ReactSetState<IWorkflow | null>;
}
