import { ActionDispatch } from 'react';
import { ILLM, ITool } from '@types';

export interface IAdminContext {
  llms: ILLM[];
  tools: ITool[];
  addLlms: (llms: ILLM[]) => void;
  addTools: (tools: ITool[]) => void;
}

export type ActionType = 'ADD_LLMS' | 'ADD_TOOLS';

export interface IAdminAction<T> {
  type: ActionType;
  payload?: T;
}

export type DispatchType<T> = ActionDispatch<[action: IAdminAction<T>]>;
