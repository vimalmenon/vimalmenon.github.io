import { ILLM, ITool, IWorkflow } from '@types';

export interface IUseAdminWorkflows {
  createUUID: () => Promise<void>;
  createWorkflow: (name: string) => Promise<void>;
  deleteWorkflow: (id: string) => Promise<void>;
  getLLMs: () => Promise<void>;
  getTools: () => Promise<void>;
  getWorkflows: () => Promise<void>;
  llms: ILLM[];
  tools: ITool[];
  uuid: string;
  workflows: IWorkflow[];
}
