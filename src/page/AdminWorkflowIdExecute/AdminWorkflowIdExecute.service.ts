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
  executedWorkflows: [],
  id: '',
  loading: false,
  setExecutedWorkflows: NotImplemented,
  setLoading: NotImplemented,
  setShowCreate: NotImplemented,
  showCreate: false,
});

export const useAdminWorkflowIdExecuteContext = (): IAdminWorkflowIdExecuteContext =>
  useContext<IAdminWorkflowIdExecuteContext>(Context);

export const useWorkflowExecuteHelper = (): IUseWorkflowExecuteHelper => {
  const { id, setExecutedWorkflows, setLoading, setShowCreate } =
    useAdminWorkflowIdExecuteContext();
  const getExecutedWorkflow = async (handle: boolean = true): Promise<void> => {
    if (handle) {
      setLoading(true);
    }
    const { response } = await makeRequest<IGenericResponse<IExecuteWorkflow[]>>(
      APIs.GetExecutedWorkflow(id)
    );
    setExecutedWorkflows(response.data);
    if (handle) {
      setLoading(false);
    }
  };
  const executeWorkflow = async (data: IExecuteWorkflowSlim): Promise<void> => {
    setLoading(true);
    await makeRequest<IGenericResponse<unknown>>(APIs.ExecuteWorkflow(id, data));
    await getExecutedWorkflow(false);
    setLoading(false);
    setShowCreate(false);
  };
  const deleteExecutedWorkflow = async (executedWorkflows: IExecuteWorkflow): Promise<void> => {
    setLoading(true);
    await makeRequest<IGenericResponse<unknown>>(
      APIs.DeleteExecutedWorkflow(id, executedWorkflows.id)
    );
    await getExecutedWorkflow(false);
    setLoading(false);
  };

  return {
    deleteExecutedWorkflow,
    executeWorkflow,
    getExecutedWorkflow,
  };
};
