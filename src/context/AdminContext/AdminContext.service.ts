'use client';

import { createContext, useContext } from 'react';
import { ILLM, ITool } from '@types';
import { NotImplemented } from '@utility';
import { DispatchType, IAdminAction, IAdminContext } from './AdminContext';

export const initialState: IAdminContext = {
  addLlms: NotImplemented,
  addTools: NotImplemented,
  llms: [],
  tools: [],
};

export const Context = createContext<IAdminContext>({ ...initialState });

export const useAdminContext = (): IAdminContext => useContext<IAdminContext>(Context);

export enum ActionType {
  ADD_LLMS = 'ADD_LLMS',
  ADD_TOOLS = 'ADD_TOOLS',
}

export const reducer = (
  state: IAdminContext,
  action: IAdminAction<ILLM[] | ITool[]>
): IAdminContext => {
  const { payload, type } = action;
  if (type === ActionType.ADD_LLMS) {
    const llms = payload as ILLM[];
    return {
      ...state,
      llms,
    };
  }
  if (type === ActionType.ADD_TOOLS) {
    const tools = payload as ITool[];

    return {
      ...state,
      tools,
    };
  }
  return state;
};

export const addLlms = (dispatch: DispatchType<ILLM[]>, llms: ILLM[]): void => {
  dispatch({ payload: llms, type: ActionType.ADD_LLMS });
};

export const addTools = (dispatch: DispatchType<ITool[]>, tools: ITool[]): void => {
  dispatch({ payload: tools, type: ActionType.ADD_TOOLS });
};
