'use client';

import { createContext, useContext } from 'react';
import { APIs } from '@data';
import { IGenericResponse, IWorkflow } from '@types';
import { makeRequest, NotImplemented } from '@utility';
import { IAdminWorkflowContext, IUseAdminWorkflowHelper } from './AdminWorkflowContext';

export const Context = createContext<IAdminWorkflowContext>({
  executedWorkflows: [],
  selectedExecutedWorkflow: null,
  selectedWorkflow: null,
  setExecutedWorkflows: NotImplemented,
  setSelectedExecutedWorkflow: NotImplemented,
  setSelectedWorkflow: NotImplemented,
  setWorkflows: NotImplemented,
  workflows: [],
});

export const useAdminWorkflowContext = (): IAdminWorkflowContext =>
  useContext<IAdminWorkflowContext>(Context);

export const useAdminWorkflowHelper = (): IUseAdminWorkflowHelper => {
  const { setSelectedWorkflow, setWorkflows } = useAdminWorkflowContext();
  const getWorkflows = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<IWorkflow[]>>(APIs.GetWorkflows());
    setWorkflows(response.data);
  };
  return {
    getWorkflows,
    setSelectedWorkflow,
  };
};
