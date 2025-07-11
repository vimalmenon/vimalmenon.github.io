'use client';

import { createContext, useContext } from 'react';
import { APIs } from '@data';
import { IGenericResponse, IWorkflow } from '@types';
import { makeRequest, NotImplemented } from '@utility';
import { useAdminWorkflowHelper } from '../AdminWorkflowContext';
import { IContext, IUseAdminWorkflows } from './AdminWorkflows';

export const Context = createContext<IContext>({
  dataLoading: false,
  loading: false,
  mode: 'VIEW',
  selectedWorkflow: null,
  setDataLoading: NotImplemented,
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
    setDataLoading,
    setLoading,
    setMode,
    setSelectedWorkflow,
    workflows,
  } = useAdminWorkflowsContext();
  const { getWorkflows: getWorkflowsHelper } = useAdminWorkflowHelper();
  const getWorkflows = async (): Promise<void> => {
    setLoading(true);
    await getWorkflowsHelper();
    setLoading(false);
  };

  const createWorkflow = async (name: string): Promise<void> => {
    setDataLoading(true);
    await makeRequest<IGenericResponse<string[]>>(
      APIs.CreateWorkflow({
        name,
      })
    );
    await getWorkflows();
    setDataLoading(false);
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
