'use client';
import { createContext, useContext } from 'react';
import { APIs } from '@data';
import { IExecuteWorkflow, IExecuteWorkflowSlim, IGenericResponse } from '@types';
import { makeRequest, NotImplemented } from '@utility';
import {
  IAdminWorkflowIdExecuteContext,
  IUseWorkflowExecuteHelper,
} from './AdminWorkflowIdExecute';

export const Context = createContext<IAdminWorkflowIdExecuteContext>({
  id: '',
  setWorkFlows: NotImplemented,
  workflows: [],
});

export const useAdminWorkflowIdExecuteContext = (): IAdminWorkflowIdExecuteContext =>
  useContext<IAdminWorkflowIdExecuteContext>(Context);

export const useWorkflowExecuteHelper = (): IUseWorkflowExecuteHelper => {
  const { id, setWorkFlows } = useAdminWorkflowIdExecuteContext();
  const getExecutedWorkflow = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<IExecuteWorkflow[]>>(
      APIs.GetExecutedWorkflow(id)
    );
    setWorkFlows(response.data);
  };
  const executeWorkflow = async (data: IExecuteWorkflowSlim): Promise<void> => {
    await makeRequest<IGenericResponse<unknown>>(APIs.ExecuteWorkflow(id, data));
  };
  const deleteExecutedWorkflow = async (eId: string): Promise<void> => {
    await makeRequest<IGenericResponse<unknown>>(APIs.DeleteExecutedWorkflow(id, eId));
  };

  return {
    deleteExecutedWorkflow,
    executeWorkflow,
    getExecutedWorkflow,
  };
};
