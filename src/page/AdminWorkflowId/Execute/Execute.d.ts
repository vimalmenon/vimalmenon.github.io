import { IExecuteWorkflow } from '@types';

export interface IExecute {
  executedWorkflows: IExecuteWorkflow[];
  id: string;
  deleteExecutedWorkflow: (executedWorkflows: IExecuteWorkflow) => Promise<void>;
}
