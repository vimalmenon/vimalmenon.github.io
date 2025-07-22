import { VoidFunction } from '@types';

export interface IWorkflowId {
  page?: string[];
}

export interface IPage {
  params: Promise<IWorkflowId>;
}

export interface IError {
  reset: VoidFunction;
}
