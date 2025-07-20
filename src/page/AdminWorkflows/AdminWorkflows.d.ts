import { FormMode, IWorkflow, ReactSetState } from '@types';

export interface IContext {
  mode: FormMode;
  setMode: ReactSetState<FormMode>;
  loading: boolean;
  setLoading: ReactSetState<boolean>;
  workflows: IWorkflow[];
  setWorkflows: ReactSetState<IWorkflow[]>;
  dataLoading: boolean;
  setDataLoading: ReactSetState<boolean>;
}
export interface IUseAdminWorkflows {
  createWorkflow: (name: string) => Promise<void>;
  deleteWorkflow: (workflow: IWorkflow) => Promise<void>;
  getWorkflows: () => Promise<void>;
  workflows: IWorkflow[];
  loading: boolean;
  setLoading: ReactSetState<boolean>;
}
