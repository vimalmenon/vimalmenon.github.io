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
  selectedWorkflow: null,
  setLoading: NotImplemented,
  setSelectedWorkflow: NotImplemented,
  setShowCreate: NotImplemented,
  setWorkFlows: NotImplemented,
  showCreate: false,
  workflows: [],
});

export const useAdminWorkflowIdExecuteContext = (): IAdminWorkflowIdExecuteContext =>
  useContext<IAdminWorkflowIdExecuteContext>(Context);

export const useWorkflowExecuteHelper = (): IUseWorkflowExecuteHelper => {
  const { id, setLoading, setShowCreate, setWorkFlows } = useAdminWorkflowIdExecuteContext();
  const getExecutedWorkflow = async (handle: boolean = true): Promise<void> => {
    if (handle) {
      setLoading(true);
    }
    const { response } = await makeRequest<IGenericResponse<IExecuteWorkflow[]>>(
      APIs.GetExecutedWorkflow(id)
    );
    setWorkFlows(response.data);
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
  const deleteExecutedWorkflow = async (eId: string): Promise<void> => {
    setLoading(true);
    await makeRequest<IGenericResponse<unknown>>(APIs.DeleteExecutedWorkflow(id, eId));
    await getExecutedWorkflow(false);
    setLoading(false);
  };

  return {
    deleteExecutedWorkflow,
    executeWorkflow,
    getExecutedWorkflow,
  };
};
