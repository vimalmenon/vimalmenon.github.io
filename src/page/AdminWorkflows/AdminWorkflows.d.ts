import { IWorkflow } from '@types';

export interface IUseAdminWorkflows {
  createUUID: () => Promise<void>;
  createWorkflow: (name: string) => Promise<void>;
  deleteWorkflow: (id: string) => Promise<void>;
  getWorkflows: () => Promise<void>;
  uuid: string;
  workflows: IWorkflow[];
}
