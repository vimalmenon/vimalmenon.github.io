'use client';

import { createContext, useContext } from 'react';
import { APIs } from '@data';
import { IGenericResponse, ITool, IWorkflow } from '@types';
import { makeRequest, NotImplemented } from '@utility';
import { IContext, IUseAdminWorkflows } from './AdminWorkflows';

export const Context = createContext<IContext>({
  loading: false,
  mode: 'VIEW',
  setLoading: NotImplemented,
  setMode: NotImplemented,
  setWorkflows: NotImplemented,
  workflows: [],
});

export const useAdminWorkflowsContext = (): IContext => useContext<IContext>(Context);

export const useAdminWorkflows = (): IUseAdminWorkflows => {
  const { loading, setLoading, setMode, setWorkflows, workflows } = useAdminWorkflowsContext();
  const getWorkflows = async (): Promise<void> => {
    setLoading(true);
    const { response } = await makeRequest<IGenericResponse<IWorkflow[]>>(APIs.GetWorkflows());
    setWorkflows(response.data);
    setLoading(false);
  };

  const createWorkflow = async (name: string): Promise<void> => {
    setLoading(true);
    await makeRequest<IGenericResponse<ITool[]>>(
      APIs.CreateWorkflow({
        name,
      })
    );
    await getWorkflows();
    setLoading(false);
    setMode('VIEW');
  };

  const deleteWorkflow = async (id: string): Promise<void> => {
    setLoading(true);
    await makeRequest<IGenericResponse<ITool[]>>(APIs.DeleteWorkflow(id));
    await getWorkflows();
    setLoading(false);
  };
  return {
    createWorkflow,
    deleteWorkflow,
    getWorkflows,
    loading,
    setLoading,
    workflows,
  };
};
