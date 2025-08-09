import { ActionDispatch } from 'react';

import { ILLM, VoidFunction } from '@types';

export interface IAdminContext {
  llms: ILLM[];
  tools: string[];
  services: string[];
  workflowTypes: string[];
  structuredOutputTypes: string[];
  getTools: VoidFunction<Promise<void>>;
  getLLMs: VoidFunction<Promise<void>>;
  getWorkflowTypes: VoidFunction<Promise<void>>;
  getServices: VoidFunction<Promise<void>>;
  getStructuredOutputTypes: VoidFunction<Promise<void>>;
}

export type ActionType =
  | 'ADD_LLMS'
  | 'ADD_TOOLS'
  | 'ADD_WORKFLOW_TYPES'
  | 'ADD_SERVICES'
  | 'ADD_STRUCTURED_OUTPUT_TYPES';

export interface IAdminAction<T> {
  type: ActionType;
  payload?: T;
}

export type DispatchType<T> = ActionDispatch<[action: IAdminAction<T>]>;
