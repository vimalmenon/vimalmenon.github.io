import { FormMode, IWorkflow, ReactSetState } from '@types';

export interface IUseAdminWorkflows {
  createWorkflow: (name: string) => Promise<void>;
  deleteWorkflow: (id: string) => Promise<void>;
  getWorkflows: () => Promise<void>;
  workflows: IWorkflow[];
  loading: boolean;
  setLoading: ReactSetState<boolean>;
}

export interface IContext {
  mode: FormMode;
  setMode: ReactSetState<FormMode>;
  loading: boolean;
  setLoading: ReactSetState<boolean>;
  workflows: IWorkflow[];
  setWorkflows: ReactSetState<IWorkflow[]>;
}
