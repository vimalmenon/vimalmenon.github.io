import { IWorkflow, ReactSetState } from '@types';

export interface IAdminWorkflowContextComponent {
  id: string;
  executeId: string;
}

export interface IAdminWorkflowContext extends IAdminWorkflowContextComponent {
  id: string;
  executeId: string;
  workflows: IWorkflow[];
  setWorkflows: ReactSetState<IWorkflow[]>;
  selectedWorkflow: IWorkflow | null;
  setSelectedWorkflow: ReactSetState<IWorkflow | null>;
}
