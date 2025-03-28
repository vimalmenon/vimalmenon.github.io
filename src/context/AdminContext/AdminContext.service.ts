'use client';

import { createContext, useContext } from 'react';
import { APIs } from '@data';
import { IGenericResponse, ILLM, ITool } from '@types';
import { makeRequest, NotImplemented } from '@utility';
import { DispatchType, IAdminAction, IAdminContext } from './AdminContext';

export const initialState: IAdminContext = {
  addLlms: NotImplemented,
  addTools: NotImplemented,
  getLLMs: NotImplemented,
  getTools: NotImplemented,
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

export const getTools = async (dispatch: DispatchType<ITool[]>): Promise<void> => {
  const { response } = await makeRequest<IGenericResponse<ITool[]>>(APIs.GetTools());
  addTools(dispatch, response.data);
};

export const getLLMs = async (dispatch: DispatchType<ILLM[]>): Promise<void> => {
  const { response } = await makeRequest<IGenericResponse<ILLM[]>>(APIs.GetLLMs());
  addLlms(dispatch, response.data);
};
