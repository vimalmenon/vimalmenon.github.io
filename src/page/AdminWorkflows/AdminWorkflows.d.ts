import { ILLM, IWorkflow } from '@types';

export interface IUseAdminWorkflows {
  createUUID: () => Promise<void>;
  createWorkflow: (name: string) => Promise<void>;
  deleteWorkflow: (id: string) => Promise<void>;
  getLLMs: () => Promise<void>;
  getWorkflows: () => Promise<void>;
  llms: ILLM[];
  uuid: string;
  workflows: IWorkflow[];
}
