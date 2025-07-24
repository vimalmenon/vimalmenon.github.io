'use client';

import { createContext, useContext } from 'react';
import { APIs } from '@data';
import { IGenericResponse, ILLM } from '@types';
import { makeRequest, NotImplemented } from '@utility';
import { DispatchType, IAdminAction, IAdminContext } from './AdminContext';

export const initialState: IAdminContext = {
  getLLMs: NotImplemented,
  getServices: NotImplemented,
  getStructuredOutputTypes: NotImplemented,
  getTools: NotImplemented,
  getWorkflowTypes: NotImplemented,
  llms: [],
  services: [],
  structuredOutputTypes: [],
  tools: [],
  workflowTypes: [],
};

export const Context = createContext<IAdminContext>({ ...initialState });

export const useAdminContext = (): IAdminContext => useContext<IAdminContext>(Context);

export enum ActionType {
  ADD_LLMS = 'ADD_LLMS',
  ADD_TOOLS = 'ADD_TOOLS',
  ADD_WORKFLOW_TYPES = 'ADD_WORKFLOW_TYPES',
  ADD_SERVICES = 'ADD_SERVICES',
  ADD_STRUCTURED_OUTPUT_TYPES = 'ADD_STRUCTURED_OUTPUT_TYPES',
}

export const reducer = (
  state: IAdminContext,
  action: IAdminAction<ILLM[] | string[]>
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
    const tools = payload as string[];
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
  if (type === ActionType.ADD_SERVICES) {
    const services = payload as string[];
    return {
      ...state,
      services,
    };
  }
  if (type === ActionType.ADD_STRUCTURED_OUTPUT_TYPES) {
    const structuredOutputTypes = payload as string[];
    return {
      ...state,
      structuredOutputTypes,
    };
  }
  return state;
};

export const addLlms = (dispatch: DispatchType<ILLM[]>, llms: ILLM[]): void => {
  dispatch({ payload: llms, type: ActionType.ADD_LLMS });
};

export const addTools = (dispatch: DispatchType<string[]>, tools: string[]): void => {
  dispatch({ payload: tools, type: ActionType.ADD_TOOLS });
};
export const addWorkflowTypes = (dispatch: DispatchType<string[]>, types: string[]): void => {
  dispatch({ payload: types, type: ActionType.ADD_WORKFLOW_TYPES });
};

export const addServices = (dispatch: DispatchType<string[]>, services: string[]): void => {
  dispatch({ payload: services, type: ActionType.ADD_SERVICES });
};

export const getTools = async (dispatch: DispatchType<string[]>): Promise<void> => {
  const { response } = await makeRequest<IGenericResponse<string[]>>(APIs.GetTools());
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

export const getServices = async (dispatch: DispatchType<string[]>): Promise<void> => {
  const { response } = await makeRequest<IGenericResponse<string[]>>(APIs.GetServices());
  addServices(dispatch, response.data);
};

export const getStructuredOutputTypes = async (dispatch: DispatchType<string[]>): Promise<void> => {
  const { response } = await makeRequest<IGenericResponse<string[]>>(
    APIs.GetStructuredOutputTypes()
  );
  dispatch({ payload: response.data, type: ActionType.ADD_STRUCTURED_OUTPUT_TYPES });
};
