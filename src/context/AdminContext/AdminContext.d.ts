import { ActionDispatch } from 'react';
import { ILLM } from '@types';

export interface IAdminContext {
  llms: ILLM[];
  tools: string[];
  workflowTypes: string[];
  getTools: () => Promise<void>;
  getLLMs: () => Promise<void>;
  getWorkflowTypes: () => Promise<void>;
}

export type ActionType = 'ADD_LLMS' | 'ADD_TOOLS' | 'ADD_WORKFLOW_TYPES';

export interface IAdminAction<T> {
  type: ActionType;
  payload?: T;
}

export type DispatchType<T> = ActionDispatch<[action: IAdminAction<T>]>;
