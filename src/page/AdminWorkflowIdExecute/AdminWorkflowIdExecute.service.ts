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
  loading: false,
  setLoading: NotImplemented,
  setWorkFlows: NotImplemented,
  workflows: [],
});

export const useAdminWorkflowIdExecuteContext = (): IAdminWorkflowIdExecuteContext =>
  useContext<IAdminWorkflowIdExecuteContext>(Context);

export const useWorkflowExecuteHelper = (): IUseWorkflowExecuteHelper => {
  const { id, setLoading, setWorkFlows } = useAdminWorkflowIdExecuteContext();
  const getExecutedWorkflow = async (): Promise<void> => {
    setLoading(true);
    const { response } = await makeRequest<IGenericResponse<IExecuteWorkflow[]>>(
      APIs.GetExecutedWorkflow(id)
    );
    setWorkFlows(response.data);
    setLoading(false);
  };
  const executeWorkflow = async (data: IExecuteWorkflowSlim): Promise<void> => {
    await makeRequest<IGenericResponse<unknown>>(APIs.ExecuteWorkflow(id, data));
    await getExecutedWorkflow();
  };
  const deleteExecutedWorkflow = async (eId: string): Promise<void> => {
    await makeRequest<IGenericResponse<unknown>>(APIs.DeleteExecutedWorkflow(id, eId));
    await getExecutedWorkflow();
  };

  return {
    deleteExecutedWorkflow,
    executeWorkflow,
    getExecutedWorkflow,
  };
};
