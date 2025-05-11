'use client';

import { createContext, useContext } from 'react';
import { APIs } from '@data';
import { IGenericResponse, IWorkflow } from '@types';
import { makeRequest, NotImplemented } from '@utility';
import { IContext, IUseAdminWorkflows } from './AdminWorkflows';

export const Context = createContext<IContext>({
  loading: false,
  mode: 'VIEW',
  selectedWorkflow: null,
  setLoading: NotImplemented,
  setMode: NotImplemented,
  setSelectedWorkflow: NotImplemented,
  setWorkflows: NotImplemented,
  workflows: [],
});

export const useAdminWorkflowsContext = (): IContext => useContext<IContext>(Context);

export const useAdminWorkflows = (): IUseAdminWorkflows => {
  const {
    loading,
    selectedWorkflow,
    setLoading,
    setMode,
    setSelectedWorkflow,
    setWorkflows,
    workflows,
  } = useAdminWorkflowsContext();
  const getWorkflows = async (): Promise<void> => {
    setLoading(true);
    const { response } = await makeRequest<IGenericResponse<IWorkflow[]>>(APIs.GetWorkflows());
    setWorkflows(response.data);
    setLoading(false);
  };

  const createWorkflow = async (name: string): Promise<void> => {
    setLoading(true);
    await makeRequest<IGenericResponse<string[]>>(
      APIs.CreateWorkflow({
        name,
      })
    );
    await getWorkflows();
    setLoading(false);
    setMode('VIEW');
  };

  const deleteWorkflow = async (workflow: IWorkflow): Promise<void> => {
    setSelectedWorkflow(workflow);
  };
  const deleteWorkflowConfirm = async (): Promise<void> => {
    if (selectedWorkflow) {
      setLoading(true);
      await makeRequest<IGenericResponse<string[]>>(APIs.DeleteWorkflow(selectedWorkflow.id));
      await getWorkflows();
      setLoading(false);
      setSelectedWorkflow(null);
    }
  };
  const deleteWorkflowCancel = (): void => {
    setSelectedWorkflow(null);
  };
  return {
    createWorkflow,
    deleteWorkflow,
    deleteWorkflowCancel,
    deleteWorkflowConfirm,
    getWorkflows,
    loading,
    setLoading,
    workflows,
  };
};
