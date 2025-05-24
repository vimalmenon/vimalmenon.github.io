'use client';
import { createContext, useContext } from 'react';
import { APIs } from '@data';
import { IExecuteWorkflow, IGenericResponse } from '@types';
import { makeRequest } from '@utility';
import {
  IAdminWorkflowIdExecuteContext,
  IUseWorkflowExecuteHelper,
} from './AdminWorkflowIdExecute';

export const Context = createContext<IAdminWorkflowIdExecuteContext>({
  id: '',
});

export const useAdminWorkflowIdExecuteContext = (): IAdminWorkflowIdExecuteContext =>
  useContext<IAdminWorkflowIdExecuteContext>(Context);

export const useWorkflowExecuteHelper = (): IUseWorkflowExecuteHelper => {
  const { id } = useAdminWorkflowIdExecuteContext();
  const getExecutedWorkflow = async (): Promise<void> => {
    await makeRequest(APIs.GetExecutedWorkflow(id));
  };
  const executeWorkflow = async (data: IExecuteWorkflow): Promise<void> => {
    await makeRequest<IGenericResponse<unknown>>(APIs.ExecuteWorkflow(id, data));
  };
  return {
    executeWorkflow,
    getExecutedWorkflow,
  };
};
