'use client';

import { createContext, useContext } from 'react';
import { ILLM } from '@types';
import { NotImplemented } from '@utility';
import { DispatchType, IAdminAction, IAdminContext } from './AdminContext';

export const initialState: IAdminContext = {
  addLlms: NotImplemented,
  llms: [],
};

export const Context = createContext<IAdminContext>({ ...initialState });

export const useAdminContext = (): IAdminContext => useContext<IAdminContext>(Context);

export const reducer = (state: IAdminContext, action: IAdminAction): IAdminContext => {
  const { payload, type } = action;
  if (type === 'ADD_LLMS') {
    const llms = payload as unknown as ILLM[];
    return {
      ...state,
      llms: llms,
    };
  }
  return state;
};

export enum ActionType {
  ADD_LLMS = 'ADD_LLMS',
}

export const addLlms = (dispatch: DispatchType, llms: ILLM[]): void => {
  dispatch({ payload: llms, type: ActionType.ADD_LLMS });
};
