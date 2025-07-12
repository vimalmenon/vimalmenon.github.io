import { VoidFunction } from '@types';

export interface IWorkflowId {
  data?: string[];
}

export interface IPage {
  params: Promise<IWorkflowId>;
}

export interface IError {
  reset: VoidFunction;
}
