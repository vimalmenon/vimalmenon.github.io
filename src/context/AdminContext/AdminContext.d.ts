import { ActionDispatch } from 'react';
import { ILLM } from '@types';

export interface IAdminContext {
  llms: ILLM[];
  addLlms: (llms: ILLM[]) => void;
}

export type ActionType = 'ADD_LLMS';

export interface IAdminAction<T> {
  type: ActionType;
  payload?: T;
}

export type DispatchType<T> = ActionDispatch<[action: IAdminAction<T>]>;
