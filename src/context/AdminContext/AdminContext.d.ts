import { ILLM } from '@types';

export interface IAdminContext {
  llms: ILLM[];
  addLlms: (llms: ILLM[]) => void;
}

export type ActionType = 'ADD_LLMS';

export interface IAdminAction<T = string> {
  type: ActionType;
  payload?: T;
}

export type DispatchType = ActionDispatch<[action: IAppAction]>;
