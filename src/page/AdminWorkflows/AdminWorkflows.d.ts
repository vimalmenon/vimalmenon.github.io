import { IWorkflow } from '@types';

export interface IUseAdminWorkflows {
  createWorkflow: (name: string) => Promise<void>;
  deleteWorkflow: (id: string) => Promise<void>;
  getWorkflows: () => Promise<void>;
  workflows: IWorkflow[];
}
