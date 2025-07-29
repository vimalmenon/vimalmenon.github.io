'use client';

import { createContext, useContext } from 'react';
import { APIs } from '@data';
import { IGenericResponse, IWorkflow } from '@types';
import { makeRequest, NotImplemented } from '@utility';
import { IContext, IUseAdminWorkflows } from './AdminWorkflows';

export const Context = createContext<IContext>({
  alert: null,
  dataLoading: false,
  loading: false,
  mode: 'VIEW',
  setAlert: NotImplemented,
  setDataLoading: NotImplemented,
  setLoading: NotImplemented,
  setMode: NotImplemented,
  setWorkflows: NotImplemented,
  workflows: [],
});

export const useAdminWorkflowsContext = (): IContext => useContext<IContext>(Context);

export const useAdminWorkflows = (): IUseAdminWorkflows => {
  const { loading, setAlert, setDataLoading, setLoading, setMode, setWorkflows, workflows } =
    useAdminWorkflowsContext();
  const getWorkflows = async (): Promise<void> => {
    setLoading(true);
    const { response } = await makeRequest<IGenericResponse<IWorkflow[]>>(APIs.GetWorkflows());
    setWorkflows(response.data);
    setLoading(false);
  };

  const createWorkflow = async (name: string): Promise<void> => {
    setDataLoading(true);
    const { error } = await makeRequest<IGenericResponse<string[]>>(
      APIs.CreateWorkflow({
        name,
      })
    );
    if (error) {
      setAlert({
        children: 'Error while creating workflow.',
        severity: 'warning',
      });
      setDataLoading(false);
      setMode('VIEW');
      return;
    }
    await getWorkflows();
    setDataLoading(false);
    setMode('VIEW');
  };

  const deleteWorkflow = async (workflow: IWorkflow): Promise<void> => {
    setLoading(true);
    await makeRequest<IGenericResponse<string[]>>(APIs.DeleteWorkflow(workflow.id));
    await getWorkflows();
    setLoading(false);
  };
  const onAlertClose = (): void => {
    setAlert(null);
  };
  return {
    createWorkflow,
    deleteWorkflow,
    getWorkflows,
    loading,
    onAlertClose,
    setLoading,
    workflows,
  };
};
