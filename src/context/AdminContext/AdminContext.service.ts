'use client';

import { createContext, useContext } from 'react';
import { APIs } from '@data';
import { IGenericResponse, ILLM, ITool } from '@types';
import { makeRequest, NotImplemented } from '@utility';
import { DispatchType, IAdminAction, IAdminContext } from './AdminContext';

export const initialState: IAdminContext = {
  getLLMs: NotImplemented,
  getTools: NotImplemented,
  getWorkflowTypes: NotImplemented,
  llms: [],
  tools: [],
  workflowTypes: [],
};

export const Context = createContext<IAdminContext>({ ...initialState });

export const useAdminContext = (): IAdminContext => useContext<IAdminContext>(Context);

export enum ActionType {
  ADD_LLMS = 'ADD_LLMS',
  ADD_TOOLS = 'ADD_TOOLS',
  ADD_WORKFLOW_TYPES = 'ADD_WORKFLOW_TYPES',
}

export const reducer = (
  state: IAdminContext,
  action: IAdminAction<ILLM[] | ITool[] | string[]>
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
  if (type === ActionType.ADD_WORKFLOW_TYPES) {
    const workflowTypes = payload as string[];
    return {
      ...state,
      workflowTypes,
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
export const addWorkflowTypes = (dispatch: DispatchType<string[]>, types: string[]): void => {
  dispatch({ payload: types, type: ActionType.ADD_WORKFLOW_TYPES });
};

export const getTools = async (dispatch: DispatchType<ITool[]>): Promise<void> => {
  const { response } = await makeRequest<IGenericResponse<ITool[]>>(APIs.GetTools());
  addTools(dispatch, response.data);
};

export const getLLMs = async (dispatch: DispatchType<ILLM[]>): Promise<void> => {
  const { response } = await makeRequest<IGenericResponse<ILLM[]>>(APIs.GetLLMs());
  addLlms(dispatch, response.data);
};

export const getWorkflowTypes = async (dispatch: DispatchType<string[]>): Promise<void> => {
  const { response } = await makeRequest<IGenericResponse<string[]>>(APIs.GetWorkflowTypes());
  addWorkflowTypes(dispatch, response.data);
};
