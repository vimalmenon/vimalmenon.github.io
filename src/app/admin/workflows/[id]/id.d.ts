import { VoidFunction } from '@types';

export interface IWorkflowId {
  id: string;
}

export interface IPage {
  params: Promise<IWorkflowId>;
}

export interface IError {
  reset: VoidFunction;
}
